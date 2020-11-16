import Row from './src/main.vue'

Row.install = function(vue) {
    vue.compnent(Row.name, Row)
}

export default Row