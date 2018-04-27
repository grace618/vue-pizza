import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
const state={
	Pizzalist:{},
	userinfo:{},
	islogin:false
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})