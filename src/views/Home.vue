<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Chart />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '@/components/Chart.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, Chart, Footer
  }
}
</script>
