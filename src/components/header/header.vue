<template>
		<div>
			<div class="tab border-1px">
			<router-link to='/123' class="tab-item">商品</router-link>
			<router-link to='/bbb' class="tab-item">商家</router-link>
			<router-link to='/ccc' class="tab-item">商家222</router-link>
		</div>
		</div>
</template>

<script>
	export default{
		name:'vHeader'
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";
	.tab
		width:100%
		border-1px(#ccc)
		display:flex
		.tab-item
			font-size:12px
			height:40px
			line-height:40px
			text-align:center
			flex:1
			background:#fff
			&.router-link-active
				color:red
</style>