<!--<template>
	<button type="button" @click="test">testbutton</button>

	<ul>
		<li v-for="item in list" :key="item">{{ item }}</li>
	</ul>

	<input type="text" v-model="message" />

	<div v-if="checked == true">ok</div>
	<div v-else>no</div>

	<div v-show="checked">vshow</div>

	<input type="checkbox" id="checkbox" v-model="checked" />
	<label for="checkbox">{{ checked }}</label>

	<div id="example-3">
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames" />
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
		<label for="mike">Mike</label>
		<br />
		<span>체크한 이름: {{ checkedNames }}</span>
	</div>-->

<!-- NEWS & Events Start -->
<!--<div class="listWrap" v-for="notice in notices" :key="notice">
		<div>
			<h3 v-for="titles in notice.title" :key="titles">{{ titles }}</h3>
		</div>

		<ul class="notice">
			<li v-for="list in notice.lists" :key="list">
				<dl>
					<dt>{{ list.object }}</dt>
					<dd>{{ list.date }}</dd>
				</dl>
			</li>
		</ul>
	</div>

	<select v-model="selected">
		<option disabled value="">Please select one</option>
		<option>A</option>
		<option>B</option>
		<option>C</option>
	</select>
	<span>선택함: {{ selected }}</span>
</template>-->
<template>
	<div class="tabmenu">
		<div class="tabtit">
			<ul>
				<li
					v-for="(tabtits, index) in tabtit"
					:key="tabtits"
					:class="{ active: currentIndex === index }"
					@click="currentIndex = index"
				>
					{{ tabtits }}
				</li>
			</ul>
		</div>
		<div class="tabcon">
			<div
				v-for="(tabconts, index) in tabcont"
				:key="tabconts"
				:class="{ active: currentIndex === index }"
			>
				{{ tabconts }}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Home',
	components: {},

	data: function () {
		return {
			currentIndex: 0,
			tabtit: ['tab1', 'tab2', 'tab3'],
			tabcont: ['tab1내용입니다', 'tab2내용입니다', 'tab3내용입니다'],
		};
	},

	methods: {
		function(index) {
			let _index = 0; //eslint-disable-line no-unused-vars

			_index = index;
			console.log(index);
		},
	},
};
</script>
<style lang="scss">
.main {
	height: 100vh;
}

li {
	list-style: none;
	display: inline-block;
	text-align: center;
	border: solid 1px #ddd;
	padding: 10px;
	&.active {
		background: #ddd;
		color: #000;
	}
}
.tabcon {
	div {
		display: none;
		&.active {
			display: block;
		}
	}
}
</style>
