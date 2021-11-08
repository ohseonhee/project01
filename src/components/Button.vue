<template>
	<div class="btn-area">
		<router-link to="/write">{{ msg }}</router-link>
	</div>
</template>

<script>
export default {
	name: 'Button',
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-area {
	margin-top: 30px;
	text-align: right;
	a {
		display: inline-block;
		padding: 10px 0;
		width: 200px;
		text-align: center;
		border-radius: 10px;
		background: #ddd;
		color: #222;
		text-decoration: none;
	}
}
</style>
