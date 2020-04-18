<template>
    <div>
        <h2
            class="contact__title font-raleway text-center text-white font-bold text-36px md:text-40px lg:text-48px py-60px md:pt-140px md:pb-120px bg-cover bg-no-repeat"
        >
            Наши контакты
        </h2>
        <div class="contact__map bg-cover pt-450px sm:py-120px relative">
            <div class="container">
                <div
                    class="contact__map__kub text-center max-w-170px w-full absolute"
                >
                    <img
                        src="../../assets/img/map-kub.svg"
                        class="block mx-auto mb-25px md:w-60px"
                    />
                    <button
                        class="button button--white bg-white rounded-5 uppercase font-lato font-bold p-15px"
                        @click="showMap()"
                    >
                        Открыть карту
                    </button>
                </div>

                <div
                    v-if="isOpen"
                    class="contact__map__modal all-full absolute-l-t z-50"
                >
                    <div
                        class="absolute center-position max-w-750px w-full s-center text-center "
                    >
                        <button
                            class="button button--white bg-white rounded-5 uppercase font-lato font-bold p-15px max-w-190px w-full mx-auto"
                            @click="hideMap()"
                        >
                            Закрыть
                        </button>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8051df4e92dc1f5d1149a1710c3ee8d28d7f880607f27b348b0514961284b0ce&amp;source=constructor"
                            width="100%"
                            height="500"
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>

                <ContactBlock />
            </div>
        </div>
    </div>
</template>

<script>
import ContactBlock from './ContactBlock.vue';

export default {
    components: { ContactBlock },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        showMap() {
            this.isOpen = true;
        },
        hideMap() {
            this.isOpen = false;
        }
    }
};
</script>

<style lang="scss">
.contact {
    &__title {
        background-image: url('../../assets/img/contact-back.jpg');
        background-position: center center;
    }
    &__map {
        background-image: url('../../assets/img/map-back.jpg');
        background-repeat: no-repeat;
        &__kub {
            left: 24%;
            bottom: 29%;
        }
        &__modal {
            background-color: rgba(#000, 0.6);
        }
    }
}

@media (max-width: 567px) {
    .contact {
        &__map {
            background-image: url('../../assets/img/map-mobile-back.jpg');
            &__kub {
                left: 26%;
                bottom: 48%;
            }
        }
    }
}
</style>
