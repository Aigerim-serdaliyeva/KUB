<template>
    <div
        class="section-about bg-no-repeat bg-contain mt-80px pb-70px md:pb-110px"
    >
        <SectionTitle section-title="О нас" />
        <div class="container mt-80px">
            <div
                class="flex flex-wrap justify-center lg:justify-between lg:flex-no-wrap lg:mb-120px"
            >
                <About
                    v-for="(about, index) in abouts"
                    :key="about.imgPath"
                    :title="about.title"
                    :text="about.text"
                    :img-path="
                        require(`../../assets/img/about-${index + 1}.png`)
                    "
                    :is-left-img="true"
                    class="max-w-320px mb-70px lg:mb-0 lg:max-w-375px mx-15px"
                    :class="'wow ' + about.wow"
                    data-wow-duration="1.5s"
                />
            </div>

            <div
                class="text-accent-text flex flex-wrap justify-center md:justify-between items-center mt-50px md:mt-0"
            >
                <div
                    v-for="(list, index) in lists"
                    :key="`${index + 1}`"
                    class="md:w-8/12 lg:w-7/12 wow fadeInLeft"
                >
                    <p
                        v-for="text in list.texts"
                        :key="text"
                        class="mb-15px text-justify"
                    >
                        {{ text }}
                    </p>
                    <ul
                        class="about__lists text-white my-30px md:my-50px md:text-accent-text py-30px px-40px md:p-0 -mx-15px md:ml-30px md:mr-0 "
                    >
                        <li
                            v-for="item in list.lists"
                            :key="item"
                            class="about__list font-medium relative pl-25px"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <p class="text-justify">{{ list.textFooter }}</p>
                </div>

                <div
                    class="mt-20px md:mt-40px md:mt-0 w-8/12 md:w-4/12 wow fadeInRight"
                >
                    <img src="../../assets/img/employees-kub.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import About from './About.vue';
export default {
    components: { About, SectionTitle },
    data() {
        return {
            abouts: require('@/assets/json/abouts'),
            lists: require('../../assets/json/section-about')
        };
    }
};
</script>

<style lang="scss">
.section-about {
    background-image: url('../../assets/img/kub-back.svg');
}
</style>
