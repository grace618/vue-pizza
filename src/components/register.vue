<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <!-- <img class="mx-auto d-block" src="../../src/assets/icon.png" alt=""> -->
          <form @submit.prevent='Submit'>
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
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="confirmPassword"
                required
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
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
				password:'',
				confirmPassword:''
			}
		},
    created(){
    //  this.Submit()
    },
		methods:{
			Submit(){
        if(this.password!==this.confirmPassword){
          alert('两次密码不一致哦') 
          return false
        }
        this.axios.post('/api/userinfo',{email:this.email,password:this.password}).
        then(res=>{
          alert('注册成功~')
          this.$router.push('/login')
        })
			}
		}
	}
</script>