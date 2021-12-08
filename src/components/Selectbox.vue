<template></template>

<script>
export default {
	name: 'Selectbox',
	props: {},
	data: function () {
		return {};
	},
	mounted: function () {
		this._f_init_select();
	},
	methods: {
		_f_init_select: function () {
			let selectBox = document.getElementsByClassName('selectBox')[0];
			let selectBtn = selectBox.getElementsByClassName('label')[0];
			let optionList = selectBox.getElementsByTagName('li');

			for (let i = 0; i < optionList.length; i++) {
				optionList[i].onclick = function (e) {
					let itemTxt = e.target.innerText;
					selectBtn.innerHTML = itemTxt;
					selectBox.classList.remove('active');
				};
			}

			selectBtn.onclick = function () {
				if (selectBox.classList.contains('active')) {
					selectBox.classList.remove('active');
				} else {
					selectBox.classList.add('active');
				}
			};
		},
	},
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
