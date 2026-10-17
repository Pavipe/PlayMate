<script setup>
import { RouterLink } from 'vue-router'

defineOptions({ name: 'SiteHeader' })
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="PlayMate, inici">
        <!--Al clicar el logo ves a la pagina d'inici-->
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M8 6.5v19l16-9.5L8 6.5Z" fill="currentColor" />
            <circle cx="24.5" cy="8" r="3.5" fill="currentColor" />
          </svg>
        </span>
        <span>PlayMate</span>
      </RouterLink>

      <nav class="main-nav" aria-label="Navegació principal">
        <!-- Menú de navegació entre les diferents rutes -->
        <RouterLink to="/">Inici</RouterLink>
        <RouterLink to="/musicians">Musicians</RouterLink>
        <RouterLink to="/superplays">Super Plays</RouterLink>
      </nav>

      <RouterLink class="header-cta" to="/superplays">
        <!-- Al explorar actuacions ves a la pagina de superplays -->
        <span aria-hidden="true">↗</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 2;
  padding: 0 5.5%;
  background: var(--color-white);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
  max-width: 1280px;
  margin: 0 auto;
  gap: 2rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-blue);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.06em;
}

.brand-mark {
  display: grid;
  width: 37px;
  height: 37px;
  place-items: center;
  border-radius: 12px;
  color: var(--color-white);
  background: var(--color-orange);
}

.brand-mark svg {
  width: 26px;
  height: 26px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: clamp(1.25rem, 3vw, 2.7rem);
}

.main-nav a {
  color: var(--color-muted);
  font-size: 0.91rem;
  font-weight: 600;
  transition: color 160ms ease;
}

.main-nav a:hover,
.main-nav a.router-link-exact-active {
  color: var(--color-blue);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.78rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-blue);
  font-size: 0.84rem;
  font-weight: 700;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
}

.header-cta:hover {
  border-color: var(--color-orange);
  background: var(--color-cream);
}

.header-cta span {
  color: var(--color-orange);
  font-size: 1.05rem;
}

@media (max-width: 760px) {
  .site-header {
    padding: 0 5%;
  }

  .header-inner {
    min-height: 72px;
    flex-wrap: wrap;
    gap: 0.9rem;
    padding: 0.8rem 0;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
    padding-top: 0.6rem;
    border-top: 1px solid var(--color-border);
  }

  .main-nav a {
    font-size: 0.82rem;
  }

  .header-cta {
    padding: 0.65rem 0.85rem;
    font-size: 0.76rem;
  }
}
</style>
