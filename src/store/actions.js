import axios from 'axios'
export default{
	//获取数据
	showpizza:({commit})=>{   
		axios.get('/api/pizzamenu').then(
			res=>{	
				if(res!=''){		
					commit('setPizzaDate',res.data) //commit mutations					
				}
			}
		)
	},
	// 添加数据
	addPizza({dispatch,commit},data){	
		axios.post('/api/pizzamenu',data).then(
			res=>{
				dispatch('showpizza').then(()=>{
				console.log('添加成功~~')
			   })
			}
		)
	},
	//删除数据
	deletepizza({dispatch,commit},index){
		axios.delete('/api/pizzamenu/'+index).then(res=>{
			dispatch('showpizza').then(()=>{
				console.log('删除成功~~')
			})
			
		})
	}
	
}
