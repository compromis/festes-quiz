<template>
  <section class="intro">
    <div class="container">
      <p><span class="intro-flair">QUIZ</span></p>
      <div class="columns intro-icons">
        <div class="column intro-icon-true is-hidden-mobile">
          <True />
        </div>
        <div class="column">
          <Newspaper />
        </div>
        <div class="column intro-icon-false is-hidden-mobile">
          <False />
        </div>
      </div>
      <h1 class="intro-heading">FAKE NEWS</h1>
      <span class="intro-subheading-edition">Edició</span>
      <h2 class="intro-subheading"><strong>Festes de València 🎉</strong></h2>
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
    Newspaper,
    True,
    False
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.intro {
  padding: 2.5rem;
  text-align: center;
  background: $background;
  background: linear-gradient(rgba($background, .75) 0%, rgba($background, 0) 100%);;
}

.intro-heading {
  font-family: $font-intro;
  font-size: 5rem;
  position: relative;
  text-shadow: 10px 10px 0 $secondary-color;
  transform: skew(0deg, -10deg);
  line-height: 1;
  margin: 2rem 0 3rem 0;
}

.intro-subheading {
  text-align: center;
  line-height: 1;
  margin-top: .75rem;
  margin-bottom: 3rem;

  strong {
    background: #fff;
    padding: .5rem .75rem;
    border-radius: .5rem;
    box-shadow: 0 0 20px rgba($background, .5);
    color: $secondary-color;
    white-space: nowrap;
    font-size: 1.75rem;
    letter-spacing: -1px;
  }

  &-edition {
    display: inline-block;
    background: $secondary-color;
    color: #fff;
    text-transform: uppercase;
    padding: .25rem 2rem;
    border-radius: .5rem .5rem 0 0;
    font-weight: bold;
  }
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
    padding: 3rem 5rem;

    &-heading {
      font-size: 7rem;
    }

    &-subheading {
      strong {
        font-size: 2.5rem;
      }
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
