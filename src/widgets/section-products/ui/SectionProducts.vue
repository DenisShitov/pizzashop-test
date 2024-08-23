<script setup>
import {ItemsListGrid, FilterProducts} from "../../../features/index.js";
import {PizzaCard} from "../../../entities/pizza/index.js";
import {usePizzaStore} from "../../../app/store/pizza.js";
import {toValue} from "vue";

const store = usePizzaStore()

</script>

<template>
    <div class="container">
        <h2>Выберите пиццу</h2>
        <filter-products/>
        <items-list-grid
            :items="store.getItems"
            :rootClass="'productlist'"
            v-slot="{item}"
        >
            <pizza-card
                :data="item"
            />
        </items-list-grid>
    </div>
</template>