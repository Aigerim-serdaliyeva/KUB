<template>
    <a
        href="tel:+77272777606"
        class="call cursor-pointer fixed rounded-full flex justify-center items-center w-65px h-65px bg-#23CC8F right-20px bottom-50px lg:right-150px md:bottom-50px"
    >
        <img src="../assets/img/call.png" />
    </a>
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

<style lang="scss">
.call {
    background: #23cc8f;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.2);

    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-animation: trambling-animation 1.5s ease-in-out 1s infinite;
    animation: trambling-animation 1.5s ease-in-out 1s infinite;
}
</style>
