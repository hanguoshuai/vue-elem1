<template>
	<div>
		<vheader></vheader>
	</div>
</template>

<script>
	import vheader from '@/components/header/header'
	import Vue from 'vue'
	import vueResource from 'vue-resource'
	Vue.use(vueResource)
	export default {
		data() {
			return {
				seller: {

				}
			}
		},
		name: 'Content1',
		components: {
			vheader
		},
		created() {
//			this.$http.get('123.json').then((res)=>{
//				console.log(res)
//			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>