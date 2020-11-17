import Button from "./Button/index.js"
import Icon from "./Icon/index.js"
import Divider from "./Divider/index.js"
import Row from "./Row/index.js"
import Clo from "./Col/index.js"
import Card from "./Card/index.js"
import Tag from "./Tag/index.js"
import Message from "./Message/index.js"

const components = [
    Button,
    Icon,
    Divider,
    Row,
    Clo,
    Card,
    Tag
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$message = Message
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { components, install }