<script setup lang="ts"></script>

<template>
  <aside class="aside">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="140px" class="mx-auto" />
    </NuxtLink>
    <button class="button">
      <Icon name="line-md:logout" size="20" />
    </button>
    <LayoutMenu />
  </aside>
</template>

<style scoped>
.aside {
  @apply px-5 py-8 bg-sidebar h-full relative w-full;
}

.button {
  @apply absolute top-2 right-3 transition-colors hover:text-primary;
}
</style>
