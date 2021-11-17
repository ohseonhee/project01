<template>
	<div id="movieInfoLayer">
		<h2>{{ engName }}<span></span>{{ koName }}</h2>
		<p>{{ infoObject }}</p>
		<button type="button">X</button>
		<router-link to="">RESERVATION</router-link>
	</div>
</template>

<script>
export default {
	name: 'movieInfoLayer',
	props: {
		engName: String,
		koName: String,
		infoObject: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#movieInfoLayer {
	display: none;
	position: absolute;
	top: 50px;
	left: 0;
	background: #fff;
	border: solid 1px #e5e5e5;
	padding: 13px 14px;
	text-align: left;
	width: 342px;
	z-index: 2;
	h2 {
		margin: 0;
		color: 000;
		font-size: 18px;
		span {
			height: 14px;
			width: 2px;
			background: #000;
			margin: 0 10px;
			display: inline-block;
		}
	}
	p {
		min-height: 312px;
		color: #575757;
		font-size: 14px;
		line-height: 17px;
	}
	.router-link-active {
		background: #3b87be;
		color: #fff;
		text-align: center;
		display: block;
		text-decoration: none;
		font-weight: 700;
		height: 44px;
		line-height: 44px;
	}
	button {
		border: none;
		background: none;
		width: 20px;
		height: 20px;
		position: absolute;
		right: 10px;
		line-height: 20px;
		top: 10px;
	}
}
</style>
