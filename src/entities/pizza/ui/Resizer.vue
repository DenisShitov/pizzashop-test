<script setup>

const { value } = defineProps(['value'])
const emit = defineEmits('change')

const sizes = [
    {
        value: "sm",
        title: "20"
    },
    {
        value: "md",
        title: "30"
    },
    {
        value: "lg",
        title: "40"
    },
]
</script>

<template>
    <p class="text">Размер, см:</p>
    <div class="resizer__wrapper">
        <div
            v-for="size in sizes"
            @click="emit('change', size.value)"
            :class="['resizer__select', value === size.value && 'active']"
        >
            <p class="text">{{ size.title }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>