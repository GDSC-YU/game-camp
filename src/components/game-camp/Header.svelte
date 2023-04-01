<script>
  import logo from "/gdsc.png";
  import * as animateScroll from "svelte-scrollto-next";
  import Icon from "@iconify/svelte";

  import { navData } from "../../data/nav";

  let mobileNavOpened = false;

  function handleDad() {
    mobileNavOpened = !mobileNavOpened;
  }

  const mql = window.matchMedia("(max-width: 777px)");

  mql.addEventListener("change", (e) => {
    mobileView = e.matches;
  });
  let mobileView = mql.matches;
</script>

<header>
  <!-- Desktop Nav -->
  {#if !mobileView}
    <div class="container mx-auto flex flex-row flex-wrap items-center py-6">
      <nav
        class="flex flex-wrap items-center justify-center gap-x-6 md:ml-auto md:mr-auto"
      >
        <!-- Links -->
        <a href="/">
          <p class="text-xl font-medium hover:scale-110">Home</p>
        </a>
        {#each navData as link}
          <button
            on:click={() =>
              animateScroll.scrollTo({
                element: link.href,
              })}
          >
            <p class="text-xl font-medium hover:scale-110">
              {link.name}
            </p>
          </button>
        {/each}
        <a href="https://5p7r83n4sp2.typeform.com/to/cEFAe5Mg" target="_blank">
          <p class="text-xl font-medium hover:scale-110">Sign Up</p>
        </a>
      </nav>
    </div>
    <!-- Mobile Nav Button && Logo -->
  {:else}
    <div class="container mx-auto flex items-center justify-between p-5">
      <img
        src={logo}
        class="h-20 w-20"
        alt="Google Developers Student Club Logo"
      />
      <button on:click={() => handleDad()}>
        <Icon icon="ri:menu-4-fill" class="h-9 w-9" />
      </button>
    </div>
  {/if}
  <!-- Mobile Nav Expanded -->
  {#if mobileNavOpened}
    <nav class="fixed left-0 top-0 z-10 h-screen w-screen bg-[#050c21]">
      <div class="flex items-center justify-between p-5">
        <img
          src={logo}
          class="h-20 w-20"
          alt="Google Developers Student Club Logo"
        />
        <button on:click={() => handleDad()}>
          <Icon icon="ri:close-fill" class="h-9 w-9" />
        </button>
      </div>
      <div
        class="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-8"
      >
        <!-- Links -->
        <a href="/">
          <p class="text-2xl">Home</p>
        </a>
        {#each navData as link}
          <button
            on:click={() => {
              animateScroll.scrollTo({
                element: link.href,
                offset: 20,
              });
              handleDad();
            }}
          >
            <p class="text-2xl">{link.name}</p>
          </button>
        {/each}
      </div>
    </nav>
  {/if}
</header>
