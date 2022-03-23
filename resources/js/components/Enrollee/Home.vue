<template>
    <v-app>
        <MenuTop />
        <v-container>
            <v-row>
                <v-col cols="3">
                    <MenuLeft />
                </v-col>
                <v-col cols="9">
                    <v-row>
                        <v-col class="my_page_title">
                                Личный кабинет
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-container class="my_page_container_simple">
                                <div class="my_page_container_simple_head">
                                    Открыта запись на осенние онлайн-курсы. Успейте подать заявку до 15 октября!
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-container class="my_page_container_simple">
                                <div class="my_page_container_simple_head">
                                    Осталось 3 дня, чтобы подать заявку на поступление в Летово.
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-container class="my_page_container_large">
                                <div class="my_page_container_simple_head">
                                    <strong>Юлия, добро пожаловать в ваш Личный кабинет.</strong>
                                    <br /><br />
                                    Здесь вы можете:
                                    <ul>
                                        <li>подать заявку на поступление в школу в разделе «Заявка на поступление»;</li>
                                        <li>отредактировать заявку на поступление до 7 марта 2022 года;</li>
                                        <li>узнать свой статус по поступлению;</li>
                                        <li>перейти к проверке знаний и обучению по всем школьным предметам на открытой платформе Летово Онлайн через соответствующий раздел сверху.</li>
                                    </ul>
                                    На странице «Вопросы и ответы» есть полезная информация об использовании платформы. Если у вас возникают сложности с регистрационными данными, напишите об этом на электронный адрес <strong>ask@letovo.ru</strong>.
                                    <br /><br />
                                    С уважением,<br />
                                    команда «Летово»
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_subtitle">
                                Поступление в Летово
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-container class="my_page_container_large">
                                <div class="my_page_container_simple_head">
                                    <strong>Юлия, вы уже знаете, как оставить заявку на поступление в Летово?</strong>
                                    <br /><br />
                                    Ознакомьтесь <strong>с этапами Приемной кампании этого года</strong>.
                                    <br /><br />
                                    Заявка на поступление состоит из трёх шагов.
                                    <br /><br />
                                    Шаг 1. Основная информация об абитуриенте и его представителе.
                                    <br /><br />
                                    Шаг 2. Информация о профиле обучения абитуриента, достижениях в академической и внеакадемической сферах.
                                    <br /><br />
                                    Шаг 3. Проверка и отправка заявки.
                                    <br /><br />
                                    Вы всегда сможете вернуться к вашей заявке в Личном кабинете. Введенная вами информация сохраняется, если вы нажали кнопку «Сохранить» внизу страницы.
                                    <br /><br />
                                    Если у вас возникли ошибки при сохранении или отправке заявки, ознакомьтесь с нашими <strong>рекомендациями</strong>.
                                    <br /><br />
                                    <v-btn color="#B1B2B2;" style="border-radius: 10px;">Начать заполнение заявки</v-btn>
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="3">
                            <v-container class="my_page_alert">
                                <div class="my_page_alert_sign">!</div>
                                <div class="my_page_alert_text">
                                    Чтобы отправить заявку на поступление, заполните данные профиля
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-container>
                               <v-row style="border-top: 5px solid rgba(0, 0, 0, 0.3);">
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.4);">
                                        <div class="my_page_schedule_title">Подача заявки на поступление</div>
                                        <br />
                                        <div class="my_page_schedule_date">до 10 февраля</div>
                                    </v-col>
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.2);">
                                        <div class="my_page_schedule_title">Диагностические тесты</div>
                                        <br />
                                        <div class="my_page_schedule_date">до 17 февраля</div>
                                    </v-col>
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.2);">
                                        <div class="my_page_schedule_title">Контрольное тестирование</div>
                                        <br />
                                        <div class="my_page_schedule_date">17-20 февраля</div>
                                    </v-col>
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.2);">
                                        <div class="my_page_schedule_title">Вступительные экзамены</div>
                                        <br />
                                        <div class="my_page_schedule_date">12-27 марта</div>
                                    </v-col>
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.2);">
                                        <div class="my_page_schedule_title">Собеседование в школе</div>
                                        <br />
                                        <div class="my_page_schedule_date">апрель</div>
                                    </v-col>
                                    <v-col cols="2" style="background: rgba(148, 148, 148, 0.2);">
                                        <div class="my_page_schedule_title">Рекомендация к зачислению</div>
                                        <br />
                                        <div class="my_page_schedule_date">до 17 мая</div>
                                    </v-col>
                               </v-row>
                            </v-container>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-container class="my_page_container_simple_05">
                                <div class="my_page_step_tag">Текущий этап</div>
                                <div class="my_page_step_title">Заявка на поступление</div>
                                <div class="my_page_step_content">Чтобы заполнить заявку на поступление, сначала заполните данные профиля.</div>
                                <v-btn color="#B1B2B2;" style="border-radius: 10px;">Перейти к заполнению</v-btn>
                            </v-container>
                        </v-col>
                        <v-col cols="6">
                            <center>
                            <div style="position: relative;top: -10px;background: rgba(148, 148, 148, 0.7); border-radius: 30px; font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

