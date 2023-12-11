<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    .row.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        p Bienvenido al presente componente formativo, donde aprenderá a proponer y evaluar diferentes alternativas de innovación.
          br
          br
          |La metodología del componente es teórico-práctica, debido a que se contextualiza con definiciones y explicaciones de casos prácticos, a los cuales se les profundizará con videos multimedia, culminando con actividades prácticas para validar el conocimiento, como lo es un taller de relacionamiento de conceptos y una guía de aprendizaje. Antes de iniciar el estudio de este componente, lo invitamos a observar el siguiente video:
      .col-lg-2
        figure(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/introduccion/img01.svg')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HMBKXybTqpI?si=7BvxTqrBf8ni-JxJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. Proponer y evaluar alternativas de innovación



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
