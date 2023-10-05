<template>
  <section class="flex">
    <MainHeader :headers="headers()" />
    <RouterView />
  </section>
</template>

<script>
import headers from '@/components/header/entities/headers'
import MainHeader from '../components/header/MainHeader.vue'
export default {
  name: 'MainLayout',
  data: () => ({
    headers
  }),
  components: { MainHeader }
}
</script>
