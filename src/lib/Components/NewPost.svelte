<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div>
	<form method="POST" action="/?/new_post">
		<label>
			New Post
			<input name="text" placeholder="blah blah" />
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
		background: white;
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
