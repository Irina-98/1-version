<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\EtokenUser;
use Illuminate\Support\Facades\Auth;

use App\Helpers\Utilities;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     * path="/api/login",
     * summary="Авторизация по логину (электронной почте), паролю",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     *    @OA\JsonContent(
     *       required={"email","password"},
     *       @OA\Property(property="email", type="string", format="email", example="admin@email.com"),
     *       @OA\Property(property="password", type="string", format="password", example="zxcv"),
     *    ),
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Неверные параметры авторизации",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Invalid login details")
     *        )
     *     )
     * )
    */
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        EtokenUser::where('user_id', '=', $user->id)->delete();
        while(true) {
            $etoken = Utilities::generateRandomString();
            if (EtokenUser::where('etoken', '=', $etoken)->count() == 0) {
                break;
            }
        }
        EtokenUser::create(array('etoken' => $etoken, 'user_id' => $user->id));

        $token = $user->createToken('auth_token')->plainTextToken;
        $isAdmin = $user->hasRole(['admin']);
        $isEmployee = $user->hasRole(['employee']);
        $isStudent = $user->hasRole(['student']);
        $isParent = $user->hasRole(['parent']);
        $isEnrollee = $user->hasRole(['enrollee']);
        $isUser = $isEmployee || $isStudent || $isParent || $isEnrollee;
        
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'isAdmin' => $isAdmin,
            'isUser' => $isUser,
            'isEmployee' => $isEmployee,
            'isStudent' => $isStudent,
            'isParent' => $isParent,
            'isEnrollee' => $isEnrollee,
        ]);
    }

    
    /**
     * @OA\Post(
     * path="/api/change_password_first",
     * summary="Изменение пароля",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     *    @OA\JsonContent(
     *       required={"token","password"},
     *       @OA\Property(property="token", type="string", format="email", example=""),
     *       @OA\Property(property="password", type="string", format="password", example="zxcv"),
     *    ),
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Неверные параметры",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Invalid change password details")
     *        )
     *     )
     * )
    */
    public function changePasswordFirst(Request $request)
    {
        if (!$request->has('password') || !$request->has('token')) {
            return response()->json([
                'message' => 'Invalid details'
            ], 401);
        }

        $user = User::where('token', $request['token'])
            //->where('is_first', true)
            ->first();
        
        if ($user == null) {
            return response()->json([
                'success' => false,
                'msg_type' => 'token_wrong'
            ]);
        }

        if ($user->is_first == false) {
            return response()->json([
                'success' => false,
                'msg_type' => 'token_already'
            ]);
        }
        
        $user->password = bcrypt($request->password);
        $user->is_first = false;
        $user->save();
        return response()->json([
           'success' => true
        ]);
    }

    /**
     * @OA\Post(
     * path="/api/change_password",
     * summary="Изменение пароля",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     *    @OA\JsonContent(
     *       required={"token","password"},
     *       @OA\Property(property="token", type="string", format="string", example=""),
     *       @OA\Property(property="password", type="string", format="password", example="zxcv"),
     *    ),
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Неверные параметры",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Invalid change password details")
     *        )
     *     )
     * )
    */
    public function changePassword(Request $request)
    {
        if (!$request->has('password') || !$request->has('token')) {
            return response()->json([
                'message' => 'Invalid details'
            ], 401);
        }

        $user = User::where('token', $request['token'])
            //->where('is_first', true)
            ->first();
        
        if ($user == null) {
            return response()->json([
                'success' => false,
                'msg_type' => 'token_wrong'
            ]);
        }

        if ($user->is_first) {
            return response()->json([
                'success' => false,
                'msg_type' => 'is_first_wrong'
            ]);
        }

        if ($user->is_forgot_password == false) {
            return response()->json([
                'success' => false,
                'msg_type' => 'link_already_used'
            ]);
        }
        
        $user->password = bcrypt($request->password);
        $user->is_forgot_password = false;
        $user->save();
        return response()->json([
           'success' => true
        ]);
    }

    /**
     * @OA\Post(
     * path="/api/forgot_password",
     * summary="Восстановление пароля",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     *    @OA\JsonContent(
     *       required={"email"},
     *       @OA\Property(property="email", type="string", format="email", example=""),
     *    ),
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Неверные параметры",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Invalid forgot password details")
     *        )
     *     )
     * )
    */
    public function forgotPassword(Request $request)
    {
        if (!$request->has('email')) {
            return response()->json([
                'message' => 'Invalid details'
            ], 401);
        }

        $user = User::where('email', $request['email'])
            //->where('is_first', true)
            ->first();
        
        if ($user == null) {
            return response()->json([
                'success' => false,
                'msg_type' => 'email_wrong'
            ]);
        }

        if ($user->is_first) {
            return response()->json([
                'success' => false,
                'msg_type' => 'is_first_wrong'
            ]);
        }

        $user->is_forgot_password = true;
        $user->token = Utilities::generateRandomString();
        $user->save();
        \Mail::send('emails.forgot', [
            'fio' => $user->fio('ru'), 
            'token' => $user->token,
        ],
            function($message) use ($user) {
                $message->to($user->email)->subject('Восстановление пароля на портале ' . config('app.name'));
            }
        );
        return response()->json([
           'success' => true
        ]);
    }

    /**
     * @OA\Post(
     *  path="/api/me",
     *  summary="Свои данные авторизованного пользователя",
     *  tags={"auth"},
     *  security={ {"bearer": {} }},
     *  @OA\Response(
     *      response=200,
     *      description="Параметры пользователя",
     *  )
     * )
    */
    public function me(Request $request)
    {
        $user = $request->user();
        $isAdmin = $user->hasRole(['admin']);
        $isEmployee = $user->hasRole(['employee']);
        $isStudent = $user->hasRole(['student']);
        $isParent = $user->hasRole(['parent']);
        $isEnrollee = $user->hasRole(['enrollee']);
        $isUser = $isAdmin || $isEmployee || $isStudent || $isParent || $isEnrollee;
        $user = User::with(['etokens'])->find($user->id);
        return response()->json([
            'user' => $user,
            'isAdmin' => $isAdmin,
            'isUser' => $isUser,
            'isEmployee' => $isEmployee,
            'isStudent' => $isStudent,
            'isParent' => $isParent,
            'isEnrollee' => $isEnrollee,
        ]);
    }
}
