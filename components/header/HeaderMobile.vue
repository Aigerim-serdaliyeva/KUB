<template>
    <div class="bg-white px-15px py-15px w-full  md:hidden">
        <div class="py-5px flex items-center justify-between relative">
            <div
                class="burger__block bg-linear rounded p-10px"
                :class="{ checked: isChecked }"
                @click="toggleMenu()"
            >
                <div class="burger">
                    <div
                        class="burger__inner dark-bg-white burger__inner--1"
                    ></div>
                    <div
                        class="burger__inner dark-bg-white burger__inner--2"
                    ></div>
                    <div
                        class="burger__inner dark-bg-white burger__inner--3"
                    ></div>
                </div>
            </div>

            <div
                class="menu hidden absolute left-45px top-7px max-w-215px w-full"
                :class="{ active: mobileMenuState }"
            >
                <MainMenu @onSelectItem="closeMenu" />
            </div>

            <nuxt-link to="/" class="">
                <img src="../../assets/img/logo-mobile.svg" />
            </nuxt-link>

            <div class="bg-linear p-10px rounded">
                <a href="tel:+77272777606"
                    ><img src="../../assets/img/call.png" alt=""
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu },
    data() {
        return {
            mobileMenuState: false,
            isChecked: false
        };
    },
    methods: {
        toggleMenu() {
            this.mobileMenuState = !this.mobileMenuState;
            this.isChecked = !this.isChecked;
        },
        closeMenu() {
            this.mobileMenuState = false;
            this.isChecked = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.menu {
    transition: 0.4s all ease-in-out;
    &.active {
        display: block;
    }
}

.burger {
    width: 25px;
    height: 25px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &__inner {
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: #fff;
        border-radius: 6px;
        margin-bottom: 3px;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &--2 {
            top: 10px;
        }
        &--3 {
            top: 20px;
        }
    }

    &__block {
        &.checked {
            .burger__block {
                background-color: #cc4c06 !important;
            }
            .burger__inner {
                &--1 {
                    top: 10px;
                    transform: rotate(135deg);
                }
                &--2 {
                    opacity: 0;
                }
                &--3 {
                    top: 10px;
                    transform: rotate(-135deg);
                }
            }
        }
    }
}
</style>
