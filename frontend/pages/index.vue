<script setup lang="ts">
import {buttonVariants} from "~/components/ui/button";

definePageMeta({
  layout: "home"
})
const features = [
  {
    name: "High Accuracy",
    description: " Our transcriptionists are trained to deliver precise and error-free transcriptions."
  },
  {
    name: "Fast Turnaround",
    description: "We understand the importance of time. You can expect quick delivery of your transcribed files."
  },
  {
    name: "Confidentiality",
    description: "Your data is safe with us. We follow strict security protocols to ensure the confidentiality of your files."
  },
  {
    name: "Multi-Format Support",
    description: "Whether it's audio or video, we can transcribe content in a variety of formats."
  },
  {
    name: "Speaker Identification",
    description: "We can identify speakers in a conversation, making it easier to attribute the text to the right person."
  },
  {
    name: "Customization",
    description: "Let us know your specific requirements, and we'll tailor the transcription to meet your needs."
  },
]

const works = [
  {
    name: "upload",
    description: "Easily upload your audio or video files to our secure platform."
  },
  {
    name: "Transcribe",
    description: "Our professional transcriptionists will accurately convert your recordings into text."
  },
  {
    name: "Download",
    description: "Once complete, you can download your transcribed files with a click."
  },
]
</script>

<template>
  <div>
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div class="text-center space-y-2">
          <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            New Features
          </div>
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Accurate Transcription Service
          </h1>
          <p class="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Fast. Precise. Confidential. Let our professional transcription
            team convert your audio and video files into accurate text.
          </p>
        </div>
        <div class="mx-auto w-full max-w-sm space-y-2">
          <form class="flex space-x-2">
            <Input type="email" placeholder="Enter your email"/>
            <Button>Sign Up</Button>
          </form>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <a class="underline underline-offset-2" href="#">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our platform makes transcription easy. Simply upload your
            files and let our experts handle the rest.
          </p>
        </div>
        <div class="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:max-w-6xl">
          <img
              src="https://placehold.co/600x400" width="550" height="310" alt="Image"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center">
          <div class="grid gap-4 ">
            <div class="grid gap-1 " v-for="({name, description}, index) in works" :key="index">
              <h3 class="text-lg font-bold ">{{ name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div class="container grid items-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">
            Features
          </h2>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our transcription service offers a variety of features to meet
            your needs.
          </p>
        </div>
        <div class="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div class="grid gap-1" v-for="(feature, index) in features" :key="index">
            <h3 class="text-lg font-bold">{{ feature.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div class="flex flex-col justify-center space-y-4">
          <ul class="grid gap-6">
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">Collaboration</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Make collaboration seamless with built-in code review
                  tools.
                </p>
              </div>
            </li>
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">Automation</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Automate your workflow with continuous integration.
                </p>
              </div>
            </li>
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">Scale</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Deploy to the cloud with a single click and scale with
                  ease.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img src="https://placehold.co/600x400" width="550" height="310" alt="Image"
             class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div class="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
            src="https://placehold.co/600x400" width="550" height="310" alt="Image"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Performance
            </div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
              Traffic spikes should be exciting, not scary.
            </h2>
            <p class="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD, built-in testing, and
              integrated collaboration.
            </p>
          </div>
          <div class="flex space-x-4 lg:justify-end">
            <a :class="buttonVariants({variant: 'default'})">
              Contact Sales
            </a>
            <a :class="buttonVariants({variant: 'outline'})">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet our Customers
          </h2>
          <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Trusted by the best teams in the world. We help teams of all
            sizes.
          </p>
        </div>
        <div class="divide-y rounded-lg border">
          <div class="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                  src="https://placehold.co/600x400"
                  width="140" height="70"
                  alt="Logo"
                  class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
            <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                  src="https://placehold.co/600x400"
                  width="140" height="70"
                  alt="Logo"
                  class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
            <div class="mx-auto flex w-full items-center justify-center p-8">
              <img src="https://placehold.co/600x400"
                   width="140"
                   height="70" alt="Logo"
                   class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
          </div>
          <div class="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8"><img
                src="https://placehold.co/600x400"
                width="140" height="70"
                alt="Logo"
                class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
            <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8"><img
                src="https://placehold.co/600x400"
                width="140" height="70"
                alt="Logo"
                class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
            <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8"><img
                src="https://placehold.co/600x400"
                width="140" height="70"
                alt="Logo"
                class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
            </div>
          </div>
        </div>
        <div class="flex justify-center space-x-4">
          <a :class="buttonVariants({variant: 'default'})">
            Contact Sales
          </a>
          <a :class="buttonVariants({variant: 'outline'})">
            Learn more
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
