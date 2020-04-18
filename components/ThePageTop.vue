<template>
    <div
        class="page-top hidden cursor-pointer fixed left-20px bottom-50px lg:left-150px md:bottom-50px opacity-50"
    >
        <div
            class="page-top__circle rounded-full flex justify-center items-center w-65px h-65px bg-tomato-color"
            @click="pageTop()"
        >
            <img src="../assets/img/page-top.png" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pageTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
</script>

<style lang="scss" scoped>
.page-top {
    transition: all 0.5s ease;
    &.active {
        display: block;
    }
    &:hover {
        opacity: 1;
    }

    &__circle {
        box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.2);
    }
}
</style>
