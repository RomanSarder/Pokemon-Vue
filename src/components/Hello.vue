<template>
    <div class="home-container">
        <h1>Choose pokemon type</h1>
        <div class="home-card" v-for="number in 18">
            <img :src="require('../assets/types/' + (number) + '.png')" @click="loadType(number)" />
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
        this.loadTypes()
    },
    methods: {
        ...mapActions([
           "loadTypes",
           "loadData",
           "clearDisplay"
        ]),
        loadType(num) {
            this.clearDisplay();
            this.loadData('/type/' + num);
            this.$router.push("/list/" + num);
        }
    },
    computed: {
        ...mapGetters([
            "types"
        ])
    }
}
</script>


<style scoped>
    div.home-container {
        background: #C8F7C5;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    h1 {
        width: 100%;
        align-self: center;
        text-align: center;
    }
    .home-card {
        display: flex;
        max-height: 200px;
        width: 30%;
        justify-content: center;
    }
    img {
        width: 90px;
        height: 90px;
        cursor: pointer;
    }
</style>
