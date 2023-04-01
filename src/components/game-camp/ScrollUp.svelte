<script>
  import { onMount, onDestroy } from "svelte";
  import * as animateScroll from "svelte-scrollto-next";
  import Icon from "@iconify/svelte";

  let isScrolled = false;

  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition <= window.innerHeight) {
      isScrolled = false;
    } else {
      isScrolled = true;
    }
  }

  function scrollToTop() {
    animateScroll.scrollToTop();
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

{#if isScrolled}
  <button
    class="fixed bottom-8 right-8 z-50 rounded-3xl bg-[#141B41] p-2"
    on:click={scrollToTop}
  >
    <Icon icon="ri:arrow-up-line" class="h-7 w-7" />
  </button>
{/if}
