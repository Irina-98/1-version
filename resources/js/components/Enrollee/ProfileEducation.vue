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
                                Заявка на поступление
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_sub_subtitle">
                                Образование
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_simple_text">
                            Расскажите о достижениях и увлечениях абитуриента. Это поможет Приемной комиссии принять решение по вашей заявке на поступление в школу и участие в проектных школах.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_sub3_title">
                            Английский язык
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Изучает ли абитуриент английский язык?</div>
                            <div class="my_page_radio_group">
                                <v-radio-group
                                >
                                <v-radio
                                    label="Да"
                                    value="radio-1"
                                ></v-radio>
                                <v-radio
                                    label="Нет"
                                    value="radio-2"
                                ></v-radio>
                                </v-radio-group>
                                </div>
                            </div>
                            <div class="my_page_input_small_description">
                                Вы можете указать знание других языков в разделе<br />
                                <u>Интересы и увлечения абитуриента</u>
                            </div>
                        </v-col>

                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Как вы оцениваете уровень владения английским языком у абитуриента?</div>
                            <v-select
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-select>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div style="float: left;width: 100%;"><v-btn color="#DEDDDD" style="width: 100%;border-radius: 0px;">+ Добавить сертификат по английскому языку</v-btn></div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div class="my_page_sub3_title">
                                Перечневые олимпиады
                            </div>
                            <br />
                            <div class="my_page_sub3_description">
                                Если у абитуриента есть дипломы победителя или призера перечневых олимпиад за текущий или предыдущий учебный год, прикрепите их ниже. Мы можем освободить абитуриента от сдачи части вступительных испытаний. В этом случае вы получите письмо об освобождении на электронную почту.
                                <br /><br />
                                <u>Список перечневых олимпиад</u>
                            </div>
                            <div style="float: left;width: 100%;"><v-btn color="#DEDDDD" style="width: 100%;border-radius: 0px;">+ Добавить олимпиаду</v-btn></div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div class="my_page_sub3_title">
                                Другие олимпиады и конкурсы
                            </div>
                            <br />
                            <div class="my_page_sub3_description">
                                Расскажите о других академических достижениях.
                            </div>
                            <div style="float: left;width: 100%;"><v-btn color="#DEDDDD" style="width: 100%;border-radius: 0px;">+ Добавить олимпиаду или конкурс</v-btn></div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div class="my_page_sub3_title">
                                Увлечения
                            </div>
                            <br />
                            <div class="my_page_sub3_description">
                                Расскажите об увлечениях абитуриента.
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="3">
                            <div class="my_page_category_title">
                                Спорт
                            </div>
                            <br />
                            <div style="width: 100%;"><v-btn color="#FFFFFF" style="border-radius: 0px;">+ Добавить</v-btn></div>
                        </v-col>
                        <v-col cols="3">
                            <div class="my_page_category_title">
                                Наука и проекты
                            </div>
                            <br />
                            <div style="width: 100%;"><v-btn color="#FFFFFF" style="border-radius: 0px;">+ Добавить</v-btn></div>
                        </v-col>
                        <v-col cols="3">
                            <div class="my_page_category_title">
                                Искусство и творчество
                            </div>
                            <br />
                            <v-chip style="margin-bottom: 10px;">
                                Аккордеон
                                <v-icon right>
                                    mdi-delete
                                </v-icon>
                            </v-chip>
                            <v-chip style="margin-bottom: 10px;">
                                Актерское мастерство
                                <v-icon right>
                                    mdi-delete
                                </v-icon>
                            </v-chip>
                            <v-chip style="margin-bottom: 10px;">
                                Архитектура
                                <v-icon right>
                                    mdi-delete
                                </v-icon>
                            </v-chip>
                            <v-chip style="margin-bottom: 10px;">
                                Видеосъемка
                                <v-icon right>
                                    mdi-delete
                                </v-icon>
                            </v-chip>
                            <br />
                            <div style="width: 100%;"><v-btn color="#FFFFFF" style="border-radius: 0px;">+ Добавить</v-btn></div>
                        </v-col>
                        <v-col cols="3">
                            <div class="my_page_category_title">
                                Иностранные языки
                            </div>
                            <br />
                            <div style="width: 100%;"><v-btn color="#FFFFFF" style="border-radius: 0px;">+ Добавить</v-btn></div>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <div class="my_page_sub3_title">
                                Дополнительное образование
                            </div>
                            <br />
                            <div class="my_page_sub3_description">
                                Укажите особые результаты абитуриента в дополнительном образовании.
                            </div>
                            <div style="float: left;width: 100%;"><v-btn color="#DEDDDD" style="width: 100%;border-radius: 0px;">+ Добавить информацию</v-btn></div>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <div style="float: left; padding-right: 15px;"><v-btn color="#FFFFFF" style="border-radius: 10px;">Сохранить</v-btn></div>
                            <div style="float: left;"><v-btn color="#C4C4C4" style="border-radius: 10px;">Сохранить и перейти к следующему шагу</v-btn></div>
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
