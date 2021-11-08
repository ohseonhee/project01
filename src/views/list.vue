<template>
	<table>
		<colgroup>
			<col width="10%" />
			<col width="*" />
			<col width="20%" />
			<col width="20%" />
		</colgroup>
		<thead>
			<tr>
				<th>NO</th>
				<th>제목</th>
				<th>날짜</th>
				<th>작성자</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="items in item" :key="items">
				<td>{{ items.num }}</td>
				<td>
					<router-link to="/view">{{ items.title }}</router-link>
				</td>
				<td>{{ items.date }}</td>
				<td>{{ items.writer }}</td>
			</tr>
		</tbody>
	</table>

	<Button msg="write" />
</template>
<script>
import Button from '@/components/Button.vue';

export default {
	name: 'List',
	components: {
		Button,
	},

	data: function () {
		return {
			item: [
				{ num: 1, title: '제목', date: '2021/10/29', writer: '일선희' },
				{
					num: 2,
					title: '제목입니다',
					date: '2021/10/30',
					writer: '이선희',
				},
				{
					num: 3,
					title: '제목이요',
					date: '2021/10/31',
					writer: '삼선희',
				},
				{
					num: 4,
					title: '제목임',
					date: '2021/11/01',
					writer: '사선희',
				},
				{
					num: 5,
					title: '제목입니다요',
					date: '2021/11/02',
					writer: '오선희',
				},
			],
		};
	},

	methods: {},
};
</script>
<style lang="scss">
table {
	width: 100%;
	border-top: solid 2px #000;
	border-bottom: solid 2px #000;
	th {
		color: #222;
		border-bottom: solid 2px #000;
		text-align: center;
		padding: 10px 0;
		background: #ddd;
		border-spacing: 0;
		border-collapse: initial;
	}
	tbody {
		tr {
			&:first-child {
				td {
					border-top: none;
				}
			}
			td {
				padding: 10px 20px;
				border-top: solid 1px #ddd;
				&:nth-child(2) {
					text-align: left;
				}
				a {
					display: block;
					color: #666;
				}
			}
		}
	}
}
a {
	text-decoration: none;
}
</style>
