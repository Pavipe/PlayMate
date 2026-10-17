<script setup>
defineOptions({ name: 'SiteFooter' })
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <RouterLink class="footer-brand" to="/">PlayMate</RouterLink>
      <p>Connectem músics. Fem que cada actuació compti.</p>
      <span>PlayMate © 2026</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1.7rem 5.5%;
  background: var(--color-blue);
  color: rgba(255, 255, 255, 0.72);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  font-size: 0.82rem;
}

.footer-brand {
  color: var(--color-white);
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.footer-inner p {
  margin: 0;
}

.footer-inner span {
  white-space: nowrap;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
