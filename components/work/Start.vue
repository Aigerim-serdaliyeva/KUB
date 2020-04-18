<template>
    <div
        class="text-center text-accent-text w-full relative max-w-110px lg:max-w-190px"
    >
        <div
            class="start__img bg-white rounded-5 flex items-center justify-center mx-auto mb-3px lg:mb-8px w-82px h-82px "
        >
            <img :src="imgPath" />
        </div>
        <h4
            class="leading-none text-12px lg:text-13px lg:absolute w-full lg:max-w-215px"
        >
            {{ title }}
        </h4>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        imgPath: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss">
.start {
    &__img {
        box-shadow: 0px 4px 68px rgba(0, 0, 0, 0.1);
    }
}
</style>
