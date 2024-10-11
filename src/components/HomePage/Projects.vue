<template>
  <div id="projects" class="relative z-50  my-12 lg:my-24">
    <div class="sticky top-10">
      <div class="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" />
      <div class="flex items-center justify-start relative">
        <span class="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span class="w-full h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="pt-24">
      <div class="flex flex-col gap-6">
        <div v-for="project, index in projectsData" :key="index" class="sticky-card w-full mx-auto max-w-2xl sticky">
          <div class="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Project } from './ProjectCard.vue'

  const projectsData = ref<Project[]>([
    {
      id: 1,
      name: 'AI Powered Financial App',
      description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
      tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
      role: 'Backend Developer',
      code: '',
      demo: '',
      image: '/public/image/crefin.jpg',
    },
    {
      id: 2,
      name: 'Travel Agency App',
      description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
      tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'NestJS', 'TypeScript', 'MySQL', 'AWS S3', 'Sun-Editor', 'Gmail Passkey'],
      role: 'Full Stack Developer',
      code: '',
      demo: '',
      image: '/public/image/travel.jpg',
    },
    {
      id: 3,
      name: 'AI Powered Real Estate',
      description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
      tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
      role: 'Full Stack Developer',
      code: '',
      demo: '',
      image: '/public/image/real-estate.jpg',
    },
    {
      id: 4,
      name: 'Newsroom Management',
      description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
      tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
      role: 'Full Stack Developer',
      code: '',
      demo: '',
      image: '/public/image/ayla.jpg',
    },
  ])
</script>
