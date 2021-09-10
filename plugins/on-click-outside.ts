import Vue from 'vue'

Vue.directive('click-outside', {
  bind (el: any, binding, vnode: any) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target)) && binding.expression) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})
