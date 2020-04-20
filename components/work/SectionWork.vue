<template>
    <div class="section-work relative bg-no-repeat bg-contain mt-80px pb-40px">
        <div
            class="section-work__figure absolute bottom-0 left-200px section-work__figure--1 hidden md:block"
        >
            <img src="../../assets/img/employee-figure-1.svg" />
        </div>
        <div class="container">
            <SectionTitle>Как мы Работаем</SectionTitle>
            <div class="flex flex-wrap justify-center mt-80px md:mt-100px">
                <About
                    v-for="(work, index) in works"
                    :key="`work-${index + 1}`"
                    class="max-w-250px h-200px mx-50px mb-100px pt-50px sm:pt-40px"
                    :text="work.title"
                    :img-path="
                        require(`../../assets/img/work-${index + 1}.png`)
                    "
                    :class="'wow ' + work.wow"
                    data-wow-duration="1.5s"
                />
            </div>
        </div>
        <div
            class="section-work__figure absolute bottom-0 right-200px section-work__figure--2 hidden md:block"
        >
            <img src="../../assets/img/employee-figure-2.svg" />
        </div>
        <Footer class="mt-100px" />
    </div>
</template>

<script>
import Footer from '../footer/Footer.vue';
import About from '../about/About.vue';
import SectionTitle from '../SectionTitle.vue';
export default {
    components: { SectionTitle, About, Footer },
    data() {
        return {
            works: require('../../assets/json/works')
        };
    }
};
</script>

<style lang="scss">
.section-work {
    background-image: url('../../assets/img/kub-back.svg');
    &__figure {
        &--1 {
        }
    }
}
</style>
