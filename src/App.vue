<template>
	<Topnavi></Topnavi>
	<router-view />
</template>
<script>
import Topnavi from '@/components/Top.vue';
export default {
	components: {
		Topnavi,
	},
};
</script>
<style lang="scss">
html,
body {
	height: 100%;
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
#app {
	height: 100%;
	&.dark {
		background: #383838;
	}
	&.wihte {
		background: #fff;
	}
}
</style>
