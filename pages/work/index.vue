<template>
    <div class="mt-90px md:mt-120px">
        <SectionProjectStart />
        <SectionWork />
    </div>
</template>

<script>
import SectionProjectStart from '../../components/work/SectionProjectStart.vue';
import SectionWork from '../../components/work/SectionWork.vue';
export default {
    components: { SectionWork, SectionProjectStart }
};
</script>
