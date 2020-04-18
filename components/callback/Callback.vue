<template>
    <div v-if="!success" class="text-accent-dark-gray text-18px font-lato">
        <ValidationObserver ref="form">
            <form
                class="text-center max-w-550px w-full mx-auto"
                @submit.prevent="sendMail()"
            >
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    class="input-div"
                >
                    <div class="input-title">Ваше имя</div>
                    <input
                        v-model="name"
                        type="text"
                        class="input"
                        placeholder="Имя"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|numeric|max:12"
                    class="input-div"
                >
                    <div class="input-title">Номер телефона</div>
                    <input
                        v-model="phone"
                        type="tel"
                        class="input"
                        placeholder="Номер телефона"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider class="input-div">
                    <div class="input-title">
                        Удобное время для звонка
                    </div>
                    <input
                        v-model="time"
                        type="time"
                        class="input"
                        min="09:00"
                        max="18:00"
                        placeholder="18:00"
                    />
                </ValidationProvider>

                <button
                    type="submit"
                    class="button button--green text-white uppercase max-w-310px w-full"
                >
                    Заказать звонок
                </button>
            </form>
        </ValidationObserver>
    </div>
    <div
        v-else
        class="text-green text-accent-blue text-center text-18px md:text-22px h-300px flex justify-center items-center md:h-auto"
    >
        Заявка успешно отправлена
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import axios from 'axios';

export default {
    components: { ValidationObserver, ValidationProvider },
    data() {
        return {
            name: '',
            phone: null,
            time: null,
            success: false
        };
    },
    methods: {
        sendMail() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }

                const data = {
                    name: this.name,
                    phone: this.phone,
                    time: this.time
                };

                this.success = true;

                axios.post('mailer.php', data).then(() => {});
            });
        }
    }
};
</script>
