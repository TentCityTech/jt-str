<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import RecaptchaV2 from 'svelte-recaptcha-v2';
	import { reCAPTCHA_SITE_KEY } from '$env/static/private';
</script>

<form>
	<!-- Your other form fields here -->
	<RecaptchaV2 sitekey="YOUR_RECAPTCHA_SITE_KEY" 
    action="signup" 
    bind:token={reCAPTCHA_SITE_KEY} />
	<button type="submit">Submit</button>
</form>
