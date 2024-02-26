<template>
	<div
		class="w-[550px] h-[340px] bg-darkGrayishBlue rounded-2xl p-12 font-extrabold text-center"
	>
		<div>
			<h1 class="text-xl text-neonGreen">Advice #{{ quote.slip.id }}</h1>
			<div class="h-[128px] my-7">
				<p class="text-[28px] text-lightCyan">
					"{{ quote.slip.advice }}"
				</p>
			</div>
			<img src="/images/pattern-divider-desktop.svg" alt="" />
		</div>
		<button
			@click="refresh"
			class="w-16 h-16 bg-neonGreen rounded-full flex justify-center items-center translate-y-8 m-auto -translate-x-1 hover:drop-shadow-hover"
		>
			<img src="/images/icon-dice.svg" alt="" />
		</button>
	</div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	const quote = ref({ slip: { id: "", advice: "" } });

	// getting the initial advice the same as the one in the design so the screenshot looks similar
	onMounted(async () => {
		const res = await fetch("https://api.adviceslip.com/advice/71");
		quote.value = await res.json();
	});

	async function refresh() {
		const res = await fetch("https://api.adviceslip.com/advice");
		quote.value = await res.json();
	}
</script>
