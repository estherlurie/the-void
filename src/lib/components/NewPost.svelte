<script lang="ts">
	let username = '';
</script>

<div class="new-post">
	<form method="POST" action="/?/new_post">
		<h3>New Post</h3>
		<input bind:value={username} placeholder="enter your name" />
		<p>Hello {username || 'stranger'}!</p>
		<label>
			<input name="text" placeholder="your post here" />
			<input type="hidden" name="username" value={username} />
		</label>
		<button>Submit</button>
	</form>
</div>

<style>
	div {
		color: inherit;
		padding: 2rem;
	}
	.new-post {
		margin: auto;
		width: 20%;
		transition: box-shadow 0.1s ease-in;
		border: solid;
	}

	.new-post:hover {
		box-shadow: 1px 1px 3px #aaa;
		cursor: pointer;
	}

	.new-post,
	.new-post {
		margin-top: 2rem;
	}
</style>
