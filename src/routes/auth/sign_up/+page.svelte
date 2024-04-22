<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	import { SignUpError } from './types';

	function handle_error(error: SignUpError, response) {
		switch (error) {
			case SignUpError.AlreadyExists:
				return 'Account exists already!';
			case SignUpError.EmptyUsername:
				return 'Empty username';
			case SignUpError.EmptyPassword:
				return 'Empty password';
			case SignUpError.Database:
				console.log(response);
				return 'Database error, check logs';
		}
	}

	function handle_success() {
		console.log('SIGN UP SUCCESS, REDIRECT TO HOME');
		redirect(307, '/');
	}
</script>

<div class="frame">
	<div class="sign-up-form">
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
			{handle_success()}
		{:else if form?.error}
			<p>Error: {handle_error(form?.error, form?.response)}</p>
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

	.sign-up-form {
	}
</style>
