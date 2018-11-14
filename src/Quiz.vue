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
  background-image: url(https://www.ecestaticos.com/imagestatic/clipping/2ad/8ed/2ad8ed8889aec63d64985eb353edd897/horarios-de-las-fallas-mascletas-cremas-nit-del-foc-fuegos-artificiales-y-plantas.jpg?mtime=1488533599);
  background-color: $background;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-size: 100%;
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
