<template>
	<table>
		<colgroup>
			<col width="13.333%" />
			<col width="20%" />
			<col width="13.333%" />
			<col width="20%" />
			<col width="13.333%" />
			<col width="20%" />
		</colgroup>
		<tbody>
			<tr>
				<td colspan="6">제목입니다.</td>
			</tr>
			<tr>
				<th>NO</th>
				<td>1</td>
				<th>날짜</th>
				<td>2021/10/23</td>
				<th>작성자</th>
				<td>오선희</td>
			</tr>
			<tr>
				<td colspan="6">내용입니다.</td>
			</tr>
		</tbody>
	</table>
	<Button msg="LIST" />
</template>
<script>
import Button from '@/components/Button.vue';

export default {
	name: 'List',
	components: {
		Button,
	},

	data: function () {
		return {};
	},

	methods: {},
};
</script>
<style lang="scss">
table {
	width: 100%;
	border-top: solid 2px #000;
	border-bottom: solid 2px #000;
	text-align: left;
	tbody {
		tr {
			border-top: solid 1px #ddd;
			&:first-child {
				border-top: none;
				td {
					border-top: none;
				}
			}
			th {
				color: #000;
				background: #ddd;
				padding: 10px 20px;
			}
			td {
				border-top: solid 1px #ddd;
				border-left: solid 1px #ddd;
				padding: 10px 20px;
				&:first-child {
					border-left: none;
				}
			}
		}
	}
}
a {
	text-decoration: none;
}
</style>
