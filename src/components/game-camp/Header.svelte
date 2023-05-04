<script>
  import * as animateScroll from "svelte-scrollto-next";
  import Icon from "@iconify/svelte";

  import { navData } from "../../data/nav";

  let opened;

  const handleClick = () => {
    // toggle opened state to show/hide mobile nav & swap its icon
    opened = !opened;
    // toggle overflow-hidden class to prevent scrolling when mobile nav is open
    document.body.classList.toggle("overflow-hidden");
  };
</script>

<header class="absolute w-full font-bold text-white">
  <!-- mobile nav -->
  <nav class="md:hidden">
    <!-- toggles fixed class when the menu is opened -->
    <div class="z-50 flex w-full justify-between p-5" class:fixed={opened}>
      <img
        src="/logos/gdsc.png"
        alt="Google Developers Student Club Logo"
        class="h-20 w-20"
      />
      <button on:click={handleClick}>
        <Icon
          icon={opened ? "ri:close-fill" : "ri:menu-4-fill"}
          class="h-9 w-9"
        />
      </button>
    </div>
    <!-- hidden when the menu is closed -->
    <div
      class="fixed flex h-screen w-screen flex-col items-center justify-center gap-y-10 whitespace-pre-wrap bg-[#050c21]"
      class:hidden={!opened}
    >
      <!-- Links -->
      <a href="/" class="text-2xl">Home 👾</a>
      {#each navData as link}
        <button
          on:click={() => {
            animateScroll.scrollTo({
              element: link.href,
              offset: 90,
            });
            handleClick();
          }}
        >
          <p class="text-2xl">{link.name}</p>
        </button>
      {/each}
    </div>
  </nav>
  <!-- Desktop nav -->
  <nav class="mt-8 hidden items-center justify-center gap-x-7 md:flex">
    <!-- Links -->
    <a href="/" class="text-xl hover:scale-110">Home 👾</a>
    {#each navData as link}
      <button
        on:click={() =>
          animateScroll.scrollTo({
            element: link.href,
          })}
      >
        <p class="text-xl hover:scale-110">
          {link.name}
        </p>
      </button>
    {/each}
  </nav>
</header>
