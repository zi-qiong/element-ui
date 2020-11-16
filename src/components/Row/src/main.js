import './main.scss'

export default {
    name: 'Row',
    componentName: 'Row',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: Number,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
          type: String,
          default: 'top'
        }
    },

    computed: {
        style() {
            let res = {}
            if (this.gutter) {
                res.marginRight = `-${this.gutter / 2}px`;
                res.marginLeft = res.marginRight
            }

            return res;
        }
    },

    render(createElement) {
        return createElement(
            this.tag, {
            class: [
                'el-row',
                `is-justify-${this.justify}`,
                `is-align-${this.align}`,
            ],
            style: this.style
        },
            this.$slots.default
        )
    }
}
