<script setup>
import { RouterLink } from 'vue-router'

const benefits = [
  {
    number: '01',
    title: 'Encuentra',
    text: 'Descubre músicos con talento y disponibilidad para completar tu próxima actuación.',
    link: '/musicians',
    linkText: 'Conocer músicos',
    icon: '♪',
  },
  {
    number: '02',
    title: 'Anúnciate',
    text: 'Haz que otros artistas te encuentren y cuenta con nuevas oportunidades para tocar.',
    link: '/musicians',
    linkText: 'Ver la comunidad',
    icon: '＋',
  },
  {
    number: '03',
    title: 'Organiza',
    text: 'Publica una actuación y encuentra a la persona ideal para que nada falte en el escenario.',
    link: '/superplays',
    linkText: 'Explorar actuaciones',
    icon: '↗',
  },
]
</script>

<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> LA MÚSICA NOS CONECTA</p>
          <h1>Cuando falta alguien,<br />la música <em>no se detiene.</em></h1>
          <p class="hero-description">
            PlayMate conecta músicos y organizadores para que cada actuación suene como merece.
            Encuentra tu próximo compañero de escenario.
          </p>
          <div class="hero-actions">
            <RouterLink class="button button-orange" to="/musicians">
              Encuentra músicos <span aria-hidden="true">↗</span>
            </RouterLink>
            <RouterLink class="text-link" to="/superplays">
              Ver actuaciones <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
          <div class="social-proof">
            <div class="avatar-stack" aria-hidden="true">
              <span>LM</span><span>JC</span><span>AS</span><span>+</span>
            </div>
            <p><strong>Una comunidad que suena bien</strong><br />Músicos listos para el próximo bolo</p>
          </div>
        </div>

        <div class="hero-art" aria-label="Il·lustració d'una actuació musical">
          <div class="art-orbit orbit-one"></div>
          <div class="art-orbit orbit-two"></div>
          <div class="sun-disc"></div>
          <div class="sound-wave wave-one"></div>
          <div class="sound-wave wave-two"></div>
          <div class="music-note note-one">♪</div>
          <div class="music-note note-two">♫</div>
          <div class="stage">
            <div class="stage-light light-left"></div>
            <div class="stage-light light-right"></div>
            <div class="stage-person person-left">
              <span class="head"></span><span class="body"></span><span class="instrument guitar"></span>
            </div>
            <div class="stage-person person-center">
              <span class="head"></span><span class="body"></span><span class="instrument mic"></span>
            </div>
            <div class="stage-person person-right">
              <span class="head"></span><span class="body"></span><span class="instrument trumpet"></span>
            </div>
            <div class="stage-floor"></div>
          </div>
          <div class="floating-card">
            <span class="online-dot"></span>
            <div><strong>Una banda completa</strong><small>Actuación lista para sonar</small></div>
            <span class="card-note">♪</span>
          </div>
          <span class="art-caption">ENCUENTRA TU RITMO</span>
        </div>
      </div>
      <div class="hero-bottom">
        <span>PlayMate — comunidad musical</span>
        <span>Conectando talento, actuación tras actuación <b>↓</b></span>
      </div>
    </section>

    <section class="intro-section">
      <div class="section-heading">
        <p class="eyebrow"><span></span> UNA FORMA MÁS FÁCIL DE HACER MÚSICA</p>
        <h2>La persona que te falta<br />está <em>a un acorde de distancia.</em></h2>
        <p>
          Una baja de última hora, una nueva banda o una actuación por organizar. Sea cual sea el
          plan, aquí empieza la conexión.
        </p>
      </div>

      <div class="benefit-grid">
        <article v-for="(benefit, index) in benefits" :key="benefit.number" class="benefit-card">
          <div class="benefit-top">
            <span class="benefit-number">{{ benefit.number }}</span>
            <span class="benefit-icon" :class="{ orange: index === 1 }">{{ benefit.icon }}</span>
          </div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.text }}</p>
          <RouterLink :to="benefit.link">{{ benefit.linkText }} <span aria-hidden="true">→</span></RouterLink>
        </article>
      </div>
    </section>

    <section class="slogan-banner">
      <span class="banner-note" aria-hidden="true">♫</span>
      <p>Porque cada actuación merece sonar bien</p>
      <RouterLink to="/superplays" aria-label="Descubrir Super Plays">↗</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 3.4rem 5.5% 0;
  background:
    radial-gradient(ellipse at 80% 30%, rgba(243, 154, 74, 0.12), transparent 38%),
    var(--color-cream);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  align-items: center;
  gap: 3rem;
  max-width: 1280px;
  min-height: 530px;
  margin: 0 auto;
  padding: 1rem 0 3.2rem;
}

