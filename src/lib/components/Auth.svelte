<script>
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';

	function sign_in_cb() {
		console.log('sign in');
		goto('/auth/sign_in');
	}

	function sign_up_cb() {
		goto('/auth/sign_up');
	}
</script>

<div class="frame">
	<h1>Have you been here before?</h1>
	<div class="large-text">
		<Button text="Yes" hover_text="Sign In" on:message={sign_in_cb} />
		<Button text="No" hover_text="Sign Up" on:message={sign_up_cb} />
	</div>
</div>

<style>
	.large-text {
		font-size: 30px;
	}
	div {
		color: inherit;
		padding: 2rem;
		text-align: center;
	}

	frame {
		display: inline-flex;
	}
</style>
