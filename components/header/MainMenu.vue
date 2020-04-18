<template>
    <div class="main-menu w-full md:w-auto rounded p-25px pb-10px md:p-0">
        <li
            v-for="(link, index) in links"
            :key="`link-${index + 1}`"
            class="list-none md:inline-block"
            @click="select"
        >
            <nuxt-link
                :to="{ path: link.path, hash: link.hash }"
                active-class="active"
                exact
                class="main-menu__link font-bold uppercase text-white md:text-accent-text block md:inline-block md:ml-30px mb-20px md:mb-0"
            >
                {{ link.title }}
            </nuxt-link>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: require('@/assets/json/main-menu')
        };
    },
    methods: {
        select() {
            this.$emit('onSelectItem');
        },
        navigate(path) {
            const hashIndex = path.indexOf('#');

            if (hashIndex >= 0) {
                setTimeout(() => {
                    this.$scrollTo(path.slice(hashIndex));
                }, 500);
            }
        }
    }
};
</script>

<style lang="scss">
.main-menu {
    &__link {
        &.active,
        &:hover {
            color: #cc4c06;
        }
    }
}

@media (max-width: 767px) {
    .main-menu {
        background: linear-gradient(
            132.75deg,
            #1f4133 0%,
            #085439 46.88%,
            #1f4133 94.75%
        );
        box-shadow: 0px 4px 39px rgba(0, 0, 0, 0.25);
        &__link {
        }
    }
}
</style>
