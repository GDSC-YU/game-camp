<button class="btn h-10 w-[9.5rem] md:h-[3.75rem] md:w-[14.25rem] md:text-xl">
  <a href="/game-camp">Read More 🎮</a>
</button>

<style>
  .btn {
    @apply relative inline-block border-none p-0 font-medium leading-10;
  }
  .btn a {
    @apply h-full w-full;
  }
  .btn:before,
  .btn:after {
    @apply absolute bottom-0 right-0 bg-[#16C9EB] transition-all duration-[250ms] ease-linear;
    content: "";
    box-shadow: 0 0 5px #16c9eb;
  }
  .btn a:before,
  .btn a:after {
    @apply absolute left-0 top-0 bg-[#16C9EB] transition-all duration-[250ms] ease-linear;
    content: "";
    box-shadow: 0 0 5px #16c9eb;
  }
  .btn:before,
  .btn a:before {
    @apply h-1/2 w-[0.13rem];
  }
  .btn:after,
  .btn a:after {
    @apply h-[0.13rem] w-1/5;
  }
  .btn:hover:before,
  .btn:hover a:before {
    @apply h-full;
  }
  .btn:hover:after,
  .btn:hover a:after {
    @apply w-full;
  }
</style>
