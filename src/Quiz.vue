<template>
  <div class="quizz-wrapper">
    <app-header />
    <quiz-intro />
    <true-false-quiz :questions="questions" :results="results" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import QuizIntro from './components/QuizIntro'
import TrueFalseQuiz from './components/TrueFalseQuiz'
import quiz from './data/quiz.json'

export default {
  name: 'quiz',

  components: {
    AppHeader,
    AppFooter,
    QuizIntro,
    TrueFalseQuiz
  },

  data () {
    return {
      questions: [],
      results: []
    }
  },

  mounted () {
    this.questions = quiz.questions
    this.results = quiz.results
  }
}
</script>

<style lang="scss">
@import 'variables';

html,
body {
  font-family: $font-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  font-size: 100%;
}

body {
  padding-top: 50px;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url(./assets/background.jpg);
    background-position: center;
    background-size: cover;
    background-color: $background;
  }
}

@font-face {
    font-family: 'Compromis';
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.eot?2');
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.woff?2') format('woff'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.ttf?2') format('truetype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.svg#AkkuratRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Compromis';
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.eot?2');
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.woff?2') format('woff'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.ttf?2') format('truetype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.svg#Akkurat-BoldRegular') format('svg');
    font-weight: bold;
    font-style: normal;
}
</style>
