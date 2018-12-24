<template>
  <section class="container">
    <NumberUp :number="125684" :init="true"></NumberUp>
  </section>
</template>

<script>
import NumberUp from '~/components/NumberUp.vue'

export default {
  components: {
    NumberUp
  },
  layout: 'default'
}
</script>

<style>
.container {
  min-height: 100vh;
  text-align: center;
}
</style>