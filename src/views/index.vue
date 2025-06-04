<template>
<div class="promo-container">
			<div class="promo-tile">
				<div class="promo-content">
				<p class="promo-title">投资金额：1000-5000</p>
				<p class="promo-text">投资金额：1000-5000</p>
				<button class="promo-button">11</button>
				</div>
				<img class="promo-img" src="../../assets/img/promo1.png" alt="promo" />
			</div>
			<div class="promo-tile">
				<div class="promo-content">
				<h3 class="promo-title">投资金额：1000-5000</h3>
				<p class="promo-text">投资金额：1000-5000</p>
				<button class="promo-button">11</button>
				</div>
				<img class="promo-img" src="../../assets/img/promo2.png" alt="promo" />
			</div>
			<div class="promo-tile">
				<div class="promo-content">
				<h3 class="promo-title">投资金额：1000-5000</h3>
				<p class="promo-text">8,100+USDT</p>
				<button class="promo-button">11</button>
				</div>
				<img class="promo-img" src="../../assets/img/promo3.png" alt="promo" />
			</div>
		</div>
</template>

<script setup>
import { useMainStore } from '../stores'
const userStore = useMainStore()
</script>
