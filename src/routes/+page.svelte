<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let word = "";

  onMount(() => {
    const element = document.getElementById("word") as HTMLInputElement;
    element.focus();
  });

  function wordSearch() {
    goto(`/${word}`);
  }
</script>

<div class="flex justify-center items-center h-full">
  <main class="w-[40rem]">
    <div class="space-y-1">
      <h1 class="underline font-bold">synonym</h1>
      <h2 class="text-bg-4">a minimalistic synonym searcher</h2>
    </div>

    <div class="text-bg-1 my-4">{"- ".repeat(34)}</div>

    <form on:submit|preventDefault={wordSearch}>
      <input
        type="text"
        id="word"
        class="placeholder-bg-4 bg-bg p-3 border-2 outline-none w-full"
        placeholder="Search for a word"
        bind:value={word}
      />
    </form>
  </main>
</div>
