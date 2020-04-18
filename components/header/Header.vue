<template>
    <div class="w-full bg-white fixed z-40 top-0">
        <HeaderTop />
        <div
            class="hidden container md:flex justify-between items-center py-8px"
        >
            <div>
                <nuxt-link to="/" class="flex">
                    <img src="../../assets/img/kub.svg" class="mr-15px" />
                    <img src="../../assets/img/logo-text.svg" />
                </nuxt-link>
            </div>
            <MainMenu />
        </div>

        <HeaderMobile />
    </div>
</template>

<script>
import HeaderMobile from './HeaderMobile.vue';
import MainMenu from './MainMenu.vue';
import HeaderTop from './HeaderTop.vue';

export default {
    components: { HeaderTop, MainMenu, HeaderMobile }
};
</script>
