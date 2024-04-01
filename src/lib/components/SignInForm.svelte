<script>
  import Input from '$lib/components/Input.svelte';
  import Button from '$lib/components/Button.svelte';

  let username = '';
  let password = '';
</script>

<form method="POST" class='space-y-5 {$$props.class}'>
  <Input label='Username' id='username' name='username' type='username' bind:value={username} required />
  <Input label='Password' id='password' name='password' type='password' bind:value={password} required />
  <Button type='submit'>Sign In</Button>
</form>