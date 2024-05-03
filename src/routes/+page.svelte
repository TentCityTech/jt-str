<script>
	import Newsletter from '../components/Newsletter.svelte';
</script>

<div class="flex flex-col justify-center items-center h-full">
	<img class="w-40 my-4" src="/SVG/brand.svg" alt="brand" />
	<article class="prose p-4 max-w-md">
		<h2 class="text-center text-6xl text-primary">Desert Elysium</h2>
		<p class="mt-3">
			Unwind and embrace tranquility at Desert Elysium, your private desert oasis arriving soon.
			This luxurious 2 bedroom, 2 bathroom rental offers the perfect escape for a relaxing getaway.
		</p>
		<p class="mt-3">
			Stay tuned for more details and be the first to book your unforgettable desert experience!
		</p>
	</article>
	<div
		class="flex flex-col gap-5 bg-primary px-6 py-20 max-w-md shadow-2xl rounded-3xl sm:px-14 xl:items-center"
	>
		<h2
			class="max-w-2xl text-3xl font-bold tracking-tight text-base-100 sm:text-4xl xl:max-w-none xl:flex-auto"
		>
			Get notified when we’re launching.
		</h2>
		<form class="max-w-md" method="POST" action="?/register">
			<div class="flex flex-col gap-y-4 md:gap-x-4">
				<label for="email-address" class="sr-only">Email address</label>
				<input
					id="email-address"
					name="email"
					type="email"
					autocomplete="email"
					value="test@test.com"
					required
					class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-base-100 placeholder:text-base-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
					placeholder="Enter your email"
				/>
				<button
					type="submit"
					class="flex-none rounded-md bg-base-100 px-3.5 py-2.5 text-sm font-semibold text-base-content shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>Notify me</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	h2 {
		font-family: 'amandine', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
