<template>
    <div class="text-center mb-50px md:mb-70px px-15px">
        <h2
            class="font-raleway font-bold text-accent-text border-b-2 border-solid border-tomato-color inline-block sm:px-25px text-36px md:text-40px lg:text-48px"
        >
            {{ sectionTitle }}
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        sectionTitle: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss"></style>
