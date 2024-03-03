<template>
	<div
		v-if="!success"
		class="lg:flex lg:flex-row-reverse lg:w-[920px] bg-white lg:p-5 items-center justify-between lg:rounded-3xl"
	>
		<img
			src="/images/illustration-sign-up-mobile.svg  "
			class="w-full lg:hidden"
		/>
		<img
			src="/images/illustration-sign-up-desktop.svg"
			alt=""
			class="hidden lg:block"
		/>
		<div class="lg:px-9">
			<div class="px-6 text-charcoalGrey my-10 lg:my-7">
				<h1 class="text-3xl font-bold text-darkSlateGrey lg:text-5xl">
					Stay Updated!
				</h1>
				<p class="my-5">
					Join 60,000+ product managers receiving monthly updates on:
				</p>
				<!-- BULLET POINTS -->
				<div>
					<div class="flex items-start mb-2">
						<img src="/images/icon-list.svg" class="mr-4" />
						<p>Product discovery and building what matters</p>
					</div>
					<div class="flex items-start mb-2">
						<img src="/images/icon-list.svg" class="mr-4" />
						<p>Measuring to ensure updates are a success</p>
					</div>
					<div class="flex items-start">
						<img src="/images/icon-list.svg" class="mr-4" />
						<p>And much more!</p>
					</div>
				</div>
			</div>
			<form class="px-6" @submit.prevent>
				<div class="flex flex-col mb-5">
					<div
						class="text-sm d flex items-center justify-between text-tomato"
					>
						<label
							for="email"
							class="text-darkSlateGrey my-1 font-bold"
							>Email address</label
						>
						<p>{{ error }}</p>
					</div>
					<input
						v-model="input"
						id="email"
						type="text"
						placeholder="email@company.com"
						class="outline-none px-5 py-4 border-2 rounded-lg text-charcoalGrey focus:border-charcoalGrey"
						:class="{ 'bg-[#ffe8e6] border-tomato': error }"
					/>
				</div>
				<button type="submit" class="w-full">
					<Btn
						msg="Subscribe to monthly newsletter"
						@click="validate()"
					/>
				</button>
			</form>
		</div>
	</div>
	<div v-else>
		<Success />
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import Btn from "./Btn.vue";
	import Success from "./Success.vue";

	const error = ref("");
	const success = ref(false);
	const input = ref("");

	function validate() {
		if (!input.value || !input.value.includes("@")) {
			error.value = "Valid email required";
		} else {
			error.value = "";
			success.value = true;
		}
	}
</script>
