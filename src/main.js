import Vue from 'vue'
import InputAutoComplete from './InputAutoComplete.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(InputAutoComplete),
}).$mount('#app')