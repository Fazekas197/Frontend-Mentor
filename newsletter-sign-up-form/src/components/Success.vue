<template>
	<div
		class="h-dvh py-8 px-6 text-charcoalGreyl flex flex-col justify-between lg:block lg:bg-white lg:w-[500px] lg:h-[520px] lg:rounded-3xl lg:p-14"
	>
		<div class="mt-28 lg:m-0">
			<img src="/images/icon-success.svg " />
			<h1 class="text-3xl lg:text-5xl font-bold text-darkSlateGrey my-7">
				Thanks for <span class="block">subscribing!</span>
			</h1>
			<p>
				A confirmation email has been sent to
				<span class="text-darkSlateGrey font-bold"
					>ash@loremcompany.com</span
				>. Please open it and click the button inside to confirm your
				subscription.
			</p>
		</div>
		<Btn msg="Dismiss message" @click="refresh()" class="mt-10" />
	</div>
</template>

<script setup>
	import Btn from "./Btn.vue";

	function refresh() {
		window.location.reload();
	}
</script>
