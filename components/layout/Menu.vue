<script setup lang="ts">
import { MUNE_DATA } from "./menu.data";
</script>

<template>
  <div>
    <NuxtLink
      class="menu-item"
      v-for="item in MUNE_DATA"
      :key="item.name"
      :to="item.url"
    >
      <Icon :name="item.icon" class="mr-3" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.menu-item {
  @apply flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5;
}
</style>
