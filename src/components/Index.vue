<template>
    <div>
        <h1>Index here</h1>
        <div class="grid" v-if="pagination !== undefined">
            <div class="grid-card" v-for="(item, i) in pagination.results">
                <img :src="require('../assets/official-artwork/' + (i+1) + '.png')">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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


<style scoped>

</style>