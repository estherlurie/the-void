<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="frame">
	<form method="POST">
		<input name="username" type="text" placeholder="username" />
		<input name="password" type="password" placeholder="pwd" />
		<button>Submit</button>
	</form>
	{#if form?.success}
		<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
		<p>Successfully logged in! Welcome back, {form.data}</p>
	{/if}
</div>

<style>
	.frame {
		margin: auto;
		text-align: center;
		color: inherit;
		display: inline-flex;
	}
</style>
