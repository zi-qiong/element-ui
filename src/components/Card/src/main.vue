<template>
    <div :class="['el-card', `is-${shadow}-shadow`]">
        <div class="el-card__head" v-if="$slots.header || title">
            <slot name="header">{{title}}</slot>
        </div>
        <div class="el-card__body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        shadow: {
            type: String,
            default: 'always'
        },
        title: String
    }
}
</script>
<style lang="scss">
    @import "./main.scss";
</style>