.hero-copy {
  position: relative;
  z-index: 1;
  padding: 1rem 0;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.3rem;
  color: var(--color-orange-dark);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.17em;
}

.eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-orange);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 1.35rem;
  color: var(--color-blue);
  font-size: clamp(2.7rem, 5vw, 4.55rem);
  font-weight: 750;
  letter-spacing: -0.075em;
  line-height: 1.06;
}

h1 em,
h2 em {
  color: var(--color-orange-dark);
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 500;
}

.hero-description {
  max-width: 490px;
  margin-bottom: 1.8rem;
  color: #617083;
  font-size: 1.02rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  min-height: 52px;
  padding: 0 1.35rem;
  border-radius: 9px;
  font-size: 0.88rem;
  font-weight: 700;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(17, 40, 74, 0.16);
}

.button-orange {
  background: var(--color-orange);
  color: var(--color-blue);
}

.button-orange span {
  font-size: 1.1rem;
}

.text-link {
  color: var(--color-blue);
  font-size: 0.9rem;
  font-weight: 700;
}

.text-link span {
  margin-left: 0.35rem;
  color: var(--color-orange-dark);
}

.social-proof {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2.3rem;
}

.avatar-stack {
  display: flex;
  padding-left: 4px;
}

.avatar-stack span {
  display: grid;
  width: 33px;
  height: 33px;
  margin-left: -4px;
  place-items: center;
  border: 2px solid var(--color-cream);
  border-radius: 50%;
  background: #d6a992;
  color: white;
  font-size: 0.57rem;
  font-weight: 800;
}

.avatar-stack span:nth-child(2) {
  background: #708b84;
}

.avatar-stack span:nth-child(3) {
  background: #d99a62;
}

.avatar-stack span:nth-child(4) {
  background: var(--color-blue);
}

.social-proof p {
  margin: 0;
  color: #7c8794;
  font-size: 0.71rem;
  line-height: 1.6;
}

.social-proof strong {
  color: var(--color-blue);
  font-size: 0.75rem;
}

.hero-art {
  position: relative;
  display: grid;
  min-height: 440px;
  place-items: center;
}

.art-orbit {
  position: absolute;
  width: min(92%, 440px);
  aspect-ratio: 1;
  border: 1px solid rgba(17, 40, 74, 0.09);
  border-radius: 50%;
}

.orbit-two {
  width: min(72%, 345px);
  border-style: dashed;
  border-color: rgba(17, 40, 74, 0.13);
}

.sun-disc {
  position: absolute;
  top: 6%;
  right: 11%;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: #f4c38e;
  opacity: 0.82;
}

.sound-wave {
  position: absolute;
  z-index: 0;
  width: 90%;
  height: 100px;
  border: 1px solid rgba(243, 154, 74, 0.45);
  border-radius: 50%;
  transform: rotate(-14deg);
}

.wave-two {
  width: 78%;
  transform: rotate(12deg);
}

.music-note {
  position: absolute;
  z-index: 1;
  color: var(--color-orange-dark);
  font-family: Georgia, serif;
  font-size: 2.8rem;
}

