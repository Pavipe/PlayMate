<script setup>
defineOptions({ name: 'SuperPlayCard' })

defineProps({
  superplay: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="superplay-card">
    <div class="event-visual">
      <span class="event-label"><span></span> MÚSICO BUSCADO</span>
      <span class="instrument-note" aria-hidden="true">♫</span>
      <span class="visual-instrument">{{ superplay.instrument }}</span>
    </div>
    <div class="event-content">
      <div class="event-meta">
        <span><span class="meta-icon" aria-hidden="true">⌖</span>{{ superplay.lloc }}</span>
        <span><span class="meta-icon" aria-hidden="true">◷</span>{{ superplay.data }}</span>
      </div>
      <div class="event-bottom">
        <div>
          <small>PREU PER ACTUACIÓ</small>
          <strong>{{ superplay.preu }}</strong>
        </div>
        <span class="event-arrow" aria-hidden="true">↗</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.superplay-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 15px;
  background: var(--color-white);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.superplay-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgba(17, 40, 74, 0.1);
}

.event-visual {
  position: relative;
  display: flex;
  min-height: 160px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 100%, rgba(243, 154, 74, 0.32), transparent 43%),
    var(--color-blue);
  color: white;
}

.event-visual::before,
.event-visual::after {
  position: absolute;
  width: 230px;
  height: 230px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 50%;
  content: '';
}

.event-visual::after {
  width: 170px;
  height: 170px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.16);
}

.event-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.54rem;
  font-weight: 750;
  letter-spacing: 0.1em;
}

.event-label span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-orange);
}

.instrument-note {
  z-index: 1;
  color: var(--color-orange);
  font-size: 2.5rem;
  line-height: 1;
}

.visual-instrument {
  z-index: 1;
  margin-top: 0.35rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-style: italic;
}

.event-content {
  padding: 1.1rem 1.2rem 1rem;
}

.event-meta {
  display: grid;
  gap: 0.55rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.event-meta > span {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: #5f6e7d;
  font-size: 0.78rem;
}

.meta-icon {
  display: inline-grid;
  width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 6px;
  background: #f5f7f8;
  color: var(--color-orange-dark);
  font-size: 0.9rem;
}

.event-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 0.9rem;
}

.event-bottom div {
  display: grid;
  gap: 0.2rem;
}

.event-bottom small {
  color: #929ba4;
  font-size: 0.55rem;
  font-weight: 750;
  letter-spacing: 0.1em;
}

.event-bottom strong {
  color: var(--color-blue);
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.event-arrow {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 50%;
  background: var(--color-cream);
  color: var(--color-orange-dark);
  font-size: 1rem;
  font-weight: 800;
}
</style>
