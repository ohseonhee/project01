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
				<th>제목</th>

				<td colspan="5">
					<Input type="text" id="text01" name="name01" />
				</td>
			</tr>
			<tr>
				<th>날짜</th>
				<td colspan="5">
					<Input type="date" id="text02" name="name02" />
				</td>
			</tr>
			<tr>
				<td colspan="6">
					<textarea name="" id="" cols="30" rows="10"> </textarea>
				</td>
			</tr>
		</tbody>
	</table>

	<Button msg="list" />
</template>
<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
	name: 'List',
	components: {
		Button,
		Input,
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
				textarea {
					width: 100%;
					border: none;
				}
			}
		}
	}
}
a {
	text-decoration: none;
}
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
