<template>
  <div id="about" class="my-12 lg:my-16 relative">
    <div class="hidden lg:flex flex-col items-center absolute top-16 -right-8">
      <span class="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
        ABOUT ME
      </span>
      <span class="h-36 w-[2px] bg-[#1a1443]" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="order-2 lg:order-1">
        <p class="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
          Who I am?
        </p>
        <p class="text-gray-200 text-sm lg:text-lg">
          My name is Oleh Zamryha. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
        </p>
      </div>
      <div class="flex justify-center order-1 order-lg-2">
        <v-img
          alt="Oleh Zamryha"
          class="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          height="280"
          src="/profile.png"
          width="280"
        />
      </div>
    </div>
  </div>
</template>
