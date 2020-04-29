<template>
    <div
        class="center-position tracking-tighter leading-none absolute flex justify-between items-center w-full max-w-1000px xl:max-w-1100px text-13px xl:text-14px"
    >
        <div
            class="white-block absolute center-position w-full max-w-1070px h-82px"
        ></div>

        <div
            class="relative top-7px solution-1"
            :class="{ 'opacity-0': !isPlayed }"
        >
            <img
                class="flex-shrink-0 max-w-170px w-full xl:max-w-210px"
                src="../../assets/img/persons-1.svg"
            />
            <div
                class="absolute flex justify-center flex-col top-70px left-60px xl:top-80px xl:left-70px"
            >
                <div class="arrow arrow--orange bg-tomato-color px-3px">
                    Идея “х”
                </div>
                <div
                    class="arrow arrow--before bg-accent-green mt-12px -left-30px px-3px left-10px xl:left-17px"
                >
                    РЕШЕНИЕ
                </div>
            </div>
            <div
                class="flex justify-between text-center w-full mt-5px max-w-215px xl:max-w-250px"
            >
                <p class="text-tomato-color pl-20px">Инвестор</p>
                <p class="text-accent-green pl-25px">
                    Представитель КУБ <br />
                    Коммерческий директор
                </p>
            </div>
        </div>

        <div
            class="arrow arrow--after bg-accent-green -left-20px whitespace-no-wrap solution-2"
            :class="{ 'opacity-0': !isPlayed }"
        >
            Решение устраивает инвестора
            <p
                class="absolute text-center normal-case text- mt-40px text-accent-text"
            >
                Команда КУБ работает с идеей инвестора <br />
                до завершения сделки
            </p>
        </div>

        <div
            class="mx-5px xl:mx-10px max-w-120px w-full xl:max-w-150px solution-3"
            :class="{ 'opacity-0': !isPlayed }"
        >
            <img
                class="flex-shrink-0 mx-auto"
                src="../../assets/img/persons-2.svg"
            />
        </div>

        <div
            class="arrow arrow--after bg-accent-green whitespace-no-wrap solution-4"
            :class="{ 'opacity-0': !isPlayed }"
        >
            полная РЕАЛИЗАЦИЯ ПРОЕКТА
            <p
                class="absolute text-center normal-case text- mt-40px text-accent-text"
            >
                Команда КУБ создает проект
            </p>
        </div>

        <div
            class="bag relative pb-10px ml-10px max-w-100px w-full xl:max-w-140px solution-5"
            :class="{ 'opacity-0': !isPlayed }"
        >
            <img class="mx-auto" src="../../assets/img/bag.svg" />
            <p class="absolute xl:center-left text-center mt-10px xl:mt-20px">
                Проект под <br />
                управлением КУБ
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            isPlayed: 'project-start/isPlayed'
        })
    }
};
</script>

<style lang="scss">
.white-block {
    background: linear-gradient(
        270.24deg,
        #ffffff 27.19%,
        rgba(255, 255, 255, 0) 90.64%
    );
    box-shadow: 0px 23px 70px rgba(0, 0, 0, 0.1);
    z-index: -1;
}

.arrow {
    &--bottom {
        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 100px 100px 0 100px;
            border-color: #007bff transparent transparent transparent;
        }
    }
    &--before {
        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 18px 30px 18px 0;
            border-color: transparent #26473b transparent transparent;
            top: 50%;
            transform: translateY(-50%);
            left: -18px;
            z-index: -1;
        }
    }
    &--after {
        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 18px 0 18px 40px;
            border-color: transparent transparent transparent #26473b;
            top: 50%;
            transform: translateY(-50%);
            right: -25px;
            z-index: -1;
        }
    }

    &--orange {
        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 18px 0 18px 30px;
            border-color: transparent transparent transparent #cc4c06;
            top: 50%;
            transform: translateY(-50%);
            right: -18px;
            z-index: -1;
        }
    }
}

@media screen and (max-width: 1200px) {
    .arrow {
        &--before,
        &--after,
        &--orange {
            &::after {
                border-width: 14px 0 14px 20px;
                right: -15px;
            }
            &::before {
                border-width: 14px 20px 14px 0;
                left: -13px;
            }
        }
    }
}
</style>
