<template>
  <section class="position-relative d-flex flex-column align-center justify-space-between py-4 py-lg-12">
    <v-img
      alt="Hero"
      class="position-absolute -top-[98px] z-10"
      :height="795"
      src="/hero.svg"
      :width="1572"
    />

    <div class="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
      <div class="order-2 lg:order-1 d-flex flex-column items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        <h1 class="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Hello, <br>
          This is {{ ' ' }}
          <span class=" text-pink-500">Oleh Zamryha</span>
          {{ ` , I'm a Professional ` }}
          <span class=" text-[#16f2b3]">Senior Vue.js developer</span>
          .
        </h1>

        <div class="my-12 d-flex items-ceumnflex-columnnter gap-5">
          <a
            class="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://github.com/vuedev2113"
            target="_blank"
          >
            <v-icon icon="mdi-github" />
          </a>
          <a
            class="transition-all text-pink-500 hover:scale-125 duration-300"
            href="{personalData.linkedIn}"
            target="_blank"
          >
            <v-icon icon="mdi-linkedin" size="30" />
          </a>
          <a
            class="transition-all text-pink-500 hover:scale-125 duration-300"
            href="{personalData.facebook}"
            target="_blank"
          >
            <v-icon icon="mdi-facebook" size="30" />
          </a>
          <a
            class="transition-all text-pink-500 hover:scale-125 duration-300"
            href="{personalData.twitter}"
            target="_blank"
          >
            <v-icon icon="mdi-twitter" size="30" />
          </a>
        </div>

        <div class="flex items-center gap-3">
          <a class="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600" href="#contact">
            <button class="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold d-flex items-ceumnflex-columnnter gap-1 hover:gap-3">
              <span>Contact me</span>
              <RiContactsFill size="16" />
            </button>
          </a>

          <a
            class="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            href="{personalData.resume}"
            role="button"
            target="_blank"
          >
            <span>Get Resume</span>
            <MdDownload size="16" />
          </a>
        </div>

      </div>
      <div class="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] position-relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div class="flex flex-row">
          <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
          <div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
        </div>
        <div class="px-4 lg:px-8 py-5">
          <div class="flex flex-row space-x-2">
            <div class="h-3 w-3 rounded-full bg-red-400" />
            <div class="h-3 w-3 rounded-full bg-orange-400" />
            <div class="h-3 w-3 rounded-full bg-green-200" />
          </div>
        </div>
        <div class="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code class="font-mono text-xs md:text-sm lg:text-base">
            <div class="blink">
              <span class="mr-2 text-pink-500">const</span>
              <span class="mr-2 text-white">coder</span>
              <span class="mr-2 text-pink-500">=</span>
              <span class="text-gray-400">{{ '{' }}</span>
            </div>
            <div>
              <span class="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span class="text-gray-400">{{ `'` }}</span>
              <span class="text-amber-300">Oleh Zamryha</span>
              <span class="text-gray-400">{{ `',` }}</span>
            </div>
            <div class="ml-4 lg:ml-8 mr-2">
              <span class=" text-white">skills:</span>
              <span class="text-gray-400">{{ `['` }}</span>
              <span class="text-amber-300">React</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">NextJS</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">Redux</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">Express</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">NestJS</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">MySql</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">MongoDB</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">Docker</span>
              <span class="text-gray-400">{{ "', '" }}</span>
              <span class="text-amber-300">AWS</span>
              <span class="text-gray-400">{{ "']," }}</span>
            </div>
            <div>
              <span class="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span class="text-orange-400">true</span>
              <span class="text-gray-400">,</span>
            </div>
            <div>
              <span class="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
              <span class="text-orange-400">true</span>
              <span class="text-gray-400">,</span>
            </div>
            <div>
              <span class="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
              <span class="text-orange-400">true</span>
              <span class="text-gray-400">,</span>
            </div>
            <div>
              <span class="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
              <span class="text-orange-400">function</span>
              <span class="text-gray-400">{{ '() {' }}</span>
            </div>
            <div>
              <span class="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
              <span class="text-gray-400">{{ `(` }}</span>
            </div>
            <div>
              <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span class="mr-2 text-white">hardWorker</span>
              <span class="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span class="mr-2 text-white">problemSolver</span>
              <span class="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span class="mr-2 text-white">skills.length</span>
              <span class="mr-2 text-amber-300">&gt;=</span>
              <span class="text-orange-400">5</span>
            </div>
            <div><span class="ml-8 lg:ml-16 mr-2 text-gray-400">{{ `);` }}</span></div>
            <div><span class="ml-4 lg:ml-8 text-gray-400">{{ `};` }}</span></div>
            <div><span class="text-gray-400">{{ `};` }}</span></div>
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
