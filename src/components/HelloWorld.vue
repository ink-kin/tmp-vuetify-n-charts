<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <section>
        <v-parallax src="https://picsum.photos/1920/1080?random" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="@/assets/ilyaklishin_logo_wh.png" alt="ILyaKlishin" height="200">
            <h1 class="white--text mb-2 display-1 text-center">Время. Отношения. Выбор.</h1>
            <div class="subheading mb-4 text-center">Авторский проект моего сайта - это здоровый образ мышления и жизни.</div>
            <v-btn
              class="mt-12"
              color="gray lighten-2"
              dark
              large
              href="#"
            >
              Начать
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>
