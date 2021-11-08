<template>
	<div class="section dark">
		<div class="navBar">
			<div class="wrap clearfix">
				<h1 class="title">Movie Reservation</h1>
				<ul class="themaArea">
					<li id="themaWrap">
						<input
							type="radio"
							id="radio1"
							name="thema"
							value="Dark"
						/>
						<label for="radio1">Dark</label>
						<input
							type="radio"
							id="radio2"
							name="thema"
							value="White"
						/>
						<label for="radio2">White</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="wrap">
			<div class="movieArea">
				<div class="clearfix">
					<div class="mode">
						<input
							type="checkbox"
							id="view"
							name="mode"
							value="viewoff"
						/>
						<label for="view">View</label>
					</div>
					<div class="genre">
						<ul>
							<li>멜로</li>
							<li>공포</li>
							<li>코미디</li>
						</ul>
					</div>
				</div>

				<ul id="movieList">
					<li>
						<img src="../assets/poster1.png" />
					</li>
					<li>
						<img src="../assets/poster2.png" />
					</li>
					<li>
						<img src="../assets/poster3.png" />
					</li>
					<li>
						<img src="../assets/poster4.png" />
					</li>
					<li>
						<img src="../assets/poster5.png" />
					</li>
					<li>
						<img src="../assets/poster6.png" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Intro',
	components: {},

	data: function () {
		return {};
	},

	methods: {},
};
</script>
<style lang="scss">
.section {
	.wrap {
		max-width: 1440px;
		margin: 0 auto;
	}
	&.dark {
		background: #383838;
	}
	&.white {
		background: #fff;
	}
	.navBar {
		background: #1a1a1a;
		padding: 10px 20px;
		h1 {
			color: #fff;
			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			float: left;
			margin: 0;
			margin-top: 3px;
		}
		.themaArea {
			float: right;
			#themaWrap {
				label {
					font-size: 14px;
					color: #fff;
				}
			}
		}
	}
	.movieArea {
		padding-top: 30px;
	}
	.mode {
		position: relative;
		float: left;
		input[type='checkbox'] {
			opacity: 0;
			margin: 0;
			width: 30px;
			height: 15px;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
		input[type='checkbox']:checked + label:after {
			left: 15px;
		}
		input[type='checkbox']:checked + label:before {
			background: #a8dbf8;
		}
		label {
			font-size: 12px;
			color: #fff;
			position: relative;
			&:before,
			&:after {
				content: '';
				height: 15px;
				transition: all 0.5s;
			}
			&:after {
				width: 15px;
				border-radius: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #33a0de;
			}
			&:before {
				display: inline-block;
				width: 30px;
				margin-right: 10px;
				vertical-align: sub;
				background: #686868;
				box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-radius: 21px;
			}
		}
	}
	.genre {
		float: right;
		ul {
			li {
				display: inline-block;
				position: relative;
				color: #fff;
				font-size: 12px;
				font-weight: 600;
				margin-left: 20px;
				cursor: pointer;
				&:first-child {
					margin-left: 0;
					&:before {
						display: none;
					}
				}
				&:before {
					content: '';
					width: 1px;
					height: 10px;
					position: absolute;
					background: #fff;
					left: -10px;
					top: 50%;
					margin-top: -5px;
				}
			}
		}
	}
	#movieList {
	}
}

ul {
	margin: 0;
	padding: 0;
	li {
		list-style: none;
	}
}
.clearfix {
	position: relative;
	&:after {
		content: '';
		display: table;
		clear: both;
	}
}
body {
	margin: 0;
}
</style>
