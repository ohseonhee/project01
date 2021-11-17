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
<style lang="scss"></style>
