<script setup>
const props = defineProps(['items', 'rootClass'])
</script>

<template>

    <div :class="props.rootClass">
        <transition-group name="fade">
            <div
                v-for="item in props.items"
                :key="item.id"
            >
                <slot :item="item"/>
            </div>
        </transition-group>
    </div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>