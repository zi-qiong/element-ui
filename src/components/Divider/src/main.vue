<template>
    <div :class="['el-divider', `el-divider--${direction}`]">
        <div v-if="direction !== 'vertical'" :class="['el-divider__text', `is-${contentPosition}`]">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Divider',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1
            }
        },
        dashed: Boolean,
        contentPosition: {
            type: String,
            default: 'center',
            validator(val) {
                return ['left', 'center', 'right'].indexOf(val) !== -1
            }
        }
    }
}
</script>
<style lang="scss">
    @import './main.scss'
</style>