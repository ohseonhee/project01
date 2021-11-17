<template>
	<div class="navBar">
		<div class="clearfix">
			<h1 class="title">{{ title }}</h1>
			<ul class="themaArea">
				<li id="themaWrap" v-for="themas in thema" :key="themas">
					<input
						type="radio"
						:id="themas.for"
						name="thema"
						:value="themas.label"
						:checked="themas.check"
						v-model="isThema"
					/>
					<label :for="themas.for">{{ themas.label }}</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Topnavi',
	props: {},
	data: function () {
		return {
			title: 'Movie reservation',
			isThema: 'WHITE',
			thema: [
				{
					label: 'DARK',
					check: '',
					for: 'test1',
				},
				{
					label: 'WHITE',
					check: 'checked',
					for: 'test2',
				},
			],
		};
	},
	mounted: function () {},
	methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBar {
	background: #1a1a1a;
	padding: 10px 20px;
	min-width: 1440px;
	h1 {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		float: left;
		margin: 0;
		margin-top: 3px;
		color: #fff;
	}
	.themaArea {
		float: right;
		#themaWrap {
			display: inline-block;
			label {
				color: #fff;
				font-size: 14px;
			}
		}
	}
}
</style>
