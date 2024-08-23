<script setup>
const { image, size } = defineProps(['image', 'size'])

</script>

<template>
    <div class="render__wrapper">
        <div class="content-center">
            <img
                :class="['render__image', `render__image__${size}`]"
                :src="image"
                alt="render"
            >
        </div>
    </div>
</template>

<style scoped>

</style>