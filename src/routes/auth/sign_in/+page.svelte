<script lang="ts">
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	import { AuthError } from './types';

	function handle_error(error: AuthError) {
		switch (error) {
			case AuthError.DoesNotExist:
				return 'Account does not exist!';
			case AuthError.EmptyUsername:
				return 'Empty username';
			case AuthError.EmptyPassword:
				return 'Empty password';
			case AuthError.IncorrectPassword:
				return 'Incorrect password';
		}
	}

	function handle_success() {
		goto('/void');
	}
</script>

<div class="frame">
	<div class="sign-in-form">
		<form method="POST">
			<label for="username">Username</label>
			<input name="username" type="text" placeholder="username" />
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="pwd" />
			<button>Submit</button>
		</form>
	</div>
	<div>
		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
			{handleSuccess()}
		{:else if form?.error}
			<p>Error: {handle_error(form?.error)}</p>
		{/if}
	</div>
</div>

<style>
	div {
		margin: auto;
		text-align: center;
		color: inherit;
		display: block;
	}

	.sign-in-form {
	}
</style>
