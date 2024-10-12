<template>
  <div class="">
    <p class="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
      Contact with me
    </p>
    <div class="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
      <p class="text-sm text-[#d3d8e8]">
        {{ "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests." }}
      </p>
      <div class="mt-6 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-base">Your Name: </label>
          <input
            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            maxLength="100"
            :required="true"
            type="text"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-base">Your Email: </label>
          <input
            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            maxLength="100"
            :required="true"
            type="email"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-base">Your Message: </label>
          <textarea
            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            maxLength="500"
            name="message"
            :required="true"
          />
        </div>
        <div class="flex flex-col items-center gap-2">
          <button
            class="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
          >
            <span>Send Message</span>
            <v-icon icon="mdi-send" size="16" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
