<script>
	import { Icon } from 'svelte-icons-pack';
	import { BiBed, BiBath, BiWifi2 } from 'svelte-icons-pack/bi';
	import { BsPeople } from 'svelte-icons-pack/bs';
</script>

<div class="hero min-h-screen" style="background-image: url(/hero.jpg);">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Welcome</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-accent btn-outline">Get Started</button>
		</div>
	</div>
</div>

<div class="py-4 px-5">
	<div class="flex flex-row items-center space-x-5 h-9">
		<div class="flex items-center space-x-1">
			<Icon src={BiBed} />
			<p>2 bedrooms</p>
		</div>
		<div class="flex items-center space-x-1">
			<Icon src={BiBath} />
			<p>2 bathrooms</p>
		</div>
		<div class="flex items-center space-x-1">
			<Icon src={BsPeople} />
			<p>4 guests</p>
		</div>
		<div class="flex items-center space-x-1">
			<Icon src={BiWifi2} />
			<p>WiFi</p>
		</div>
	</div>
	<div>
		<h3>Hosted by:</h3>
		<div>
			<div class="avatar">
				<div class="w-24 rounded-full">
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<p>Joshua Hoagland</p>
		</div>
		<p>Maria Halkiadakis</p>
	</div>

	<p class="prose py-5">
		Wander Joshua Tree is a modern architectural home nestled in the Southern California desert on a
		hilltop acre three miles from Joshua Tree National Park with bright, open living space,
		breathtaking views, a private pool, hot tub and so much more.
	</p>

	<h5 class="prose-sm text-base-content">TAKE A TOUR</h5>
	<h2 class="prose-l text-2xl">Check it out before you check-in</h2>

	<div class="flex flex-col w-full lg:flex-row">
		<div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
		<div class="divider lg:divider-horizontal">OR</div>
		<div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
	</div>
</div>
<footer class="footer p-10 bg-neutral text-neutral-content">
	<nav>
		<h6 class="footer-title">Services</h6>
		<a class="link link-hover">Branding</a>
		<a class="link link-hover">Design</a>
		<a class="link link-hover">Marketing</a>
		<a class="link link-hover">Advertisement</a>
	</nav>
	<nav>
		<h6 class="footer-title">Company</h6>
		<a class="link link-hover">About us</a>
		<a class="link link-hover">Contact</a>
		<a class="link link-hover">Jobs</a>
		<a class="link link-hover">Press kit</a>
	</nav>
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a class="link link-hover">Terms of use</a>
		<a class="link link-hover">Privacy policy</a>
		<a class="link link-hover">Cookie policy</a>
	</nav>
</footer>
