import Card from "./src/main.vue"

Card.install = function(vue) {
    vue.component(Card.name, Card)
}

export default Card;