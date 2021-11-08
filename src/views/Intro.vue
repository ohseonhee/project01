<template>
	<div
		class="section"
		:class="{ white: isThema == false, dark: isThema == true }"
	>
		<div class="navBar">
			<div class="clearfix">
				<h1 class="title">Movie Reservation</h1>
				<ul class="themaArea">
					<li id="themaWrap">
						<input
							type="radio"
							id="radio1"
							name="thema"
							value="Dark"
							@click="this.isThema = true"
						/>
						<label for="radio1">Dark</label>
						<input
							type="radio"
							id="radio2"
							name="thema"
							value="White"
							checked="checked"
							@click="this.isThema = false"
						/>
						<label for="radio2">White</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="wrap">
			<div
				class="movieArea clearfix"
				:class="{ active: isViewmode == false }"
			>
				<div class="clearfix">
					<div class="mode">
						<button
							type="button"
							:class="{ active: !isViewmode }"
							@click="this.isViewmode = !this.isViewmode"
						>
							<span></span>view
						</button>
					</div>
					<div class="genre">
						<ul>
							<li class="active" data-type="0">멜로</li>
							<li data-type="1">공포</li>
							<li data-type="2">코미디</li>
						</ul>
					</div>
				</div>

				<ul id="movieList" class="clearfix">
					<li>
						<img src="../assets/mov_23.webp" />
					</li>
					<li>
						<img src="../assets/mov_17.webp" />
					</li>
					<li>
						<img src="../assets/mov_19.webp" />
					</li>
					<li>
						<img src="../assets/mov_20.webp" />
					</li>
					<li>
						<img src="../assets/mov_22.webp" />
					</li>
					<li>
						<img src="../assets/mov_21.webp" />
					</li>
				</ul>
				<div id="viewModeWrap">
					<div class="imgWrap">
						<img src="../assets/moveSelect1.png" />
					</div>
					<div class="textWrap">
						<h2>movie title</h2>
						<p>영화정보</p>
						<router-link to="">RESERVATION</router-link>
					</div>
				</div>
			</div>
			<div class="freeMoveArea clearfix">
				<div class="bigPoster">
					<img src="../assets/freePoster1.jpeg" />
				</div>
				<div class="freeMove">
					<dl>
						<dt>2021년 12월 연말 무료시사회</dt>
						<dd>
							<img src="../assets/freePoster2.jpeg" />
						</dd>
					</dl>
					<dl>
						<dt>올해 가장 보고싶은 영화 선정 무료 예약</dt>
						<dd>
							<img src="../assets/freePoster3.png" />
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<MovieinfoLayer
		v-for="movieinfoArrays in movieinfoArray"
		:key="movieinfoArrays"
		:engName="movieinfoArrays.engName"
		:koName="movieinfoArrays.koName"
		:infoObject="movieinfoArrays.infoObject"
	></MovieinfoLayer>
</template>
<script>
import MovieinfoLayer from '@/components/movieInfoLayer.vue';

