<template>
	<div class="user">
		<div class="userLogin">
			<div class="user-login">
				<div class="userPerson">
					<img src="../assets/images/user-img0.jpg" alt="" />
				</div>
				<div class="userButton">
					<router-link to='/'>登录</router-link>
					<router-link to='/'>注册</router-link>
				</div>
				<div class="username"></div>
			</div>
		</div>
		<div class="userList">
			<ul>
				<li>
					<router-link to="/">发布</router-link>
				</li>
				<li>
					<router-link to="/">约炮</router-link>
				</li>
				<li>
					<router-link to="/">约行</router-link>
				</li>
			</ul>
		</div>
		<div class="groups">
			<ul class="group">
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-geren"></i>
						<span>学生认证</span>
						<b>&gt;</b>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-geren"></i>
						<span>学生认证</span>
						<b>&gt;</b>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-geren"></i>
						<span>学生认证</span>
						<b>&gt;</b>
					</router-link>
				</li>
			</ul>
			<ul class="group">
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-iconfontxingxing"></i>
						<span>邀请好友</span>
						<b> > </b>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-jingdian"></i>
						<span>选择高校</span>
						<b> > </b>
					</router-link>
				</li>
			</ul>

			<ul class="group">
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-shezhi"></i>
						<span>设置</span>
						<b> > </b>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<i class="icon iconfont icon-24xiaoshiqiantai"></i>
						<span>联系客服</span>
						<em>15183565102</em>
						<b> > </b>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'User'
	}
</script>

<style>
	.user{
		background-color: #eee;
	}
	.userLogin{
		box-sizing: border-box;
		height: 450px;
		color: #323232;
		background-color: #76D49B;
		text-align: center;
		padding-top: 60px;
	}
	.userLogin .userPerson{
		width: 200px;
		height: 200px;
		border-radius:50%;
		/*hsla   !!*/
		border: 4px solid hsla(0,0%,100%,.95); 
		box-shadow: 0 0 2px rgba(0,0,0,.2);
		margin: 0 auto;
		overflow: hidden;
	}
	
	.userLogin .userPerson img{
		width: 200px;
		height: 200px;
	}	
	
	.userLogin .userButton{
		/*padding: ;*/
		display: flex;
		justify-content: center;
		align-content: center;
		padding: 50px 20px ;
		padding-bottom: 0px;
	}
	
	.userLogin .userButton a{
		color: #fff;
		background-color: #2ad2c9;
		width: 15%;
		float: left;
		padding: 20px;
	}
	
	 .userLogin .userButton a:nth-child(1){
    border-radius: 10% 0 0 10%;
  }
  .userLogin .userButton a:nth-child(2){
    border-radius: 0 10% 10% 0;
    background: #fff;
    color: #2ad2c9;
  }
   .userList{
    background: #fff;
  }
  .userList ul{
    overflow: hidden;
    list-style: none;
    margin-bottom: 30px;
  }
  .userList ul li{
    float: left;
    width: 33%;
    height: 120px;
    margin: 20px 0;
    line-height: 120px;
    border-right: 2px solid #89f0eb;
  }
  .userList ul li a{
    color: #555;
    width: 100%;
    height: 100%;
    display: inline-block;
  }
   .userList ul li:last-child{
    border-right: 0;
  }
  
   .groups{
    padding-bottom: 160px;
  }
  
  .groups .group{
    background: #fff;
    margin: 30px 0;
    width: 100%;
    padding: 10px 20px;
    text-align: left;
    overflow: hidden;
    box-sizing: border-box;
  }
  .groups .group li{
    line-height: 120px;
    font-size: 50px;
    position: relative;
  }
  .groups .group li i{
    margin: 0 18px;
    color: #555;
  }
  .groups .group li span{
    color: #555;
  }
  .groups .group li b{
    color: #333;
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .groups .group li em{
    position: absolute;
    right: 100px;
    font-weight: 200;
    color: #999;
  }
  .user .group .icon {
    font-size: 50px;
  }
</style>