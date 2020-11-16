import Divider from './src/main.vue'

Divider.install = function(vue) {
    vue.component(Divider.name, Divider)
}

export default Divider