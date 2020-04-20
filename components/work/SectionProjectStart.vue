<template>
    <div class="pt-40px">
        <SectionTitle>Как мы начинаем проект</SectionTitle>
        <div
            class="section-start bg-no-repeat bg-cover py-70px -px-15px lg:mx-15px px-8px lg:px-0"
        >
            <div class="container">
                <ProjectStart class="hidden lg:block" />
            </div>
            <ProjectStartMobile class="lg:hidden" />
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import ProjectStartMobile from './ProjectStartMobile.vue';
import ProjectStart from './ProjectStart.vue';
export default {
    components: { SectionTitle, ProjectStart, ProjectStartMobile }
};
</script>

<style lang="scss">
.section-start {
    background-image: url('../../assets/img/project-start-back.jpg');
    &__block {
        background-image: url('../../assets/img/project-start-block.jpg');
    }
}
</style>
