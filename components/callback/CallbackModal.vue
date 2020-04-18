<template>
    <div
        v-if="isActive"
        class=" z-50 fixed left-0 top-0 w-full h-screen flex items-center justify-center"
    >
        <div class="z-10 absolute-l-t all-full bg"></div>
        <div
            class="relative z-20 w-829px bg-white rounded-5 py-60px px-15px mx-15px md:mx-0 md:py-100px md:px-110px"
        >
            <div
                class="absolute top-0 right-0 p-5 cursor-pointer"
                @click="toggleModal"
            >
                <img src="~/assets/img/close.svg" alt="" />
            </div>
            <Callback />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Callback from './Callback.vue';
export default {
    components: { Callback },
    computed: {
        ...mapState({
            isActive: ({ modal }) => modal.isActive
        })
    },
    methods: {
        ...mapActions({
            toggleModal: 'modal/toggleModal'
        })
    }
};
</script>

<style scoped>
.bg {
    background: rgba(0, 0, 0, 0.5);
}
</style>
