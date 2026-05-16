<script setup lang="ts">
</script>

<template>
  <form class="n-form" @submit.prevent>
    <slot />
  </form>
</template>

<style scoped>
.n-form {
  width: 100%;
}
</style>
