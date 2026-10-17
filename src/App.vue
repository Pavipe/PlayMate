<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="site-shell">
    <Header />
    <main class="page-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
