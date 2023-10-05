<template>
  <header class="py-4 px-8 flex items-center gap-x-2">
    <span v-for="head in headers" :key="head.href">
      {{ head.text }}
    </span>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
