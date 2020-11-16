<template>
    <div
        :style="rowStyle"
        :class="[
            'el-row',
            `is-justify-${this.justify}`,
            `is-align-${this.align}`,
        ]"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Row",
    props: {
        gutter: Number,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
          type: String,
          default: 'top'
        }
    },
    computed: {
        rowStyle() {
            let res = {}
            if (this.gutter) {
                res =  {
                    marginLeft: `${this.gutter / 2}px`,
                    marginRight: `${this.gutter / 2}px`,
                };
            }
            return res;
        },
    },
};
</script>
<style lang="scss">
@import "./main.scss";
</style>