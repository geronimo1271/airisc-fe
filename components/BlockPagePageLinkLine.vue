<template>
  <section class="flex flex-row justify-between">
    <div class="px-8 py-4 text-xs-1 font-bold text-white">
      <NuxtLink
        v-if="prev_page_label && prev_page_link"
        :to="prev_page_link"
        class="text-2xl bg-gray-300 rounded border px-6 py-2 font-bold text-guildtext-700"
      >
        {{ prev_page_label }}
      </NuxtLink>
    </div>
    <div class="px-8 py-4 text-xs-1 font-bold text-white">
      <NuxtLink
        v-if="next_page_label && next_page_link"
        :to="next_page_link"
        class="text-2xl bg-gray-300 rounded border px-6 py-2 font-bold text-guildtext-700"
      >
        {{ next_page_label }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-link-line";

const { prev_page_label, prev_page_link, next_page_label, next_page_link } =
  defineProps<IProps>();
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply text-xs-3;
}
</style>
