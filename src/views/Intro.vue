<template>
	<div class="section">
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
							<li
								:data-type="genres.type"
								v-for="genres in generArray"
								:key="genres"
							>
								{{ genres.title }}
							</li>
						</ul>
					</div>
				</div>

				<ul id="movieList" class="clearfix">
					<li
						v-for="movieLists in movieArray"
						:key="movieLists"
						:data-num="movieLists.dataNum"
					>
						<img :src="movieLists.img" />
					</li>
				</ul>
				<div id="viewModeWrap">
					<div
						class="seletMovie"
						:data-num="selectMovies.dataNum"
						v-for="selectMovies in movieArray"
						:key="selectMovies"
					>
						<div class="imgWrap">
							<img :src="selectMovies.img" />
						</div>
						<div class="textWrap">
							<h2>{{ selectMovies.koName }}</h2>
							<p>{{ selectMovies.infoObject }}</p>
							<router-link to="">RESERVATION</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="freeMovieArea clearfix">
				<div class="bigPoster">
					<img src="../assets/freePoster1.jpeg" />
				</div>
				<div class="freeMovie">
					<dl
						v-for="freeMovieArrays in freeMovieArray"
						:key="freeMovieArrays"
					>
						<dt>{{ freeMovieArrays.title }}</dt>
						<dd>
							<img :src="freeMovieArrays.img" />
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<MovieinfoLayer
		v-for="movieinfoArrays in movieArray"
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
			isViewmode: true,
			generArray: [
				{ title: '멜로', type: 0 },
				{ title: '공포', type: 1 },
				{ title: '코미디', type: 2 },
			],
			movieArray: [
				{
					img: require('../assets/mov_01.jpg'),
					engName: 'movie1',
					koName: '영화1',
					infoObject: '영화1 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 1,
				},
				{
					img: require('../assets/mov_02.jpg'),
					engName: 'movie2',
					koName: '영화2',
					infoObject: '영화2 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 2,
				},
				{
					img: require('../assets/mov_03.jpg'),
					engName: 'movie3',
					koName: '영화3',
					infoObject: '영화3 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 3,
				},
				{
					img: require('../assets/mov_05.jpg'),
					engName: 'movie4',
					koName: '영화4',
					infoObject: '영화4 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 4,
				},
				{
					img: require('../assets/mov_06.jpg'),
					engName: 'movie5',
					koName: '영화5',
					infoObject: '영화5 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 5,
				},
				{
					img: require('../assets/mov_07.jpg'),
					engName: 'movie6',
					koName: '영화6',
					infoObject: '영화6 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 6,
				},
				{
					img: require('../assets/mov_08.jpg'),
					engName: 'movie7',
					koName: '영화7',
					infoObject: '영화7 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 7,
				},
				{
					img: require('../assets/mov_09.jpg'),
					engName: 'movie8',
					koName: '영화8',
					infoObject: '영화8 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 8,
				},
				{
					img: require('../assets/mov_10.jpg'),
					engName: 'movie9',
					koName: '영화9',
					infoObject: '영화9 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 9,
				},
				{
					img: require('../assets/mov_11.jpeg'),
					engName: 'movie10',
					koName: '영화10',
					infoObject: '영화10 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 10,
				},
				{
					img: require('../assets/mov_12.jpg'),
					engName: 'movie11',
					koName: '영화11',
					infoObject: '영화11 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 11,
				},
				{
					img: require('../assets/mov_13.jpg'),
					engName: 'movie12',
					koName: '영화12',
					infoObject: '영화12 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 12,
				},
				{
					img: require('../assets/mov_14.jpg'),
					engName: 'movie13',
					koName: '영화13',
					infoObject: '영화13 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 13,
				},
				{
					img: require('../assets/mov_15.jpg'),
					engName: 'movie14',
					koName: '영화14',
					infoObject: '영화14 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 14,
				},
				{
					img: require('../assets/mov_16.jpg'),
					engName: 'movie15',
					koName: '영화15',
					infoObject: '영화15 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 15,
				},
				{
					img: require('../assets/mov_17.webp'),
					engName: 'movie16',
					koName: '영화16',
					infoObject: '영화16 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 16,
				},
				{
					img: require('../assets/mov_18.webp'),
					engName: 'movie17',
					koName: '영화17',
					infoObject: '영화17 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 17,
				},
				{
					img: require('../assets/mov_19.webp'),
					engName: 'movie18',
					koName: '영화18',
					infoObject: '영화18 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 18,
				},
				{
					img: require('../assets/mov_20.webp'),
					engName: 'movie19',
					koName: '영화19',
					infoObject: '영화19 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 19,
				},
				{
					img: require('../assets/mov_21.webp'),
					engName: 'movie20',
					koName: '영화20',
					infoObject: '영화20 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 20,
				},
				{
					img: require('../assets/mov_22.webp'),
					engName: 'movie21',
					koName: '영화21',
					infoObject: '영화21 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 21,
				},
				{
					img: require('../assets/mov_23.webp'),
					engName: 'movie22',
					koName: '영화22',
					infoObject: '영화22 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 22,
				},
				{
					img: require('../assets/mov_24.jpg'),
					engName: 'movie23',
					koName: '영화23',
					infoObject: '영화23 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 23,
				},
				{
					img: require('../assets/mov_27.jpg'),
					engName: 'movie24',
					koName: '영화24',
					infoObject: '영화24 내용입니다.',
					dataType: 2,
					isReservation: 0,
					dataNum: 24,
				},
				{
					img: require('../assets/mov_28.jpg'),
					engName: 'movie25',
					koName: '영화25',
					infoObject: '영화25 내용입니다.',
					dataType: 0,
					isReservation: 0,
					dataNum: 25,
				},
				{
					img: require('../assets/mov_30.jpg'),
					engName: 'movie26',
					koName: '영화26',
					infoObject: '영화26 내용입니다.',
					dataType: 1,
					isReservation: 0,
					dataNum: 26,
				},
			],
			freeMovieArray: [
				{
					img: require('../assets/freePoster2.jpeg'),
					title: '2021년 12월 연말 무료시사회',
				},
				{
					img: require('../assets/freePoster3.png'),
					title: '올해 가장 보고싶은 영화 선정 무료 예약',
				},
			],
		};
	},
	mounted: function () {
		this._f_init_selectMovie();
		this._f_init_isThema();
	},
	methods: {
		_f_init_isThema: function () {
			let section = document.getElementsByClassName('section')[0];
			if (this.isThema == 'DARK') {
				section.classList.add('dark');
			} else if (this.isThema == 'WHITE') {
				section.classList.add('white');
			}
		},
		_f_init_selectMovie: function () {
			const selectMovieWrap = document.getElementById('viewModeWrap');
			let selectMovieList =
				selectMovieWrap.getElementsByClassName('seletMovie');

			const movieListWrap = document.getElementById('movieList');
			let movieList = movieListWrap.getElementsByTagName('li');

			movieList[5].classList.add('last');

			for (let j = 0; j < movieList.length; j++) {
				movieList[j].onclick = function () {
					document.querySelector('li.last').classList.remove('last');
					this.classList.add('last');

					common();
				};
			}
			common();

			function common() {
				let lastMovie = document.getElementsByClassName('last')[0];
				//last data-num get
				let lastMovieDataNum = lastMovie.getAttribute('data-num');

				for (let i = 0; i < selectMovieList.length; i++) {
					//selectmove all display none
					selectMovieList[i].style.display = 'none';
					//selectmovie data-num get
					let selectMovieDataNum =
						selectMovieList[i].getAttribute('data-num');
					//last data-num == selectmovie data-num -> block
					if (lastMovieDataNum == selectMovieDataNum) {
						selectMovieList[i].style.display = 'block';
					}
				}
			}
		},
	},
};
</script>
<style lang="scss">
.section {
	padding-bottom: 30px;
	transition: color 0.5s;
	.wrap {
		width: 1440px;
		margin: 0 auto;
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
		.freeMovieArea {
			.freeMovie {
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
		.freeMovieArea {
			.freeMovie {
				dl {
					dt {
						color: #222;
					}
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
				height: 358.52px;
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
					&.last {
						display: none !important;
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
				height: 358.52px;
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
			overflow: hidden;
			height: 378.52px;
			li {
				margin-bottom: 20px;
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

	.freeMovieArea {
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
		.freeMovie {
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
