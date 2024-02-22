<template>
	<div
		class="w-96 h-[610px] bg-darkGrey flex flex-col items-center py-10 rounded-xl"
	>
		<img
			src="../../public/images/avatar-jessica.jpeg "
			alt="Jessica Randall Profile Image"
			class="rounded-full w-24"
		/>
		<div class="text-center my-5">
			<h1 class="text-white text-2xl font-bold pb-1.5">
				Jessica Randall
			</h1>
			<p class="text-primary font-semibold text-sm">
				London, United Kingdom
			</p>
		</div>
		<p class="text-[#e3e3e3c0] text-sm">
			"Front-end developer and avid reader."
		</p>

		<div class="flex flex-col m-4">
			<button
				v-for="link in links"
				class="bg-normalGrey m-2.5 w-80 h-11 rounded-lg text-white text-semibold hover:text-normalGrey hover:bg-primary"
			>
				{{ link }}
			</button>
		</div>
	</div>
</template>

<script setup>
	const links = [
		"GitHub",
		"Frontend Mentor",
		"LinkedIn",
		"Twitter",
		"Instagram",
	];
</script>
