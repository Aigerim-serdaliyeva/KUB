<template>
    <div>
        <SectionMain />
        <SectionAbout />
        <SectionContact id="contact" />
    </div>
</template>

<script>
import SectionContact from '../components/contact/SectionContact.vue';
import SectionAbout from '../components/about/SectionAbout.vue';
import SectionMain from '../components/main/SectionMain.vue';

export default {
    components: { SectionMain, SectionAbout, SectionContact }
};
</script>
