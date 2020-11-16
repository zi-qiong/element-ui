<template>
    <div @click="go('Button')">
        按钮
    </div>
</template>
<script>
export default {
    methods: {
        go(name) {
            this.$router.push({
                name
            })
        }
    }
}
</script>