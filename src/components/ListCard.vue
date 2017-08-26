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
            <div class="card-img">
                <img :src="require('../assets/official-artwork/' + (i+1) + '.png')"/>
            </div>
            <div class="card-info">
                <p>{{ item.name | capitalize }}</p>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['item', 'i'],
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid-card {
        width: 20%;
        display: flex;
        justify-content: center;
        margin: 10px;
        .card {
            background: #E4F1FE;
            display: flex;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            img {
                max-width: 200px
            }
            .card-info {
                background: #EEEEEE;
                p {
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
    .unseen {
        opacity: 0;
    }
</style>