<template>
	<div class="promo-container">
		<div class="card">
				<div class="card-body">
					<div class="icon">
						<img src="@/assets/img/icon.png" alt="icon" />
					</div>
					<div class="text-content">
						<h2 class="title">储宝宝</h2>
						<p class="desc1">金钱共同赚取利益，并享受无尽的利益</p>
						<p class="desc2">
						款项用于股票、外汇、黄金，<br />
						数字货币等金融产品的投入
						</p>
					</div>
				</div>
				<div class="button-container">
				<button class="join-btn">
					<span>现在加入</span>
						<img src="@/assets/img/arrow-btn.png" alt="buttonarrow" class="arrow-btn"/>
				</button>
				</div>
			</div>

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