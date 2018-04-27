<template>
  <div class="row">
	<!-- 添加 -->
	<form class="col-sm-12 col-md-8" >
		<h3 class="text-muted my-5">添加新的Pizza</h3>
		<div class="form-group row">
			<label class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price1">
			</div>
		</div>

		<p><strong>选项2</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size2">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price2">
			</div>
		</div>
		<div class="form-group row">
			<button type="button" class="btn btn-success btn-block" @click='addtomenu'>添加</button>
		</div>
	</form>
	<!-- 菜单 -->
	<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for='i in getMenuItems' :key='i.id'>
					<tr>
						<td>{{i.name}}</td>
						<td>
							<button  class="btn btn-outline-danger btn-sm" @click='deletepizza(i.id)'>&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
   </div>
</template>
<script>
export default{
	data(){
		return {
			newPizza:{}
		}
	},
	computed:{
		//在vuex中获取数据
		getMenuItems(){			
			return	this.$store.getters.getMenuItems
		}
	},
	created(){
		this.$store.dispatch('showpizza')
	},
	methods:{
		addtomenu(){
			const data={
				name:this.newPizza.name,
				description:this.newPizza.description,
				options:[
					{
		              size:this.newPizza.size1,
		              price:this.newPizza.price1
		    		}
				]
			}
			//如果商品只有一个尺寸
			if(this.newPizza.size2!=''&&this.newPizza.price2!=''){
				data.options.push({
		              size:this.newPizza.size2,
		              price:this.newPizza.price2
		    	})
			}
			this.$store.dispatch('addPizza',data)
		},
		deletepizza(data){
			this.$store.dispatch('deletepizza',data)
		}
	}
}
</script>