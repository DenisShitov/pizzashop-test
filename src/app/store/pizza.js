import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {pizzaMock} from "../../entities/pizza/index.js";

export const usePizzaStore = defineStore('pizza', () => {
    const items = reactive(pizzaMock)

    const filter = reactive({
        tag: null
    })

    const getItems =  computed(() => {
        if(!filter.tag) return items
        return items.filter(i => i.tags.includes(filter.tag))
    })

    function changePizzaSize(id, size) {
        const item = items.find(p => p.id === id)
        item.size = size
    }

    return { items, filter, getItems, changePizzaSize }
})