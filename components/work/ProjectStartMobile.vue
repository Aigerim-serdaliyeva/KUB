<template>
    <div
        class="relative max-w-390px w-full mx-auto bg-white py-48px px-5px text-12px z-10"
    >
        <div
            class="project__start__mobile flex flex-wrap justify-between absolute max-w-370px w-full z-20"
        >
            <div>
                <Start
                    v-for="(start, index) in starts.slice(starts.length / 2)"
                    :key="`start-${index}`"
                    :title="start.title"
                    :img-path="
                        require(`../../assets/img/start-${index + 4 + 1}.png`)
                    "
                    class="mb-55px max-w-110px w-full"
                />
            </div>
            <div>
                <Start
                    v-for="(start, index) in starts.slice(0, starts.length / 2)"
                    :key="`start-${index}`"
                    :title="start.title"
                    :img-path="
                        require(`../../assets/img/start-${index + 1}.png`)
                    "
                    class="mb-65px"
                />
            </div>
        </div>

        <img
            src="../../assets/img/project-start-mobile-figure.svg"
            class="absolute project__mobile__figure "
        />

        <div class="mobile-white absolute w-full h-full">
            <img src="../../assets/img/mobile-white.png" />
        </div>

        <div class="relative max-w-230px mx-auto">
            <img
                class="flex-shrink-0 mx-auto max-w-230px w-full xl:max-w-none"
                src="../../assets/img/persons-1.svg"
            />
            <div
                class="absolute flex justify-center flex-col top-70px left-90px"
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
                class="flex justify-between text-center w-full mt-5px max-w-230px z-10"
            >
                <p class="text-tomato-color pl-40px">Инвестор</p>
                <p class="text-accent-green pl-10px">
                    Представитель КУБ <br />
                    Коммерческий директор
                </p>
            </div>
        </div>

        <div class="text-center text-13px mt-165px mb-30px">
            <p class="uppercase font-bold max-w-100px mx-auto mb-7px">
                когда Решение устраивает инвестора
            </p>
            <img
                class="mx-auto w-30px"
                src="../../assets/img/arrow-bottom.svg"
            />
        </div>

        <div class="max-w-120px w-full mx-auto my-50px">
            <img class="flex-shrink-0" src="../../assets/img/persons-2.svg" />
        </div>

        <div class="text-center text-13px mb-30px">
            <p class="uppercase font-bold max-w-100px mx-auto mb-7px">
                полная РЕАЛИЗАЦИЯ ПРОЕКТА
            </p>
            <img
                class="mx-auto w-30px"
                src="../../assets/img/arrow-bottom.svg"
            />
        </div>

        <div class="bag relative pb-10px max-w-130px w-full mx-auto">
            <img src="../../assets/img/bag.svg" />
            <p class="absolute text-center mt-10px">
                Проект под управлением КУБ
            </p>
        </div>
    </div>
</template>

<script>
import Start from './Start.vue';
export default {
    components: { Start },
    data() {
        return {
            starts: require('../../assets/json/starts')
        };
    }
};
</script>

<style lang="scss">
.project__start__mobile {
    top: 33.3%;
    left: 50%;
    transform: translateX(-50%);
}

.project__mobile__figure {
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
}

.mobile-white {
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5px;
}
@media screen and (max-width: 1200px) {
}
</style>
