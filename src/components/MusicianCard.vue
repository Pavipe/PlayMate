<script setup>
defineOptions({ name: 'MusicianCard' })

defineProps({
  player: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="musician-card">
    <div class="card-top">
      <div class="player-avatar" aria-hidden="true">{{ player.nom.slice(0, 1) }}</div>
      <span class="rating"><span aria-hidden="true">★</span> {{ player.valoracio }}</span>
    </div>
    <h2>{{ player.nom }}</h2>
    <p class="instrument">{{ player.instrument }}</p>
    <div class="player-details">
      <span class="level"><span aria-hidden="true">✦</span> {{ player.nivell }}</span>
      <span class="zone"><span aria-hidden="true">⌖</span> {{ player.zona }}</span>
    </div>
    <button class="contact-button" type="button">Veure perfil <span aria-hidden="true">→</span></button>
  </article>
</template>

<style scoped>
.musician-card {
  display: flex;
  min-height: 245px;
  flex-direction: column;
  padding: 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 15px;
  background: var(--color-white);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.musician-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgba(17, 40, 74, 0.09);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.player-avatar {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 16px;
  background: var(--color-cream);
  color: var(--color-blue);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.55rem;
}

.rating {
  color: var(--color-blue);
  font-size: 0.82rem;
  font-weight: 750;
}

.rating span {
  color: var(--color-orange-dark);
}

h2 {
  margin: 1.1rem 0 0.2rem;
  color: var(--color-blue);
  font-size: 1.08rem;
  font-weight: 750;
  letter-spacing: -0.03em;
}

.instrument {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.84rem;
}

.player-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1rem 0 1.1rem;
}

.player-details span {
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  background: #f5f7f8;
  color: #5e6d7d;
  font-size: 0.7rem;
  font-weight: 600;
}

.level span {
  color: var(--color-orange-dark);
}

.zone span {
  color: var(--color-blue);
  font-size: 0.9rem;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  padding: 0.75rem 0;
  border: 0;
  border-top: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-blue);
  cursor: pointer;
  font: inherit;
  font-size: 0.77rem;
  font-weight: 750;
  text-align: left;
}

.contact-button span {
  color: var(--color-orange-dark);
  font-size: 1.05rem;
}
</style>
