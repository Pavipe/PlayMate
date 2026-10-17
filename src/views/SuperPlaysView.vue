<script setup>
import { computed, onMounted, ref } from 'vue'
// Importem les eines per accedir a Firestore
import { collection, getDocs } from 'firebase/firestore'
// Importem la base de dades configurada a firebase.js
import { db } from '../firebase'
import SuperPlayCard from '../components/SuperPlayCard.vue'

const superplays = ref([])
const loading = ref(true)
const error = ref('')
const noData = computed(() => !loading.value && !error.value && superplays.value.length === 0)

async function loadSuperplays() {
  loading.value = true
  error.value = ''

  try {
    // Llegim tots els documents de la col·lecció "superplays" de Firestore
    const querySnapshot = await getDocs(collection(db, 'superplays'))

    // Convertim els documents retornats en un array d'objectes que vue pugui utilitzar
    superplays.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (loadError) {
    console.error('No s’ha pogut carregar la llista de Super Plays.', loadError)
    error.value = 'No hem pogut carregar les actuacions. Torna-ho a provar més tard.'
  } finally {
    loading.value = false
  }
}

onMounted(loadSuperplays)
</script>

<template>
  <section class="listing-page">
    <div class="listing-heading">
      <div>
        <p class="eyebrow"><span></span> ACTUACIONES CON GANAS DE SONAR</p>
        <h1>Una nueva oportunidad <em>te está esperando.</em></h1>
        <p class="description">
          Descubre actuaciones que buscan talento. Encuentra tu próximo escenario y forma parte de
          algo que suena bien.
        </p>
      </div>
      <div class="heading-note">
        <span>♫</span><strong>Tu próximo bolo<br />puede estar aquí</strong>
      </div>
    </div>

    <div class="list-toolbar">
      <div>
        <h2>Super Plays disponibles</h2>
        <p v-if="!loading && !error">{{ superplays.length }} actuaciones abiertas</p>
      </div>
      <span class="filter-label"><span aria-hidden="true">⌖</span> Todas las ubicaciones</span>
    </div>

    <div v-if="loading" class="status-message" role="status">
      <span class="loader" aria-hidden="true"></span>
      <p>Cargando actuaciones...</p>
    </div>
    <div v-else-if="error" class="status-message error-message" role="alert">
      <span class="status-symbol" aria-hidden="true">!</span>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="noData" class="status-message">
      <span class="status-symbol" aria-hidden="true">♫</span>
      <p>Ahora mismo no hay actuaciones abiertas. Vuelve pronto.</p>
    </div>
    <div v-else class="superplay-grid">
      <SuperPlayCard v-for="superplay in superplays" :key="superplay.id" :superplay="superplay" />
    </div>

    <div class="listing-footnote">
      <span aria-hidden="true">✦</span>
      <p>Una oportunidad, un escenario y muchas formas de hacerla sonar.</p>
    </div>
  </section>
</template>

<style scoped>
.listing-page {
  min-height: 70vh;
  padding: 4.4rem 5.5% 5rem;
  background:
    radial-gradient(ellipse at 100% 0, rgba(243, 154, 74, 0.09), transparent 28rem), #fbfcfd;
}

.listing-heading,
.list-toolbar,
.superplay-grid,
.listing-footnote {
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
}

.listing-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2.7rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1rem;
  color: var(--color-orange-dark);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.eyebrow span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-orange);
}

h1 {
  max-width: 730px;
  margin: 0;
  color: var(--color-blue);
  font-size: clamp(2.3rem, 4vw, 3.5rem);
  font-weight: 750;
  letter-spacing: -0.07em;
  line-height: 1.1;
}

h1 em {
  color: var(--color-orange-dark);
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 500;
}

.description {
  max-width: 600px;
  margin: 1rem 0 0;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.7;
}

.heading-note {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 0 0 auto;
  padding: 0.85rem 1rem;
  border-radius: 11px;
  background: var(--color-cream);
  color: var(--color-blue);
  font-size: 0.74rem;
  line-height: 1.5;
}

.heading-note span {
  color: var(--color-orange-dark);
  font-size: 1.65rem;
}

.list-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--color-border);
}

.list-toolbar h2 {
  margin: 0 0 0.2rem;
  color: var(--color-blue);
  font-size: 1.05rem;
  font-weight: 750;
}

.list-toolbar p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.75rem;
}

.filter-label {
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: white;
  color: var(--color-blue);
  font-size: 0.76rem;
  font-weight: 650;
}

.filter-label span {
  margin-right: 0.4rem;
  color: var(--color-orange-dark);
  font-size: 1rem;
}

.superplay-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.status-message {
  display: flex;
  min-height: 220px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  border: 1px dashed #d8dee4;
  border-radius: 14px;
  background: white;
  color: var(--color-muted);
  text-align: center;
}

.status-message p {
  margin: 0;
  font-size: 0.9rem;
}

.loader {
  width: 27px;
  height: 27px;
  border: 3px solid #e8edf0;
  border-top-color: var(--color-orange);
  border-radius: 50%;
  animation: spin 700ms linear infinite;
}

.status-symbol {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  background: var(--color-cream);
  color: var(--color-orange-dark);
  font-size: 1.2rem;
  font-weight: 800;
}

.error-message .status-symbol {
  background: #fff0ed;
  color: #bd5442;
}

.listing-footnote {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--color-muted);
  font-size: 0.78rem;
}

.listing-footnote p {
  margin: 0;
}

.listing-footnote span {
  color: var(--color-orange-dark);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 850px) {
  .superplay-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .heading-note {
    display: none;
  }
}

@media (max-width: 600px) {
  .listing-page {
    padding: 3rem 5% 3.5rem;
  }

  .listing-heading {
    padding-bottom: 2rem;
  }

  .list-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .superplay-grid {
    grid-template-columns: 1fr;
  }

  .listing-footnote {
    align-items: center;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .loader {
    animation-duration: 2s;
  }
}
</style>
