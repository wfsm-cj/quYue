<template>
	<div class="banner">
		<!--<swiper :options="swiperOption" class="swiper-box">
			<swiper-slide class="swiper-item">
				<img src="../assets/images/y-banner01.jpg" alt="...">
			</swiper-slide>
			<swiper-slide class="swiper-item">
				<img src="../assets/images/y-banner03.jpg" alt="...">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>-->
		hello
		
		<swiper :options="swiperOption" class="swiper-box">
			<swiper-slide >
				img1
			</swiper-slide>
			<swiper-slide >
				img2
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		
		
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		name: "banner",
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					slidesPerView: 1,
					autoplay: 5000,
					paginationClickable: true,
					spaceBetween: 30,
					loop: true
				}
			}
		},
		components:{
			swiper,
			swiperSlide,
		},
		computed:{

		}
	}
</script>
<style>
	.banner {
		width: 100%;
		height: 30%;
		overflow: hidden;
	}
	.banner img{
		width: 100%;
	}
	.banner .swiper-pagination-bullet{
		width: 30px;
		height: 30px;
	}
</style>


