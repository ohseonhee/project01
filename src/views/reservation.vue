<template>
	<div class="section">
		<div class="wrap">
			<div class="clearfix">
				<div class="movieSelect">
					<h1>
						movietitle <span></span> 영화제목
						<p>예약안내</p>
					</h1>
					<div class="imgWrap">
						<img src="../assets/mov_01.jpg" />
					</div>
				</div>
				<div class="reservationArea">
					<div>
						<h2>Cinema</h2>
						<select>
							<option
								v-for="selects in selectList"
								:key="selects"
							>
								{{ selects.text }}
							</option>
						</select>
					</div>
					<div>
						<h2>Phone Number</h2>
						{{ phone }}
						<input
							type="text"
							placeholder="Please input your phone number"
							v-model="phone"
						/><button type="button" class="code">CODE</button><br />
						<input type="text" placeholder="Code(ex: 1234)" />
					</div>
					<div>
						<h2>Seat Position</h2>
						<table>
							<tr
								v-for="seatArrays in seatAlphaArray"
								:key="seatArrays"
							>
								<th>{{ seatArrays.alphabet }}</th>
								<td
									v-for="seatlength in seatArrays.length"
									:key="seatlength"
								>
									<button type="button"></button>
								</td>
							</tr>
							<tr>
								<th></th>
								<td v-for="index in 15" :key="index">
									{{ index }}
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//import Selectbox from '@/components/Selectbox.vue';
export default {
	name: 'Reservation',
	components: {
		//Selectbox,
	},

	data: function () {
		return {
			isViewmode: true,
			region: '',
			phone: '',
			selectList: [
				{ text: 'select cinema', value: '001' },
				{ text: 'seoul', value: '002' },
				{ text: 'Incheon', value: '003' },
			],
			seatAlphaArray: [
				{ alphabet: 'A', length: 15 },
				{ alphabet: 'B', length: 15 },
				{ alphabet: 'C', length: 15 },
				{ alphabet: 'D', length: 15 },
				{ alphabet: 'E', length: 15 },
				{ alphabet: 'F', length: 15 },
				{ alphabet: 'G', length: 15 },
			],
		};
	},
	mounted: function () {},
	methods: {},
};
</script>
<style lang="scss">
#app {
	&.dark {
		.movieSelect {
			h1 {
				color: #fff;
				span {
					background: #fff;
				}
			}
		}
		.reservationArea {
			h2 {
				color: #fff;
			}
			.selectBox {
				background: #fff;
				.optionList {
					background: #fff;
				}
			}
			input[type='text'] {
				background: #fff;
			}
		}
		tr {
			th {
				color: #fff;
			}
			td {
				color: #fff;
			}
		}
	}
}
.section {
	padding-top: 50px;
	.wrap {
		width: 1440px;
		margin: 0 auto;
	}
	.movieSelect {
		float: left;
		width: 266px;
		h1 {
			font-size: 16px;
			font-weight: 900;
			span {
				margin: 0 5px;
				width: 2px;
				height: 12px;
				display: inline-block;
				background: #000;
			}
			p {
				font-weight: 400;
				margin-left: 10px;
				display: inline-block;
			}
		}
		.imgWrap {
			border-radius: 15px;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
	}
	.reservationArea {
		float: left;
		padding-top: 70px;
		margin-left: 28px;
		h2 {
			font-size: 16px;
			font-weight: 700;
			margin: 0 0 10px 0;
		}
		select {
			height: 45px;
			line-height: 45px;
			background: #000;
			color: #666;
			border-radius: 10px;
			width: 280px;
			box-sizing: border-box;
			position: relative;
		}
		input[type='text'] {
			border: none;
			height: 45px;
			line-height: 45px;
			background: #000;
			border-radius: 10px;
			box-sizing: border-box;
			padding: 0 10px;
			width: 280px;
			margin-bottom: 10px;
			&:first-child {
				margin-top: 0;
			}
		}
		.code {
			border: none;
			height: 45px;
			line-height: 45px;
			font-size: 16px;
			background: #000;
			color: #fff;
			width: 98px;
			margin-left: 10px;
			border-radius: 10px;
			cursor: pointer;
		}
		> div {
			margin-bottom: 30px;
		}
	}
	tr {
		margin-bottom: 5px;
		th {
			width: 25px;
			height: 25px;
			line-height: 25px;
		}
		td {
			text-align: center;
			width: 25px;
			height: 25px;
			margin-right: 5px;
			button {
				display: block;
				height: 100%;
				background: #c4c4c4;
				border-radius: 5px;
				border: none;
				width: 100%;
				margin: 0;
				&.active {
					background: #32bec7;
				}
			}
		}
	}
}
</style>
