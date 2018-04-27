<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for='i in getMenuIten'>
          <tr >
            <td><strong>{{i.name}}</strong></td>
          </tr>
          <tr v-for='n in i.options'>
            <td>{{n.size}}寸</td>
            <td>{{n.price}}</td>
            <td>
              <button 
                class="btn btn-sm btn-outline-success" @click='addpizza(i,n)'>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div>
          <strong>购物车</strong>
          <table class="table">
              <thead class="thead-default">
                <tr>
                  <th>数量</th>
                  <th>品种</th>
                  <th>价格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='i in baskets' v-if='baskets.length!=0'>
                  <td>
                    <button class="btn btn-sm" @click='reduce(i)'>-</button>
                    <span>{{i.num}}</span>
                    <button  class="btn btn-sm" @click='increase(i)'>+</button>
                  </td>
                  <td>{{i.name}}</td>
                  <td>{{i.price}}</td>
                </tr>
              </tbody>
            </table>
            <p>总价:{{totalmoney}}</p>
            <button class="btn btn-success btn-block">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
	export default{
		data(){
			return {
        baskets:[]
			}
		},
    created(){
      this.$store.dispatch('showpizza')
    },
    computed:{
      totalmoney(){
        let total=0;
        this.baskets.map((item,value)=>{
          total+=item.price*item.num
        })
        return total
      },
      getMenuIten(){
        return this.$store.getters.getMenuItems
      }
    },
    methods:{
      addpizza(i,options){//传递一个当前对象和当前对象下的options参数
        if(this.baskets.length<=0){
          this.baskets.push({"name":i.name,"price":options.price,"num":1})
        }else{
          //filter方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组,下列中如果新数组为空，则表示没有相同对象，否则返回相同的新对象
          let result=this.baskets.filter(item=>{
              return (item.name === i.name && item.price === options.price)
           })
          if(result!=0&&result.length>0){
             result[0].num++  //返回的result是即将添加的和原有重复的对象
          }else{
            this.baskets.push({"name":i.name,"price":options.price,"num":1})
          }
        }
      },
      //减少
      reduce(i){ //传递一个当前对象
        i.num--
        if(i.num<=0){
          this.baskets.splice(this.baskets.indexOf(i),1)
        }
      },
      //增加
      increase(i){
        i.num++
      }
    }
	}
</script>