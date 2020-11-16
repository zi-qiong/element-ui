<template>
    <div :class="['el-col', getClasses]" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Clo",
    props: {
        span: {
            type: Number,
            default: 24,
        },
        offset: Number,
        pull: Number,
        push: Number,
    },
    computed: {
        colStyle() {
            let parent = this.$parent;
            let gutter = parent.gutter || 0;
            let res = {};
            if (gutter) {
                res = {
                    paddingLeft: `${gutter / 2}px`,
                    paddingRight: `${gutter / 2}px`,
                };
            }

            return res;
        },
        getClasses() {
            let classList = [];
            ["span", "offset", "pull", "push"].forEach((item) => {
                if (this[item] || this[item] === 0) {
                    classList.push(
                        item !== "span"
                            ? `el-col-${item}-${this[item]}`
                            : `el-col-${this[item]}`
                    );
                }
            });

            return classList;
        },
    },
};
</script>
<style lang="scss">
@import "./main.scss";
</style>