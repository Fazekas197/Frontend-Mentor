<template>
	<div>
		<button
			class="px-5 py-4 rounded-lg text-center text-white bg-darkSlateGrey w-full font-bold hover:bg-hoverGradient hover:shadow-2xl"
		>
			{{ msg }}
		</button>
	</div>
</template>

<script setup>
	const props = defineProps(["msg"]);
</script>
