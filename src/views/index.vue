<template>
	<div class="promo-container">
			<div class="promo-tile">
				<div class="promo-content">
				<p class="promo-title">投资金额：<span class="highlight">1000-5000</span></p>
				<p class="promo-text">每月收入</p>
				<p class="promo-text2">
					<span class="part1">2%</span>
					<span class="part2">180天</span>
				</p>
				<button class="promo-button">
					购买
					<img src="@/assets/img/arrow-right.png" alt="buttonarrow" class="button-arrow"/>
				</button>
				</div>
				<img class="promo-img" src="@/assets/img/promo1.png" alt="promo" />
			</div>
			<div class="promo-tile">
				<div class="promo-content">
				<h3 class="promo-title">投资金额：<span class="highlight">50000-10000</span></h3>
				<p class="promo-text">每月收入</p>
				<p class="promo-text2">
					<span class="part1">2.5%</span>
					<span class="part2">180天</span>
				</p>
				<button class="promo-button">
					购买
					<img src="@/assets/img/arrow-right.png" alt="buttonarrow" class="button-arrow" />
				</button>
				</div>
				<img class="promo-img" src="@/assets/img/promo2.png" alt="promo" />
			</div>
			<div class="promo-tile">
				<div class="promo-content">
				<h3 class="promo-title">投资金额：<span class="highlight">10000-20000</span></h3>
				<p class="promo-text">每月收入</p>
				<p class="promo-text2">
					<span class="part1">3%</span>
					<span class="part2">180天</span>
				</p>
				<button class="promo-button">
					购买
					<img src="@/assets/img/arrow-right.png" alt="buttonarrow" class="button-arrow"/>
				</button>
				</div>
				<img class="promo-img" src="@/assets/img/promo3.png" alt="promo" />
			</div>
		</div>
</template>

<script setup>
import { useMainStore } from '../stores'
const userStore = useMainStore()
</script>
