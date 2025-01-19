<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div class="h-screen font-cascadia selection:bg-fg selection:text-bg">
  {@render children()}
</div>
