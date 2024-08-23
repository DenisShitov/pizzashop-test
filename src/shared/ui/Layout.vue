<script setup>
import IconLogo from '../icons/logo.svg?component'
import IconBurger from '../icons/burger.svg?component'
import IconCart from '../icons/cart.svg?component'
import IconPhone from '../icons/phone.svg?component'
import {NavMobile} from "./index.js";
import {ref} from "vue";

const isVisibleMenu = ref(false)
</script>

<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header__logo">
                    <a href="/">
                        <icon-logo/>
                    </a>
                </div>

                <nav>
                    <a href="#" class="link">
                        <h4>Меню</h4>
                    </a>
                    <a href="#" class="link active">
                        <h4>О нас</h4>
                    </a>
                    <a href="#" class="link">
                        <h4>Контакты</h4>
                    </a>
                </nav>

                <div class="header__actions">

                    <div class="header__block">
                        <div class="header__contacts">
                            <div class="icon">
                                <div class="content-center">
                                    <a href="tel:+79184326587">
                                        <icon-phone/>
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <a href="tel:+79184326587">
                                    <h4>+7 (918) 432-65-87</h4>
                                </a>
                                <p class="description">Ежедневно с 9:00 до 23:00</p>
                            </div>
                        </div>
                        <div class="header__cart">
                            <div class="icon">
                                <div class="content-center">
                                    <icon-cart/>
                                    <div class="badge">
                                        <p class="description">3</p>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <h4>Ваш заказ</h4>
                                <p class="description">Итальянская и ещё 2 пиццы</p>
                            </div>
                        </div>
                    </div>

                    <div class="header__block">
                        <div class="header__lang">
                            <div class="content-center">
                                <h4>EN</h4>
                            </div>
                        </div>
                        <div
                            class="header__burger"
                            @click="isVisibleMenu = true"
                        >
                            <div class="content-center">
                                <icon-burger/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        <div class="container">
            <div class="footer">
                <div class="footer__logo">
                    <a href="/">
                        <icon-logo/>
                    </a>
                </div>
                <div class="footer__info">
                    <div>
                        <a href="tel:+79184326587">
                            <h4>+7 (918) 432-65-87</h4>
                        </a>
                        <p class="description">Ежедневно с 9:00 до 23:00</p>
                    </div>
                    <div>
                        <a href="#">
                            <p class="description">Политика конфиденциальности</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <teleport to="body">
        <transition name="slide">
            <nav-mobile
                v-if="isVisibleMenu"
                @close="isVisibleMenu = false"
            />
        </transition>
    </teleport>

</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: all .3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>