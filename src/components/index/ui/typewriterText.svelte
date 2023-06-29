<script lang="ts">
  import { onMount } from "svelte";

  const text = "Game Camp!";

  let typedText = "";
  let intervalId: number;

  const startTyping = () => {
    let i = 0;
    intervalId = setInterval(() => {
      typedText = text.slice(0, i);
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          typedText = "";
          startTyping();
        }, 3000);
      }
    }, 250);
  };

  onMount(() => {
    startTyping();
  });
</script>

<h1 class="text-5xl font-semibold md:text-6xl">
  <span>{typedText}</span>
  <span class="cursor" />
</h1>

<style>
  .cursor {
    border-left: 0.3rem solid #fff;
    animation: blink 0.9s infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
