<template>
	<div class="cart"> 
		<h2>购物车</h2>
		
		<div >
			<input type="checkbox"   class="selectAll" v-on:click="selectAll"/>全选
			<span>name</span>
			<span>price</span>
			<span>
				amount
			</span>
		</div>
		<template v-for="item in products">
			<div class="product">
				<input type="checkbox" v-on:click="selected" />
				<span>{{ item.name}}</span>
				<span>{{item.price}}</span>
				<span>
					 {{ item.amount }}
				</span>
			</div>
			
		</template>
		
		<div class="heji">
			<button v-on:click="add">合计</button><span class="total"></span>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	
	export default{
		name:'cart',
		computed:{
			products(){
//				if(!localStorage.products){
//					return []
//				}
				return JSON.parse(localStorage.products) || []
			}
			

		},
		methods:{
			add(e){
				var total=0;
				
				var rows=$(e.target).parent().siblings('.product')
				for(var i=0;i<rows.length;i++){//rows[i]变成了js对象
					var isTrue=rows[i].children[0].checked
//					console.log(isTrue)
					if(isTrue){
						this.products.forEach((curr,index)=>{
							if(rows[i].children[1].innerText===curr.name){
								total+=(curr.price*curr.amount);
							}
						})
						$(e.target).next().html(total)
					}
				}
			},
			selectAll(){
					var product=$('.product')
				if($('.cart .selectAll')[0].checked){ //若全选被勾  子checkbox被选
					console.log('2')
					for(var i=0;i<product.length;i++){
						product[i].children[0].checked=true
					}
				}else{
					for(var i=0;i<product.length;i++){
						product[i].children[0].checked=false
					}
				}
			},
			selected(){
				var product=$('.product');
				var flag=true
				for(var i=0;i<product.length;i++){
					if(!product[i].children[0].checked){
						flag=false
					}
				}
				if(!flag){
					$('.cart .selectAll')[0].checked=false
				}else{
					$('.cart .selectAll')[0].checked=true
				}
			}
		}
		
			
			
			
			
		}
		

</script>

<style>
	.cart div{
		width: 100%;
		height: 100px;
		border: 1px solid red;
		display: flex;
		line-height: 100px;
		
	}
	.cart div span{
		width: 25%;
		font-size: 40px;
		
		/*display: inline-block;*/
		/*float: left;
		width: 250px;
		
		border: 1px solid #000;*/
	}
	.cart input{
		width: 60px;
		height: 60px;
		margin-top: 15px;
		display: inline-block;
		/*vertical-align: middle;*/
	}
	
	.heji button{
		width: 200px;
		height: 100px;
		font-size: 60px;
	}
	.heji span{
		font-size: 40px;
	}
</style>