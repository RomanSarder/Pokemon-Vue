<template>
    <div :class="className">
        <div class="grid" v-if="display.pokemon.length > 0">
            <app-list-card v-for="obj in display.pokemon" :pokemon="obj.pokemon"></app-list-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListCard from "./ListCard";

export default {
    components: {
        'app-list-card': ListCard,
    },
    data() {
        return {           
        }
    },
    methods: {
       
    },
    computed: {
        ...mapGetters([
            "display"
        ]),
        className() {
            return this.display.pokemon.length > 0 ? "index-container with-data" : "index-container without-data"
        }
    }
}
</script>


<style scoped lang="scss">
    .grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .index-container {
        padding: 10px;
        background: rgba(135, 211, 124, 0.8);
    }
    .with-data {
        height: 100%;
        width: 100%;
    }
    .without-data {
        height: 100vh;
        width: 100%
    }

</style>