<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <!-- <img class="mx-auto d-block" src="../../src/assets/icon.png" alt=""> -->
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                required 
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                required 
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	export default{
		data(){
			return {
				email:'',
				password:''
			}
		},
		methods:{
			onSubmit(){
				this.axios.get('/api/userinfo').then(
          res=>{
            var data=res.data;
             //遍历userinfo,判断账号和密码是否匹配
            let result=data.filter(item=>{
                return item.email==this.email&&item.password
             })
             if(result.length>0){
              alert('登录成功')
              this.$store.commit('setUserinfo',...result)
              this.$router.push('/')
             }else{
              alert('账号密码不正确')
             }
          }
          )
			}
		}

	}
</script>