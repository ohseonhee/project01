<template>
	<input :type="type" :name="name" :id="id" :placeholder="placeholder" />
</template>

<script>
export default {
	name: 'Input',
	props: {
		type: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: 'placeholder',
		},
		name: {
			type: String,
			default: '',
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