width: fit-content;
color: #000000;
padding-left: 10px;
padding-right: 10px;">Можно пройти уже сейчас</div></center>
                            <v-container class="my_page_container_simple_05" style="position: relative; top: -21px;">
                                <div class="my_page_step_tag">Следующий этап</div>
                                <div class="my_page_step_title">Диагностическое тестирование</div>
                                <div class="my_page_step_content">Для подготовки к тестированию рекомендуем вам потренироваться, решая тесты на платформе Летово. Онлайн</div>
                                <v-btn color="#B1B2B2;" style="border-radius: 10px;">Перейти на платформу</v-btn>
                                
                            </v-container>
                        </v-col>
                    </v-row>
                    
                    <v-divider></v-divider>
                    
                    <v-row>
                        <v-col class="my_page_subtitle">
                                Другие возможности
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="my_page_sub_subtitle">
                                Диагностика на Летово Онлайн
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-container class="my_page_container_large">
                                <div class="my_page_container_simple_head">
                                    <strong>Летово Онлайн — платформа, на которой можно</strong>
                                    <br /><br />
                                    <ul>
                                        <li>проверить свои знания с помощью тестов;</li>
                                        <li>подготовиться к олимпиадам с помощью олимпиадных заданий;</li>
                                        <li>заниматься в кружках и курсах от преподавателей Летово;</li>
                                        <li>подготовиться к поступлению в Летово!</li>
                                    </ul>
                                    Внимание: на платформе Летово Онлайн не нужно регистрироваться, вам достаточно ввести данные текущей учётной записи Летово.
                                    <br /><br />
                                    <v-btn color="#B1B2B2;" style="border-radius: 10px;">Перейти на Летово Онлайн</v-btn>
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>


                    <v-row>
                        <v-col class="my_page_simple_text">
                                Проходите тестирования, а если потребуется — улучшайте результат в процессе тренировки. Для поступления
в Летово важно выполнить необходимые тесты больше, чем на 80%. 
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-container class="my_page_container_simple_05">
                                <div class="my_page_step_title">Русский язык</div>
                                <br />
                                <div class="my_page_step_no_test">Вы ещё не проходили тестирование</div>
                            </v-container>
                        </v-col>
                        <v-col cols="6">
                            <v-container class="my_page_container_simple_05">
                                <div class="my_page_step_title">Математика</div>
                                <br />
                                <div class="my_page_step_no_test">Вы ещё не проходили тестирование</div>
                            </v-container>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div class="my_page_sub_subtitle">
                                Кружки и курсы
                            </div>
                            <br />
                            <div class="my_page_simple_text">
                                Занимайтесь на курсах от Летово для подготовки к олимпиадам, интеллектуальным конкурсам и расширения кругозора.
                            </div>
                            <br />
                            <v-btn color="#B1B2B2;" style="border-radius: 10px;">Перейти в каталог курсов</v-btn>
                        </v-col>
                    </v-row>
                    <br /><br />
                    <v-row>
                        <v-col>
                            <div class="my_page_sub_subtitle">
                                Мероприятия
                            </div>
                            <br />
                            <div class="my_page_simple_text">
                                Школа Летово проводит свои мероприятия: образовательные лекции и вебинары, экскурсии по школе, классные часы. Оставляйте заявку на участие, а мы будем ждать нашей встречи!
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="4">
                            <v-container class="my_page_event">
                                <div class="my_page_event_tag">Лекция</div>
                                <div class="my_page_event_title">Загадки Брейгеля</div>
                                <div class="my_page_event_content">Лекция о творчестве Питера Брейгеля Старшего, великого фламандского художника XVI в.</div>
                                <div class="my_page_event_date"><div style="float: left">6 марта</div><div style="float: right;">17:00 - 18:30</div></div>
                                <br /><br />
                                <center><v-btn color="#B1B2B2;" style="border-radius: 10px;">Принять участие</v-btn></center>
                            </v-container>
                        </v-col>
                        <v-col cols="4">
                            <v-container class="my_page_event">
                                <div class="my_page_event_tag">Вебинар</div>
                                <div class="my_page_event_title">«Кафедра естественных наук школы «Летово»</div>
                                <div class="my_page_event_content">Заведующая кафедрой, учитель физики Светлана Николаевна Колякина, учитель химии Глеб Юрьевич Алешин  расскажут абитуриентам и их родителям об учебных программах кафедры.</div>
                                <div class="my_page_event_date"><div style="float: left">26 марта</div><div style="float: right;">17:00 - 18:00</div></div>
                                <br /><br />
                                <center><v-btn color="#B1B2B2;" style="border-radius: 10px;">Принять участие</v-btn></center>
                            </v-container>
                        </v-col>
                        <v-col cols="4">
                            <v-container class="my_page_event">
                                <div class="my_page_event_tag">Вебинар</div>
                                <div class="my_page_event_title">«Как подготовиться к поступлению в «Летово»</div>
                                <div class="my_page_event_content">Представители Приемной комиссии "Летово" подробно расскажут о процессе набора, его правилах и особенностях.</div>
                                <div class="my_page_event_date"><div style="float: left">29 марта</div><div style="float: right;">19:00 - 20:00</div></div>
                                <br /><br />
                                <center><v-btn color="#B1B2B2;" style="border-radius: 10px;">Принять участие</v-btn></center>
                            </v-container>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>

                    
        </v-container>

    </v-app>
</template>

<script>
    import MenuTop from './MenuTop';
    import MenuLeft from './MenuLeft';
    
    export default {
        components: { 
            MenuTop,
            MenuLeft,
        },
        data() {
            return {
            }
        },
    }
</script>
