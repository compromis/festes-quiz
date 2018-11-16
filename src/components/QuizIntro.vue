<template>
  <section class="intro">
    <div class="container">
      <p><span class="intro-flair">QUIZ</span></p>
      <h1 class="intro-heading"><span style="white-space: nowrap">FESTES VLC</span> FACTS 🎉</h1>
      <h2 class="intro-subheading"><em>Troletes</em> o realitat?</h2>
      <p class="intro-description">Tens clara la gestió de la Regidoria de Cultura Festiva de l'Ajuntament de València o t'has deixat emportar per la voràgine de notícies absurdes sobre diverses qüestions? Possa't a prova i comprova tot el que s'ha gestionat en la darrera legislatura.</p>
      <p class="intro-action"><a href="#q1" v-scroll-to="'#q1'"><span class="emoji">📝</span> Comença</a></p>
    </div>
  </section>
</template>

<script>
import Newspaper from '../assets/newspaper.svg'
import True from '../assets/true.svg'
import False from '../assets/false.svg'

export default {
  name: 'quiz-intro',

  components: {
    True,
    False
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.intro {
  padding: 2.5rem 1.5rem;
  text-align: center;
  background: $background;
  background: linear-gradient(rgba($background, .75) 0%, rgba($background, 0) 100%);;
}

.intro-heading {
  font-family: $font-intro;
  font-size: 17vw;
  position: relative;
  text-shadow: 10px 10px 0 $secondary-color;
  transform: skew(0deg, -10deg);
  line-height: 1;
  margin: 2rem auto 3rem auto;
  max-width: 600px;
}

.intro-subheading {
  line-height: 1;
  margin: 1rem 0;
  font-size: 1.75rem;
  letter-spacing: -1px;
  text-shadow: 0 0 10px $background;
}

.intro-flair {
  border: 1px $white solid;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  opacity: 0.75;
}

.intro-icons {
  max-width: 400px;
  margin: 0.5rem auto -2.5rem auto;

  .intro-icon-true svg {
    width: 53px;
  }

  .intro-icon-false svg {
    width: 50px;
  }

  svg {
    width: 100px;
  }
}

.intro-description {
  max-width: 700px;
  margin: 1rem auto;
  text-shadow: 0 0 10px $background;
  line-height: 1.25;
}

.intro .intro-note {
  font-size: 1rem;
  opacity: 0.5;
  strong {
    color: #fff;
  }
}

.intro-action {
  margin-top: 2rem;

  a {
    color: #fff;
    border: 2px #fff solid;
    border-radius: 30px;
    padding: 0.5rem 2rem;
    transition: 0.25s ease-in-out;

    &:hover {
      background: #fff;
      color: $background;
    }
  }

  .emoji {
    position: relative;
    top: 2px;
    margin-right: 0.5rem;
  }
}

@media (min-width: 769px) {
  .intro {
    padding: 3rem 0;

    &-heading {
      font-size: 7rem;
    }

    &-subheading {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}

@media (max-height: 700px) {
  .intro {
    padding-top: 2.5rem;

    &-icons {
      display: none;
    }
  }
}
</style>
