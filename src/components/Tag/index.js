import Tag from "./src/main.vue"

Tag.install = function (vue) {
    vue.component(Tag.name, Tag)
}

export default Tag;