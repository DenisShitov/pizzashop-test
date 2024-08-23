<script setup>
import {Layout} from "../../../shared/index.js";
import {
    SectionInstagram,
    SectionAbout,
    SectionDelivery,
    SectionProducts,
    SectionBanner,
    SectionPromo
} from "../../../widgets/index.js";

</script>

<template>
    <layout>
        <section class="banner">
            <section-banner/>
        </section>
        <section class="promo">
            <section-promo/>
        </section>
        <section class="products">
            <section-products/>
        </section>
        <section class="delivery">
            <section-delivery/>
        </section>
        <section class="about">
            <section-about/>
        </section>
        <section class="instagram">
            <section-instagram/>
        </section>
    </layout>
</template>

<style scoped>

</style>