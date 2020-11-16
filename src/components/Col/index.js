import Clo from './src/main.vue'

Clo.install = function(vue) {
    vue.compnent(Clo.name, Clo)
}

export default Clo