<script lang="ts" setup>
import {buttonVariants} from "~/components/ui/button/index.js";
</script>

<template>
  <div>
    <div class="flex flex-col min-h-[100dvh]">
      <header class="px-4 lg:px-6 h-14 flex items-center">
        <div class="flex items-center space-x-2">
          <a class="flex items-center justify-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span class="sr-only">Acme Inc</span>
          </a>
        </div>
        <nav class="ml-auto flex gap-4 sm:gap-6">
          <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main class="flex-1">
        <slot/>
      </main>
      <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"><p
          class="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Acme Inc. All rights reserved.
      </p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6"><a class="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </a><a class="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </a></nav>
      </footer>
    </div>

  </div>
</template>

<style scoped></style>
