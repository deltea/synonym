<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<a href="/" class="fixed top-0 left-0 m-8 hover:underline">
  {"< back"}
</a>

<div class="flex justify-center items-center min-h-full overflow-auto">
  <main class="w-[40rem] my-40">
    <h1 class="underline font-bold mb-10">{data.word}</h1>

    {#if data.valid}
      {#each data.definitions as definition, i}
        <div class="space-y-4">
          <span class="space-y-0">
            <h2 class="italic">{definition.partOfSpeech}</h2>
            <p class="text-bg-4">{definition.description}</p>
          </span>

          <div class="gap-x-2 flex flex-wrap ml-8">
            {#each definition.synonyms as word, i}
              <a href="/{word}" class="hover:underline">{word}</a>
              {#if i < definition.synonyms.length - 1}
                <span class="text-bg-4">{"/"}</span>
              {/if}
            {/each}
          </div>
        </div>

        {#if i < data.definitions.length - 1}
          <div class="text-bg-1 my-8">{"- ".repeat(34)}</div>
        {/if}
      {/each}
    {:else}
      <div class="space-y-4">
        <div>
          <p class="text-bg-4">no definitions found for "{data.word}"</p>
          {#if data.definitions.length > 0}
            <p class="text-bg-4">did you mean:</p>
          {/if}
        </div>

        <div class="gap-x-2 flex flex-wrap ml-8">
          {#each data.definitions as word, i}
            <a href="/{word}" class="hover:underline">{word}</a>
            {#if i < data.definitions.length - 1}
              <span class="text-bg-4">{"/"}</span>
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  </main>
</div>
