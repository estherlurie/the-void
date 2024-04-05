<script lang="ts">
	let username = '';
</script>

<div class="new-post">
	<h3 class="new-post-title">New Post</h3>
	<form method="POST" action="?/new_post">
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
		width: 45%;
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

	.new-post-title {
		margin: auto;
	}
</style>
