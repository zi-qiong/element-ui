<template>
    <button
        class="el-button"
        :autofocus="autofocus"
        :disabled="disabled"
        :class="[
            buttonSize ? 'el-button--' + buttonSize : '',
            type ? 'el-button--' + type : '',
            {
                'is-disabled': disabled,
                'is-round': round,
                'is-circle': circle,
                'is-plain': plain,
                'is-loading': loading,
            },
        ]"
    >
        <icon v-if="icon && !loading" :color="iconColor" :name="icon"></icon>
        <icon v-if="loading" name="iconloading" class="el-icon-loading"></icon>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        size: String,
        type: {
            type: String,
            default: "default",
        },
        autofocus: Boolean,
        disabled: Boolean,
        round: Boolean,
        circle: Boolean,
        plain: Boolean,
        icon: String,
        iconColor: String,
        loading: Boolean,
    },
    computed: {
        buttonSize() {
            return this.size;
        },
    },
};
</script>
<style lang="scss">
@import "main.scss";
</style>