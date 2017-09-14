<template>
	<ul class="home-list">
		<li class="home-list-user">
			<router-link to="/">
				<i class="icon iconfont icon-geren"></i>
				<span>新用户</span>
			</router-link>
		</li>
		<li class="home-list-run">
			<router-link v-bind:to="{name:'Run'}">
				<i class="icon iconfont icon-daohang"></i>
				<span>我的约跑</span>
			</router-link>
		</li>
		<li class="home-list-travel">
			<router-link to="/step">
				<i class="icon iconfont icon-feiji"></i>
				<span>我的约行</span>
			</router-link>
		</li>
		<li class="home-list-pos">
			<router-link to="/home/post">
				<i class="icon iconfont icon-shouji"></i>
				<span>去发布</span>
			</router-link>
		</li>
	</ul>
</template>

<script>
</script>

<style>
 .home .home-list .icon{
    font-size: 100px !important;
  }
  .home .home-list{
    list-style: none;
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
  .home .home-list li{
    width: 25%;
    text-align: center;
  }
  .home .home-list li a{
    color: #7e8c8d;
    text-decoration: none;
  }
  .home .home-list li a i{
    display: block;
    width: 160px;
    height: 160px;
    line-height: 160px;
    background: #2ad2c9;
    font-size: 60px;
    margin: 0 auto;
    border-radius: 45%;
    margin-bottom: 20px;
    color: #fff;
  }
  .home .home-list li a span{
    font-size: 38px;
  }
</style>