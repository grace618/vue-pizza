export default{
	setPizzaDate(state,obj){
		state.Pizzalist=obj
    },
    setUserinfo(state,obj){
    	state.islogin=true
    	state.userinfo=obj.email
    }
}
