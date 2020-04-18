<template>
    <div
        class="section-start__block bg-no-repeat bg-cover relative pt-70px pb-140px px-100px"
    >
        <img
            src="../../assets/img/project-start-figure.png"
            class="absolute center-figure "
        />
        <div class="flex flex-wrap justify-between w-full mx-auto max-w-760px">
            <Start
                v-for="(start, index) in starts.slice(0, starts.length / 2)"
                :key="`start-${index}`"
                :title="start.title"
                :img-path="require(`../../assets/img/start-${index + 1}.png`)"
                :class="'wow fadeIn'"
                data-wow-duration="1s"
                :data-wow-delay="`${index}s`"
                class="wow fadeIn"
            />

            <div class="mb-550px"></div>

            <Start
                v-for="(start, index) in starts.slice(starts.length / 2)"
                :key="`start-project-${index}`"
                :title="start.title"
                :img-path="
                    require(`../../assets/img/start-${index + 4 + 1}.png`)
                "
                :data-wow-delay="`${starts.length - 1 - index}s`"
                data-wow-duration="1s"
                class="wow fadeIn"
            />
        </div>
        <ProjectCommand />
    </div>
</template>

<script>
import ProjectCommand from './ProjectCommand.vue';
import Start from './Start.vue';
export default {
    components: { Start, ProjectCommand },
    data() {
        return {
            starts: require('../../assets/json/starts')
        };
    }
    /* mounted() {
        this.$wow().start();
    } */
};
</script>