.note-one {
  top: 11%;
  left: 14%;
  transform: rotate(-14deg);
}

.note-two {
  top: 24%;
  right: 10%;
  font-size: 2rem;
  transform: rotate(12deg);
}

.stage {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: min(82%, 380px);
  height: 300px;
  align-self: end;
  border-radius: 190px 190px 18px 18px;
  background: linear-gradient(160deg, #1d3b61 0%, #11284a 70%);
  box-shadow: 0 25px 60px rgba(17, 40, 74, 0.22);
}

.stage::before {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 35%, rgba(243, 154, 74, 0.3), transparent 49%);
  content: '';
}

.stage-light {
  position: absolute;
  top: -8px;
  width: 130px;
  height: 250px;
  opacity: 0.7;
  filter: blur(4px);
}

.light-left {
  left: 20px;
  background: linear-gradient(180deg, rgba(243, 154, 74, 0.5), transparent);
  transform: rotate(16deg);
}

.light-right {
  right: 16px;
  background: linear-gradient(180deg, rgba(108, 160, 186, 0.4), transparent);
  transform: rotate(-16deg);
}

.stage-person {
  position: absolute;
  z-index: 1;
  bottom: 31px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.person-left {
  left: 14%;
  transform: rotate(-5deg);
}

.person-center {
  left: 41%;
  bottom: 36px;
}

.person-right {
  right: 13%;
  transform: rotate(5deg);
}

.head {
  z-index: 2;
  width: 36px;
  height: 39px;
  border-radius: 48% 48% 44% 44%;
  background: #c9865b;
}

.person-center .head {
  width: 40px;
  height: 44px;
  background: #e2a170;
}

.body {
  width: 62px;
  height: 112px;
  margin-top: -2px;
  border-radius: 27px 27px 4px 4px;
  background: #e8dfd0;
}

.person-left .body {
  background: #d66e52;
}

.person-right .body {
  background: #668e8c;
}

.person-center .body {
  width: 71px;
  height: 127px;
  background: var(--color-orange);
}

.instrument {
  position: absolute;
  z-index: 3;
  top: 66px;
  left: 40px;
}

.guitar {
  width: 78px;
  height: 14px;
  border-radius: 50%;
  background: #e2b16e;
  transform: rotate(-25deg);
}

.guitar::after {
  position: absolute;
  top: -10px;
  left: 30px;
  width: 20px;
  height: 28px;
  border-radius: 50%;
  background: #a56a40;
  content: '';
}

.mic {
  top: 38px;
  left: 52px;
  width: 3px;
  height: 89px;
  background: #d8d1c7;
  transform: rotate(6deg);
}

.mic::before {
  position: absolute;
  top: -14px;
  left: -5px;
  width: 12px;
  height: 18px;
  border-radius: 8px;
  background: #d8d1c7;
  content: '';
}

.trumpet {
  top: 54px;
  left: 1px;
  width: 70px;
  height: 10px;
  border-radius: 10px;
  background: #e6b757;
  transform: rotate(-12deg);
}

.trumpet::after {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 17px;
  height: 26px;
  border: 4px solid #e6b757;
  border-left: 0;
  border-radius: 0 100% 100% 0;
  content: '';
}

.stage-floor {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  height: 31px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  background: #0b1c35;
}

.floating-card {
  position: absolute;
  z-index: 2;
  right: -1%;
  bottom: 9%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(17, 40, 74, 0.06);
  border-radius: 12px;
  background: white;
  box-shadow: 0 12px 35px rgba(17, 40, 74, 0.12);
}

.online-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #65a184;
  box-shadow: 0 0 0 4px #e7f2eb;
}

.floating-card div {
  display: grid;
  gap: 0.2rem;
}

.floating-card strong {
  color: var(--color-blue);
  font-size: 0.72rem;
}

.floating-card small {
  color: #8090a0;
  font-size: 0.61rem;
}

.card-note {
  color: var(--color-orange-dark);
  font-size: 1.3rem;
}

