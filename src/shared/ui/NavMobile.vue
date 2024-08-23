<script setup>
import IconLogo from "../icons/logo.svg?component";
import IconCross from "../icons/cross.svg?component";
import {onMounted, onUnmounted} from "vue";

const emit = defineEmits('close')

onMounted(() => {
    document.querySelector('body').style['overflow'] = 'hidden'
    document.querySelector('body').style['paddingRight'] = '18px'
})
onUnmounted(() => {
    document.querySelector('body').style['overflow'] = 'auto'
    document.querySelector('body').style['paddingRight'] = '0'
})
</script>

<template>
    <div class="navmenu">
        <div class="navmenu__header">
            <div class="">
                <a href="/" class="navmenu__logo">
                    <icon-logo/>
                </a>
            </div>
            <div
                class="navmenu__close"
                @click="emit('close')"
            >
                <div class="content-center">
                    <icon-cross/>
                </div>
            </div>
        </div>
        <nav>
            <a href="#">
                Меню
            </a>
            <a href="#">
                О нас
            </a>
            <a href="#">
                Контакты
            </a>
        </nav>
        <div class="navmenu__footer">
            <div class="navmenu__info">
                <p class="additional">Заказать по телефону</p>
                <a href="tel:+79184326587">
                    <h4>+7 (918) 432-65-87</h4>
                </a>
                <p class="description">Ежедневно с 9:00 до 23:00</p>
            </div>
            <div class="navmenu__lang">
                <h4>English</h4>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>