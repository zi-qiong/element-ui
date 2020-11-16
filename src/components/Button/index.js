import Button from "./src/main.vue"

Button.install = function (vue) {
    vue.component(Button.name, Button)
}

export default Button