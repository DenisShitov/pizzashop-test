<script setup>
import { pizzaTags } from "../lib/index.js";
import {computed} from "vue";

const { tags } = defineProps(['tags'])

const tagsModels = computed(() => pizzaTags.filter(el => tags.includes(el.id)))

</script>

<template>
    <div
        v-for="tag in tagsModels"
        v-html="tag.icon"
    >
    </div>
</template>

<style scoped>

</style>