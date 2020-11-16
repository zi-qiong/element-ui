<template>
    <svg class="icon" aria-hidden="true">
        <use :fill="color ? color : '#fff'" :xlink:href="'#' + name"></use>
    </svg>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        name: String,
        color: String
    }
}
</script>