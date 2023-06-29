<script>
  import Icon from "@iconify/svelte";

  import { navData } from "../../../data/nav";

  let opened;

  const toggleMenu = () => {
    // toggle opened state to show/hide mobile nav & swap its icon
    opened = !opened;
    // toggle overflow-hidden class to prevent scrolling when mobile nav is open
    document.body.classList.toggle("overflow-hidden");
  };
</script>

<header class="absolute z-50 w-full text-center font-bold text-white">
  <!-- mobile nav -->
  <nav class="md:hidden">
    <!-- toggles fixed class when the menu is opened -->
    <div class="z-50 flex w-full justify-between p-5" class:fixed={opened}>
      <img
        src="/images/logos/gdsc.png"
        alt="Google Developers Student Club Logo"
        class="h-20 w-20"
      />
      <button on:click={toggleMenu}>
        <Icon
          icon={opened ? "ri:close-fill" : "ri:menu-4-fill"}
          class="h-9 w-9"
        />
      </button>
    </div>
    <!-- hidden when the menu is closed -->
    <div
      class="fixed flex h-[100svh] w-screen flex-col items-center justify-center gap-y-5 whitespace-pre-wrap bg-[#050c21]"
      class:hidden={!opened}
    >
      <!-- Links -->
      {#each navData as link}
        <a
          href={link.href}
          class="link text-2xl transition duration-300 ease-in-out lg:hover:scale-110"
        >
          {link.name}
        </a>
      {/each}
      <img
        src="/images/ui/header-guy.svg"
        alt="Our Cute Astronaut Guy :)"
        class="absolute bottom-0 right-0 transition duration-300 ease-in-out lg:hover:scale-110"
      />
    </div>
  </nav>
  <!-- Desktop nav -->
  <nav class="mt-8 hidden items-center justify-center gap-x-7 md:flex">
    <!-- Links -->
    {#each navData as link}
      <a
        href={link.href}
        class="link text-xl transition duration-300 ease-in-out lg:hover:scale-110"
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>
