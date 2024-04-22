<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { AuthError } from './types';
	import type { ActionData } from './$types';

	// Props
	/** @type {import('./$types').PageData} */
	export let data;
	export let form: ActionData;

	// Methods
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
		console.log('REDIRECTING TO HOME');
		redirect(307, '/void');
	}
</script>

<div class="frame">
	<div>
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
			<h1><a href="/void">Enter the void.</a></h1>
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
</style>
