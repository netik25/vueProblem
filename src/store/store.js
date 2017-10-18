import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        foo: true,
    },
    modules: {
        secondmodule: {
            namespaced: true,
            state: {
                bar: 0,
            },
            mutations: {
                updateBar: (state, value) => {
                    state.bar = value;
                }
           }
        }
    }
})