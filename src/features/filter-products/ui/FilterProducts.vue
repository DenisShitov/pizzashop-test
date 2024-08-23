<script setup>
import IconInfinity from "../../../shared/icons/infinity.svg?raw"
import {pizzaTags} from "../../../entities/pizza/index.js";
import {usePizzaStore} from "../../../app/store/pizza.js";

const { filter } = usePizzaStore()
</script>

<template>
    <div class="filter-products__wrapper">
        <div
            @click="() => filter.tag = null"
            :class="['filter-products__item', !filter.tag && 'active']"
        >
            <div class="filter-products__icon" v-html="IconInfinity"></div>
            <p>Все</p>
        </div>
        <div
            v-for="tag in pizzaTags"
            @click="() => filter.tag = tag.id"
            :class="['filter-products__item', filter.tag === tag.id && 'active']"
        >
            <div class="filter-products__icon" v-html="tag.icon"></div>
            <p>{{ tag.name }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>