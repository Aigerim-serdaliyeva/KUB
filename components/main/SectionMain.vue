<template>
    <div
        class="section-main relative lg:bg-contain bg-no-repeat h-full mt-90px md:mt-120px mx-15px xl:mx-30px"
    >
        <div class="md:hidden -z-1 relative -mb-200px">
            <img
                src="../../assets/img/main-mobile-back.jpg"
                class="block mx-auto -z-1 "
            />
        </div>
        <img class="hidden md:block" src="../../assets/img/main-back.jpg" />
        <div
            class="section-main__block bg-cover bg-no-repeat text-white flex flex-col items-center
            justify-center p-40px text-center md:w-6/12 sm:mt-o mr-0 ml-auto md:absolute md:top-0 right-0 md:h-full"
        >
            <h2
                class="font-raleway font-bold leading-none mb-30px lg:mb-50px text-24px md:text-40px xl:text-44px wow fadeInDown"
            >
                КУБ специализируется на стратегическом и операционном управлении
                бизнесом
            </h2>
            <p class=" mb-20px lg:mb-30px wow fadeInDown">
                КУБ оказывает услуги, направленные на сохранение и увеличение
                прибыли, благодаря четко выстроенной системе бизнес-процессов и
                профессиональной команде специалистов
            </p>
            <p class="wow fadeInDown">
                КУБ гарантирует целевое использование финансовых вложений и
                минимизацию рисков с помощью надежной системы контроля
            </p>
            <button
                class="button button--transparent font-bold uppercase max-w-230px mt-30px lg:mt-50px wow fadeInDown"
                @click="toggleModal"
            >
                Связаться с Нами
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions({
            toggleModal: 'modal/toggleModal'
        })
    }
};
</script>

<style lang="scss">
.section-main {
    &__block {
        background: rgba(0, 0, 0, 0.7);
    }
}

.button {
    &--transparent {
        &:hover,
        &:active {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    &--green {
        background: linear-gradient(
            158.06deg,
            #1f4133 0%,
            #085439 49.02%,
            #1f4133 99.08%
        );
        &:hover,
        &:active {
            background: linear-gradient(
                158.06deg,
                #207e58 0%,
                #23986e 49.02%,
                #017445 99.08%
            );
        }
    }

    &--white {
        opacity: 0.8;
        &:hover,
        &:active {
            opacity: 1;
        }
    }
}

@media (max-width: 767px) {
    .section-main {
        background-image: none;
    }
}
</style>