export default {
	name: 'Intro',
	components: {
		MovieinfoLayer,
	},

	data: function () {
		return {
			isViewmode: false,
			isThema: true,
			movieinfoArray: [
				{
					engName: 'interstella',
					koName: '인터스텔라',
					infoObject: '영화 인터스텔라 내용입니다.',
				},
			],
		};
	},

	methods: {},
};
</script>
<style lang="scss">
.section {
	padding-bottom: 30px;
	transition: color 0.5s;
	.wrap {
		width: 1440px;
		margin: 0 auto;
		overflow: scroll;
	}
	&.dark {
		background: #383838;
		.navBar {
			h1 {
				color: #fff;
			}
			.themaArea {
				#themaWrap {
					label {
						color: #fff;
					}
				}
			}
		}
		.mode {
			button {
				color: #fff;
			}
		}
		.genre {
			ul {
				li {
					color: #fff;
					&.active {
						color: #33a0de;
					}
					&:before {
						background: #fff;
					}
				}
			}
		}
		.freeMoveArea {
			.freeMove {
				dl {
					dt {
						color: #fff;
					}
				}
			}
		}
	}
	&.white {
		background: #fff;
		.navBar {
			h1 {
				color: #fff;
			}
			.themaArea {
				#themaWrap {
					label {
						color: #fff;
					}
				}
			}
		}
		.mode {
			label {
				color: #222;
			}
		}
		.genre {
			ul {
				li {
					color: #222;
					&.active {
						color: #33a0de;
					}
					&:before {
						background: #222;
					}
				}
			}
		}
		.freeMoveArea {
			.freeMove {
				dl {
					dt {
						color: #222;
					}
				}
			}
		}
	}
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
		}
		.themaArea {
			float: right;
			#themaWrap {
				label {
					font-size: 14px;
				}
			}
		}
	}
	.movieArea {
		padding-top: 30px;
		position: relative;
		.mode {
			position: relative;
			float: left;
			margin-left: 5px;
			button {
				border: none;
				background: none;
			}
			button {
				&.active {
					span {
						background: #a8dbf8;
						&:after {
							left: 15px;
						}
					}
				}
			}
			span {
				font-size: 12px;
				position: relative;
				display: inline-block;
				width: 30px;
				margin-right: 10px;
				vertical-align: sub;
				background: #686868;
				box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-radius: 21px;
				transition: all 0.8s;
				height: 15px;
				&:after {
					content: '';
					height: 15px;
					width: 15px;
					border-radius: 100%;
					position: absolute;
					left: 0;
					top: 0;
					background: #33a0de;
					transition: all 0.5s;
				}
			}
		}
		.genre {
			float: right;
			margin-right: 5px;
			ul {
				li {
					display: inline-block;
					position: relative;
					font-size: 12px;
					font-weight: 600;
					margin-left: 20px;
					cursor: pointer;
					&.active {
						color: #33a0de;
					}
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
						left: -10px;
						top: 50%;
						margin-top: -5px;
					}
				}
			}
		}
		&.active {
			#viewModeWrap {
				width: 54.5%;
				height: auto;
			}
			#movieList {
				float: left;
				width: 44%;
				li {
					cursor: pointer;
					z-index: 1;
					width: 34.5%;
					margin-left: -115px;
					&:before {
						display: block;
					}
					&:first-child {
						margin-left: 0;
					}
					&:last-child {
						display: none;
					}
					img {
						width: 229.78px;
					}
				}
			}
		}

		#viewModeWrap {
			width: 0;
			height: 0;
			margin-top: 8px;
			margin-left: 20px;
			transition: all 0.5s;
			float: right;
			text-align: right;
			position: relative;
			overflow: hidden;
			img {
				width: 100%;
				height: 370.5px;
			}
			h1 {
				color: #fff;
				font-size: 18px;
			}
			.textWrap {
				position: absolute;
				top: 10px;
				right: 28px;
				width: 300px;
				font-weight: 500;
				font-size: 14px;
				line-height: 17px;
				text-align: right;
				color: rgba(255, 255, 255, 0.67);
				text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				p {
					height: 220px;
				}
				.router-link-active {
					background: rgba(54, 135, 190, 0.8);
					color: #fff;
					text-align: center;
					display: block;
					text-decoration: none;
					font-weight: 700;
					height: 44px;
					line-height: 44px;
				}
			}
		}
		#movieList {
			margin-top: 8px;
			li {
				float: left;
				margin-left: 10px;
				width: 16.08%;
				position: relative;
				border-radius: 20px;
				overflow: hidden;
				height: 358.52px;
				filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
				transition: all 0.5s;
				&:before {
					display: none;
					position: absolute;
					left: 0;
					top: 0;
					width: 217px;
					height: 358.52px;
					content: '';
					background: rgba(0, 0, 0, 0.3);
					border-radius: 19px;
					z-index: 1;
				}
				img {
					width: 100%;
					position: relative;
					height: 358.52px;
				}
				&:first-child {
					margin-left: 0;
				}
			}
		}
	}

	.freeMoveArea {
		margin-top: 47px;
		.bigPoster {
			float: left;
			margin-right: 20px;
			width: 66%;
			border-radius: 15px;
			overflow: hidden;
			height: 531.61px;
			img {
				width: 100%;
			}
		}
		.freeMove {
			float: left;
			width: 32.5%;
			img {
				width: 100%;
			}
			dl {
				margin: 0;
				&:first-child {
					margin-bottom: 89px;
				}
				dt {
					text-align: left;
					margin-bottom: 10px;
				}
				dd {
					margin: 0;
				}
			}
		}
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
