<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div>
  <h1>The Void</h1>
  <button onClick="window.location.href=window.location.href">Refresh Page</button>
  <main>
    <div>
      {#each data.feed as post (post.id)}
        <Post {post} />
      {/each}
    </div>
  </main>
</div>