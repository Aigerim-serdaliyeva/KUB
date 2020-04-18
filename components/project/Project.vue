<template>
    <div class="text-center mb-50px md:mb-100px">
        <div
            class="project__img bg-white flex flex-col items-center justify-center rounded-5 mx-auto mb-18px w-200px h-200px md:w-250px md:h-250px "
        >
            <img :src="imgPath" />
        </div>
        <h3 class="text-white text-16px md:text-18px font-raleway">
            {{ title }}
        </h3>
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
.project {
    &__img {
        box-shadow: 0px 4px 68px rgba(0, 0, 0, 0.1);
    }
    &__block {
        background-image: url('../../assets/img/projects-back.jpg');
    }
}
</style>
