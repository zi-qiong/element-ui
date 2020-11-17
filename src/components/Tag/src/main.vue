<template>
    <div
        :class="[
            'el-tag',
            size ? `el-tag--${size}` : '',
            type ? `el-tag--${type}` : '',
            `is-${effect}`,
        ]" @click="handleClick"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Tag",
    props: {
        size: String,
        type: {
            type: String,
            default: "default",
        },
        effect: {
            type: String,
            default: "plain",
            validator(val) {
                return ["plain", "dark", "light"].indexOf(val) !== -1;
            },
        },
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
};
</script>
<style lang="scss">
@import "./main.scss";
</style>