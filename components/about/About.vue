<template>
    <div
        class="about w-full relative rounded-5 text-white pt-60px pb-30px px-20px"
    >
        <div
            class="about__img absolute bg-white flex flex-col items-center justify-center rounded-5 w-82px h-82px"
            :class="[leftImg]"
        >
            <img :src="imgPath" />
        </div>
        <h3
            class="text-center font-medium leading-tight text-20px md:text-22px lg:text-24px mb-10px"
        >
            {{ title }}
        </h3>
        <p class="font-light ">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        isLeftImg: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        leftImg() {
            return this.isLeftImg ? 'about__img--left' : 'about__img--center';
        }
    }
};
</script>

<style lang="scss">
.about {
    &:last-child {
        margin-bottom: 0;
    }
    background: linear-gradient(
        139.25deg,
        #1f4133 0%,
        #085439 49.02%,
        #1f4133 99.08%
    );
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);

    &__img {
        box-shadow: 0px 4px 68px rgba(0, 0, 0, 0.1);

        &--left {
            top: -30px;
            left: -10px;
        }

        &--center {
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &__list {
        &::before {
            content: '';
            position: absolute;
            width: 19px;
            height: 14px;
            background-image: url('../../assets//img/checked.png');
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}

@media screen and (max-width: 768px) {
    .about {
        &__img {
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
        }
        &__lists {
            background: linear-gradient(
                145.04deg,
                #1f4133 0%,
                #085439 49.02%,
                #1f4133 99.08%
            );
        }
    }
}
</style>
