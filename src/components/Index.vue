<template>
    <div class="index-container">
        <div class="grid" v-if="pagination !== undefined">
            <app-list-card v-for="(item, i) in pagination.results" :item="item" :i="i" :key="i"></app-list-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListCard from "./ListCard";

export default {
    components: {
        'app-list-card': ListCard
    },
    data() {
        return {           
        }
    },
    created() {
        this.loadPagination()
    },
    methods: {
        ...mapActions([
           "loadPagination" 
        ]),
    },
    computed: {
        ...mapGetters([
            "pagination"
        ])
    }
}
</script>


<style scoped lang="scss">
    .grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .index-container {
        padding: 10px;
        height: 100vh;
        width: 100%;
        background: rgba(228, 241, 254, 0.5);
    }

</style>