.art-caption {
  position: absolute;
  top: 23%;
  left: 6%;
  color: #9b8e7e;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  transform: rotate(-90deg);
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.1rem 0;
  border-top: 1px solid rgba(17, 40, 74, 0.11);
  color: #87909a;
  font-size: 0.69rem;
}

.hero-bottom b {
  margin-left: 0.5rem;
  color: var(--color-orange-dark);
}

.intro-section {
  padding: 6.2rem 5.5% 6.7rem;
  background: var(--color-white);
}

.section-heading {
  max-width: 630px;
  margin: 0 auto 3.2rem;
  text-align: center;
}

.section-heading .eyebrow {
  justify-content: center;
}

h2 {
  margin-bottom: 1rem;
  color: var(--color-blue);
  font-size: clamp(2.1rem, 4vw, 3.25rem);
  font-weight: 750;
  letter-spacing: -0.07em;
  line-height: 1.12;
}

.section-heading > p:last-child {
  max-width: 510px;
  margin: 0 auto;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;
  max-width: 1120px;
  margin: 0 auto;
}

.benefit-card {
  min-height: 260px;
  padding: 1.5rem 1.55rem 1.4rem;
  border: 1px solid #e9edf0;
  border-radius: 14px;
  background: white;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(17, 40, 74, 0.08);
}

.benefit-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.35rem;
}

.benefit-number {
  color: #a8b0b8;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.benefit-icon {
  display: grid;
  width: 39px;
  height: 39px;
  place-items: center;
  border-radius: 12px;
  background: #eff3f7;
  color: var(--color-blue);
  font-size: 1.5rem;
}

.benefit-icon.orange {
  background: #fff1e3;
  color: var(--color-orange-dark);
}

.benefit-card h3 {
  margin-bottom: 0.55rem;
  color: var(--color-blue);
  font-size: 1.2rem;
  font-weight: 750;
  letter-spacing: -0.04em;
}

.benefit-card p {
  min-height: 66px;
  margin-bottom: 1.15rem;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.7;
}

.benefit-card a {
  color: var(--color-blue);
  font-size: 0.78rem;
  font-weight: 750;
}

.benefit-card a span {
  margin-left: 0.4rem;
  color: var(--color-orange-dark);
}

.slogan-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 5.5% 5rem;
  padding: 1.55rem 1.5rem;
  border-radius: 14px;
  background: var(--color-blue);
  color: var(--color-white);
}

.slogan-banner p {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.05rem, 2.4vw, 1.5rem);
  font-style: italic;
}

.slogan-banner > a {
  display: grid;
  width: 35px;
  height: 35px;
  margin-left: 0.5rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-orange);
  color: var(--color-blue);
  font-weight: 800;
}

.banner-note {
  color: var(--color-orange);
  font-size: 1.6rem;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr 0.85fr;
    gap: 1rem;
  }

  .hero-art {
    min-height: 390px;
  }

  .benefit-grid {
    gap: 0.8rem;
  }

  .benefit-card {
    padding: 1.25rem;
  }
}

@media (max-width: 700px) {
  .hero {
    padding: 2rem 5% 0;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1.2rem 0 1rem;
  }

  h1 {
    font-size: clamp(2.65rem, 11vw, 4rem);
  }

  .hero-art {
    min-height: 350px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  .stage {
    width: min(77%, 340px);
    height: 260px;
  }

  .floating-card {
    right: 1%;
    bottom: 7%;
  }

  .hero-bottom {
    gap: 1rem;
    font-size: 0.6rem;
  }

  .hero-bottom span:last-child {
    text-align: right;
  }

  .intro-section {
    padding: 4.4rem 5% 4.8rem;
  }

  .benefit-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  .benefit-card {
    min-height: unset;
  }

  .benefit-card p {
    min-height: unset;
  }

  .slogan-banner {
    margin: 0 5% 3rem;
    padding: 1.2rem 0.9rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
