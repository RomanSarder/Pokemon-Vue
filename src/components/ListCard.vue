<template>
    <div class="grid-card">
        <transition 
            appear
            appear-class="unseen"
            appear-to-class="unseen"
            appear-active-class="animated zoomIn">
            <div 
            :class="className" 
            @mouseover="hovered = true"
            @mouseleave="hovered = false">
            <div class="card-header">
                <img :src="require('../assets/dream-world/poke-ball.png')"/>
            </div>
            <div class="card-img">
                <img :src="require('../assets/official-artwork/' + (index) + '.png')"/>
            </div>
            <div class="card-info">
                <p>{{ pokemon.name | capitalize }}</p>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['pokemon'],
        data() {
            return {
                hovered: false
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        computed: {
            className() {
                return this.hovered ? "card animated bounce" : "card"
            },
            index() {
                return this.pokemon.url.split("/")[6]
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid-card {
        width: 23%;
        display: flex;
        justify-content: center;
        margin: 10px;
        .card {
            background: #E4F1FE;
            display: flex;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            .card-img {
                min-height: 200px;
                min-width: 200px;
                text-align: center;
            }
            img {
                max-width: 200px;
                max-height: 200px;
            }
            .card-info {
                background: #C8F7C5;
                p {
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .card-header {
                text-align: center;
                background: #C8F7C5;
                padding: 5px;
                img {
                    width: 20px;
                }
            }
        }
    }
    .unseen {
        opacity: 0;
    }
</style>