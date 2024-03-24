import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-3 gap-8">
        <div class="text-left">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1] font-heading">
            Support Our BotZone
          </div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#ff6347] font-heading">
            Subscribe our Youtube Channel
          </div>
        </div>
        <div class="text-right">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#7cfc00] font-heading">
            Stay Updated with BotZone
          </div>
        </div>
      </div>
    </div>
  );
});
