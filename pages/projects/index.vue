<template>
    <div class="mt-90px md:mt-120px pt-40px">
        <SectionTitle section-title="Наши проекты" />
        <div class="project__block">
            <div class="container">
                <div
                    class="sm:flex flex-wrap justify-between w-full mx-auto max-w-600px pt-80px pb-20px sm:pt-140px sm:pb-40px"
                >
                    <Project
                        v-for="(project, index) in projects"
                        :key="`project-${index + 1}`"
                        :title="project.title"
                        :img-path="
                            require(`../../assets/img/project-${index + 1}.png`)
                        "
                        :class="'wow ' + project.wow"
                        data-wow-duration="1.5s"
                    />
                </div>
            </div>
        </div>
        <Footer class="footer pt-100px pb-50px" />
    </div>
</template>

<script>
import Footer from '../../components/footer/Footer.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import Project from '../../components/project/Project.vue';
export default {
    components: { Project, SectionTitle, Footer },
    data() {
        return {
            projects: require('../../assets/json/projects')
        };
    }
};
</script>
