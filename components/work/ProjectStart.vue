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
                v-for="(start, index) in startsTop"
                :key="`start-${index}`"
                :title="start.title"
                :img-path="require(`../../assets/img/start-${index + 1}.png`)"
                :class="[{ 'opacity-0': !isPlayed }, `start-${index + 1}`]"
            />

            <div class="mb-550px"></div>

            <Start
                v-for="(start, index) in startsBottom"
                :key="`start-project-${index}`"
                :title="start.title"
                :img-path="
                    require(`../../assets/img/start-${index + 4 + 1}.png`)
                "
                :class="[{ 'opacity-0': !isPlayed }, `start-${index + 4 + 1}`]"
            />
        </div>
        <ProjectCommand />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProjectCommand from './ProjectCommand.vue';
import Start from './Start.vue';
export default {
    components: { Start, ProjectCommand },
    data() {
        return {
            starts: require('../../assets/json/starts'),
            startAnime: null
        };
    },
    computed: {
        startsTop() {
            return this.starts.slice(0, this.starts.length / 2);
        },
        startsBottom() {
            return this.starts.slice(this.starts.length / 2);
        },
        ...mapGetters({
            isPlayed: 'project-start/isPlayed'
        })
    },
    mounted() {
        if (!this.isPlayed) {
            this.startAnime = this.$anime
                .timeline({
                    easing: 'linear',
                    loop: false,
                    autoplay: false
                })
                .add(this.getStartAnime('.solution-1'))
                .add(this.getStartAnime('.start-1'))
                .add(this.getStartAnime('.start-2'))
                .add(this.getStartAnime('.start-3'))
                .add(this.getStartAnime('.start-4'))
                .add(this.getStartAnime('.start-8'))
                .add(this.getStartAnime('.start-7'))
                .add(this.getStartAnime('.start-6'))
                .add(this.getStartAnime('.start-5'))
                .add(this.getStartAnime('.solution-2'))
                .add(this.getStartAnime('.solution-3'))
                .add(this.getStartAnime('.solution-4'))
                .add(this.getStartAnime('.solution-5'))
                .play();
            this.playProjectStart();
        }
    },
    methods: {
        getStartAnime(targets) {
            return {
                targets,
                keyframes: [
                    {
                        opacity: 1,
                        duration: 200
                    },
                    {
                        scale: 1.1
                    },
                    {
                        scale: 1
                    }
                ],
                duration: 400
            };
        },
        ...mapMutations({
            playProjectStart: 'project-start/PLAY_PROJECT_START'
        })
    }
};
</script>
