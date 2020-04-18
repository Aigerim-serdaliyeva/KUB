<template>
    <div class="relative font-roboto eading-none text-14px leading-tight">
        <CallbackModal />
        <Header />
        <nuxt />

        <div id="page-top-id"></div>
        <ThePageTop />
        <TheCall />
    </div>
</template>

<script>
import CallbackModal from '../components/callback/CallbackModal.vue';
import TheCall from '../components/TheCall.vue';
import ThePageTop from '../components/ThePageTop.vue';
import Header from '../components/header/Header.vue';

export default {
    components: { Header, ThePageTop, TheCall, CallbackModal },
    mounted() {
        const scene = this.$scrollmagic
            .scene({
                offset: 0,
                triggerElement: '#page-top-id'
            })
            .setClassToggle('.page-top', 'active');
        this.$scrollmagic.addScene(scene);
    },
    destroyed() {
        this.$scrollmagic.destroy();
    }
};
</script>

<style lang="scss">
#page-top-id {
    position: absolute;
    width: 100%;
    height: 1px;
    background: transparent;
    top: 900px;
}
</style>
