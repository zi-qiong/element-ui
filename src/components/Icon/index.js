import Icon from './src/main.vue'

Icon.install = function(vue) {
    vue.component(Icon.name, Icon)
}

export default Icon