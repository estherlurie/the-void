<script lang="ts">
	export let username: any;
</script>

<div>
	<input bind:value={username} placeholder="enter your name" />
	<p>Hello {username || 'stranger'}!</p>
	<form method="POST" action="/?/new_post">
		<label>
			New Post
			<input name="text" placeholder="stranger"/>
		</label>
		<button>Submit</button>
	</form>
</div>

<style>
	div {
		color: inherit;
		padding: 2rem;
	}
	.post {
		transition: box-shadow 0.1s ease-in;
		border: solid;
	}

	.post:hover {
		box-shadow: 1px 1px 3px #aaa;
		cursor: pointer;
	}

	.post,
	.post {
		margin-top: 2rem;
	}
</style>
