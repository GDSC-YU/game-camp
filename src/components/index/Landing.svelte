<script>
  import NeonButton from "./NeonButton.svelte";
  import { onMount } from "svelte";

  export let text = "Game Camp!";

  let typedText = "";
  let intervalId;

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

<section class="flex h-screen flex-col items-center justify-center p-4">
  <div
    class="flex w-full flex-col items-center gap-16 rounded-lg bg-gray-900/70 py-10 text-center md:max-w-3xl md:bg-transparent"
  >
    <h1 class="text-5xl font-semibold md:text-6xl">
      <span>{typedText}</span>
      <span class="cursor" />
    </h1>
    <p class="flex flex-col gap-1 font-medium md:text-xl">
      <span>Code 💻, Craft 🔨, Conquer 👑</span>
      <span>Your 6-Day Game Dev Quest 🏹</span>
    </p>
    <NeonButton />
  </div>
</section>

<style>
  .cursor {
    border-left: 0.1em solid #fff;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
