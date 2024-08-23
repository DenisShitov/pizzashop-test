<script setup>
import Resizer from "./Resizer.vue";
import Render from "./Render.vue";
import Tags from "./Tags.vue";
import {usePizzaStore} from "../../../app/store/pizza.js";

const { changePizzaSize } = usePizzaStore()

const {data} = defineProps(['data'])

</script>

<template>
    <div class="productcard">
        <div class="productcard__wrapper">

            <div class="productcard__render">
                <render :image="data.image" :size="data.size"/>
            </div>

            <div class="productcard__info">
                <h4>{{ data.name }}</h4>
                <p class="description">{{ data.ingredients }}</p>
                <div class="productcard__resizer">
                    <resizer
                        :value="data.size"
                        @change="(v) => changePizzaSize(data.id, v)"
                    />
                </div>
                <div class="productcard__price">
                    <p>{{ `от&nbsp;${data.price}&nbsp;руб` }}</p>
                </div>
                <button class="productcard__tocart productcard__tocart__mobile">
                    {{ `от&nbsp;${data.price}&nbsp;руб` }}
                </button>
                <button class="productcard__tocart productcard__tocart__desktop">
                    Заказать
                </button>
            </div>

        </div>

        <div class="productcard__tags">
            <tags :tags="data.tags"/>
        </div>

    </div>
</template>

<style scoped>

</style>