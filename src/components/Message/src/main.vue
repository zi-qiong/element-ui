<template>
    <transition name="el-message-fade" @@after-leave="handleAfterLeave">
        <div :class="['el-message', `el-message--${ type }`]" v-show="visible">
            {{message}}
        </div>
    </transition>
</template>
<script>
export default {
    name: "message",
    data() {
        return {
            message: "",
            type: "default",
            visible: false,
            duration: 3000,
            timer: null,
        }
    },
    mounted() {
        this.startTimer();
    },
    watch: {
      closed(newVal) {
          debugger
        if (newVal) {
          this.visible = false;
        }
      }
    },
    methods: {
        handleAfterLeave() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        startTimer() {
            if(this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration)
            }
        },
        close() {
            this.closed = true;
            if(typeof this.onClose === 'function') {
                this.onClose(this)
            }
        }
    }
}
</script>
<style lang="scss">
    @import "./main.scss";
</style>