import Button from "./Button/index.js"
import Icon from "./Icon/index.js"
import Divider from "./Divider/index.js"
import Row from "./Row/index.js"
import Clo from "./Col/index.js"

const components = [
    Button,
    Icon,
    Divider,
    Row,
    Clo
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { components, install }