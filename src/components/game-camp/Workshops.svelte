<script>
  import { schedule } from "../../data/workshops";
</script>

<section id="Workshops" class="p-7 py-24">
  <div class="flex flex-col items-center justify-center gap-y-5 text-center">
    <h1 class="w-fit rounded-xl bg-gray-900/95 p-3 text-3xl md:p-6 md:text-6xl">
      Workshops Schedule 🔧🕒
    </h1>

    <div class="grid gap-6 p-3 md:grid-cols-3">
      {#each schedule as day}
        {#if Object.keys(day)[0] === "Saturday" || Object.keys(day)[0] === "Sunday" || Object.keys(day)[0] === "Monday" || Object.keys(day)[0] === "Tuesday" || Object.keys(day)[0] === "Wednesday" || Object.keys(day)[0] === "Thursday"}
          <div class="rounded-lg bg-gray-900/80 shadow">
            <div class="rounded-t-lg p-4 shadow">
              <p class="text-2xl font-black">
                {Object.keys(day)[0]}
              </p>
            </div>
            <div class="p-4">
              {#each day[Object.keys(day)[0]] as event}
                <div class="p-3 text-lg font-medium">
                  {event.name} <br />
                  {event.time}
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
