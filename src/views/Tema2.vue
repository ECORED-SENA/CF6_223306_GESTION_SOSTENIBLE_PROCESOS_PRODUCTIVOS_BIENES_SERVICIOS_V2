<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Evaluar alternativas de innovación 

    .row.mb-5
      .col-lg-12
        figure(data-aos="fade-down")
          img.img-t(src='@/assets/curso/tema2/img01.png')
    .row.justify-content-center
      .col-lg-10
        .bg_20.p-4
          p.m-0 Para determinar la factibilidad del plan de trabajo que contiene el detalle de la implementación de las alternativas de innovación seleccionadas, es necesario realizar un proceso de evaluación, el cual equivale a calificar los costos e impactos del plan de innovación por medio de un sistema de medición, teniendo en cuenta los indicadores estratégicos en las empresas, siendo los más comunes los costos, los beneficios, la tasa de retorno de la inversión, entre otros que se presentan explicados en detalle a continuación:

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1 Sistemas de costos y beneficios  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
          p Los sistemas de costos son estructuras compuestas por métodos, normas y procedimientos que generan un análisis del proceso de producción de acuerdo con las actividades de la entidad, que permiten garantizar el control de los recursos materiales, laborales, financieros y de la producción en sí. 
          p Sus objetivos son establecer el precio del producto, reducir los costos del proceso de producción, medir y controlar los estados financieros, controlar las operaciones y mejorarlas y tomar decisiones frente a los procesos de producción. 
          p Existen diferentes sistemas de costeo para obtener el costo de un producto o servicio innovador, por lo que la entidad elige el que le proporcione la información que le permita elaborar estrategias para cumplir sus objetivos. Algunos de ellos son:
      .col-lg-4.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img02.png', alt='')

    .tarjeta.tarjeta--gris.p-4.mb-5.bg_21
      LineaTiempoC.color-acento-contenido(text-small)(data-aos="fade-right")
        .row.justify-content-lg-center.align-items-center(titulo="Sistemas según los elementos del costo")
          .col-lg-3.col-md-10.col-10.mb-4.mb-lg-0
            figure
              img.img-t.m-auto(src='@/assets/curso/tema2/img03.png', alt='Texto que describa la imagen')
          .col-lg-8.col-md-10.col-10
            p.text-bold Sistemas según los elementos del costo
            p En el cual para un producto o servicio se debe calcular el costo fijo de la operación y posteriormente se le adicionan los costos variables, siendo:
            ul.lista-ul
              li.d-flex 
                i.lista-ul__vineta
                p.mb-0 <b>Costos fijos:</b> son aquellos que se mantienen continuos, independientemente de si se utilizan o no. Algunos ejemplos son el arriendo de un lugar, el sueldo de una persona. 
              li.d-flex 
                i.lista-ul__vineta
                p.mb-0 <b>Costos variables:</b> son aquellos valores económicos que cambian dependiendo del uso para la producción de un bien o servicio. Algunos ejemplos son las materias primas utilizadas para la elaboración de un producto innovador, las comisiones generadas por las ventas de una innovación comercial, entre otros.
            
        .row.justify-content-lg-center(titulo="Costos según la forma de concentración")
          .col-lg-3.col-md-10.col-10.mb-4.mb-lg-0
            figure
              img.img-t.m-auto(src='@/assets/curso/tema2/img04.png', alt='Texto que describa la imagen')
          .col-lg-8.col-md-10.col-10
            p.text-bold Costos según la forma de concentración 
            p Para lo cual se deben realizar el cálculo financiero de las variables y posteriormente se asocia a una orden de producción u orden de proceso, siendo:
            ul.lista-ul
              li.d-flex 
                i.lista-ul__vineta
                p.m-0 <b>Costos por órdenes:</b> se calculan los valores del costo para una determinada orden de producción, a la cual se le asocian todos los costos y gastos. Ejemplo: para determinar el costo, se tomarán los valores del lote de un pedido de 100 celulares, por medio de la sumatoria de todos los costos y gastos del proceso productivo del lote.
              li.d-flex 
                i.lista-ul__vineta
                p.m-0 <b>Costos por proceso:</b> se emplea cuando los costos se agrupan por un proceso específico, debido a que la fabricación de bienes o servicios es cambiante. Ejemplo: el costeo para la producción de una bebida, se costea todo el proceso y posteriormente se divide de forma general, en toda la cantidad de productos generados.         

        .row.justify-content-lg-center(titulo="Sistemas de costos según el momento de obtención")
          .col-lg-3.col-md-10.col-10.mb-4.mb-lg-0
            figure
              img.img-t.m-auto(src='@/assets/curso/tema2/img05.png', alt='Texto que describa la imagen')
          .col-lg-8.col-md-10.col-10
            p.text-bold Sistemas de costos según el momento de obtención
            p Su unidad de medida es el tiempo, con el cual se estima el valor individual, siendo: 
            ul.lista-ul
              li.d-flex 
                i.lista-ul__vineta
                p.m-0 <b>Sistemas de costos históricos o resultantes:</b> son aquellos que son consumidos para luego establecer el costo dependiendo qué insumos fueron utilizados en el periodo definido. Ejemplo, durante un mes se cultivó y se recogió una cosecha de fruta, es por ello que el cálculo será sumar todos los costos y gasto del mes, para ser divididos por los productos cosechados.
              li.d-flex 
                i.lista-ul__vineta
                p.m-0 <b>Sistemas de costos predeterminados:</b> en este sistema los costos se determinan según los consumos estimados. Estos costos se establecen antes de la producción, basada en futuros, tomando como base las cantidades a producir de acuerdo con el mercado. 
              li.d-flex 
                i.lista-ul__vineta
                p.m-0 <b>Costos estándar:</b> se guían por las experiencias, para perseguir un objetivo y establecer los precios en las ventas.

    p.mb-5 Las empresas seleccionan el sistema de costos de acuerdo a la entidad y el tipo de innovación a aplicar, para lo cual se deberá analizar el tamaño de la producción, el personal, la infraestructura y recursos. Con estos datos se realiza el análisis que permita el control de los costos históricos, con los cuales se elaboran proyecciones para controlar en cada proceso los costos de producción que contribuyen en la implementación de un plan estratégico. El sistema de costos buscará:

    .row.justify-content-center.mb-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          ul.lista-ul--color.lista-ol--separador
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Obtener costos reales.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Resumen de gastos por área.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Costo de productos o servicios prestados.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Análisis de pérdidas en los costos.    
        .col-lg-5(data-aos="fade-left")
          img.img-t.m-auto(src="@/assets/curso/tema2/img06.png")

    .row.justify-content-center.mb-5
      .col-lg-8    
        p.mb-4 Las principales ventajas de realizar un cálculo de costos, en un proceso de invocación varían según el tipo de la empresa y el tipo de innovación que se esté realizando. Siendo las ventajas más comunes: 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c1.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Una alta coherencia entre la innovación deseada y el costo del producto.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c2.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Puntos de referencia para que las empresas puedan evaluar su desempeño.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c3.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Registro de actividades.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c4.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Probabilidad para lograr el financiamiento.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c5.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Se obtiene precisión sobre los precios individuales de los productos y servicios.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c6.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Una productividad mayor, gracias a que elimina los productos no rentables y las actividades que no agregan valor al proyecto.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c7.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Información anticipada y productiva.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/c8.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            p.mb-0 Facilita la formulación de los presupuestos.

    p.mb-5(data-aos='fade-right') Para ampliar la información, lo invitamos a ver el video Costeo e indicadores en la negociación verde: costos y presupuestos, el cual se encuentra en el material complementario.

    p.mb-5 El análisis costo beneficio, es el proceso de comparar costos, oportunidades y beneficios relacionados con las decisiones del proyecto de innovación, con el fin de determinar si tiene una salida comercial. Mediante este proceso se construyen los beneficios y costos asociados al proyecto. Para después obtener resultados que demuestren la viabilidad de las decisiones, las principales variables que logran determinar el valor del costo-beneficio son:

    .row.mb-4
      .col-lg-4(data-aos="fade-right")
        ul.lista-ul--color.lista-ol--separador
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Costos de producción.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Suministros.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Salarios.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Impuestos.
      .col-lg-4(data-aos="fade-right")
        ul.lista-ul--color.lista-ol--separador
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Volumen de ventas.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Nivel de producción óptimo.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Coste de financiación.
          li 
      .col-lg-4(data-aos="fade-left")
        img.img-t.m-auto(src="@/assets/curso/tema2/img08.png")

    p.mb-5 Adicionalmente, el análisis de costo beneficio sirve para emprender o lanzar nuevos productos, ya que tiene una amplia visión para realizar inversiones y comprobar que los beneficios son los esperados. Gracias a esto se puede saber qué tan rentable es un proyecto. Para esto se debe tener en cuenta:  
        
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10            
              p.text-center Identificación de los costos y beneficios relevantes en la implementación de la innovación. 

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Medición de los costos y de los beneficios del proyecto.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Comparación de los flujos de costos y beneficios procedentes durante el periodo de vida del proyecto.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10            
              p.text-center Selección del proyecto innovación más adecuado de las propuestas y alternativas posibles. 

    p.mb-5 Para este tipo de análisis de costos beneficio no existe un formato estándar para realizar el cálculo, ya que las estructuras varían dependiendo la situación, la industria, el tipo de innovación deseada y el beneficio esperado, el cual puede estar representado en utilidades económicas, posicionamiento del mercado, desarrollo de nuevos productos, entre otros. Sin embargo, se sugiere que el análisis del costo beneficio para proyectos de innovación incluya los siguientes elementos: 

        
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10            
              p.text-center Establecer áreas y actividades para delinear los parámetros del análisis en los componentes de innovación. 

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Identificar los costes y beneficios para que puedan ser categorizados por el tipo de innovación y el sistema de costeo.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Comparar los costes actuales o proyectados y los beneficios esperados u obtenidos, con el fin de analizar la viabilidad y continuidad en la propuesta de innovación.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Se recomienda realizar un análisis de sensibilidad para predecir los resultados y comprobar la precisión frente a un conjunto de variables.

    p.mb-5(data-aos='fade-right') Para ampliar la información, lo invitamos a ver el video Sistema de costeo, el cual se encuentra en el material complementario.

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2 Costo anual y tasa de retorno
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p El costo anual es un método para hallar el valor uniforme de un periodo de tiempo equivalente a las cifras presentes del flujo de fondos económicos. 
          p Es decir, corresponde a la anualidad de un conjunto de variables que suceden en distinto momento de tiempo, comúnmente se utiliza para decidir entre proyectos alternativos, con vidas útiles diferentes, en los cuales los ingresos no son relevantes para la toma de decisión, puesto que no son incrementales.  
          p Su método de cálculo se realiza a través de la conversión de todos los ingresos y egresos en un costo anual equivalente. 
          p Es por ello que, para calcular el costo anual equivalente, primero se debe actualizar los valores del flujo de caja, mediante la función de valor actual neto (VAN).
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img11.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .bg_15.p-4
          .row.justify-content-center
            .col-lg-4
              ul.lista-ul--color
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>CAE =</b> flujo de efectivo 
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>VAN =</b> valor actual neto
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>FVPA =</b> flujo neto al final del periodo
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>R =</b> tasa de descuento 
            .col-lg-6.align-self-center
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img12.png', alt='Fórmula para calcular el costo anual equivalente.')

    .row.justify-content-center
      .col-lg-12
        p.text-center Otro método para calcular el costo anual equivalente es: 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .bg_15.p-4
          .row.justify-content-center
            .col-lg-4
              ul.lista-ul--color
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>CAE =</b> flujo de efectivo 
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>VAN =</b> valor actual neto
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <em><b>i=</b></em> Tasa de interés 
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <em><b>n=</b></em> Número de periodos a evaluar 
            .col-lg-6.align-self-center
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img13.png', alt='Fórmula que presenta otro método para calcular el costo anual equivalente.')

    .row.justify-content-md-center.align-items-center
        .col-md-12.col-lg-5.mb-5(data-aos="fade-right")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema2/img14.svg', alt='')
        .col-md-10.col-lg-7(data-aos="fade-left")
          p.mb-5 Uno de los grandes beneficios de realizar un proceso de costeo anual radica en la posibilidad de comparar en la inversión que se debe realizar por cada año y compararla con los beneficios recibidos, algunas ventajas adicionales son:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Reconoce todos los flujos de fondos asociados al proyecto, sean positivos o negativos.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Reconoce el valor del dinero en el tiempo.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Es un indicador de selección para proyectos.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Forma criterios para determinar alternativas óptimas de inversión.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Determina el precio de los flujos de entrada y salida en la actualidad para comprobar entre sí y verificar cuál sería el rendimiento.           
            li

    p Posterior a realizar el plan de costos del año es necesario conocer cuál es la tasa de retorno (TIR), la cual es la medida que se utiliza en la evaluación de los proyectos de inversión, ya que permite comprobar la viabilidad identificando el tiempo y la rentabilidad obtenida, para posteriormente compararla con el interés de la inversión (i), generando los posibles escenarios para la toma de decisiones:  

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img15.svg', alt='Imagen que presenta la explicación cuando la TIR es igual, menor o mayor que el interés de la inversión.')

          .tarjeta.color3.p-3(x="17.4%" y="49%" numero="+")
            .h4.mb-2 La TIR = i
            p Significa que el proyecto es indiferente, es decir, que es igual la rentabilidad que se obtendría al invertir los recursos en otra actividad económica.
            

          .tarjeta.color3.p-3(x="51.7%" y="17%" numero="+")
            .h4.mb-2 La TIR > i
            p Quiere decir que el proyecto es viable económicamente, gracias a que la rentabilidad generada por el proyecto de innovación es mayor a la obtenida después de invertir los recursos a la tasa de interés. 

          .tarjeta.color3.p-3(x="82.2%" y="48.5%" numero="+")
            .h4.mb-2 La TIR < i
            p Quiere decir que no es viable económicamente, debido a que la rentabilidad del proyecto de innovación es menor a la inversión de recursos en la tasa de oportunidad del mercado. 

    p Los métodos consisten en calcular la tasa de rentabilidad propia de cada proyecto, es decir, que la tasa de interés que hace que el valor presente de los ingresos, sea igual al valor presente de los egresos. La fórmula de la TIR es:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg_15.p-4.px-5
          .row.justify-content-center
            .col-lg-7
              ul.lista-ul--color
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <em><b>I<sub>0</sub> =</b></em> Inversión inicial
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <em><b>C<sub>n</sub> =</b></em> Flujo de caja o de beneficios generados por la inversión en cada periodo
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>N =</b> Número total de periodos
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>N =</b> Año en el que se van obteniendo los beneficios de cada periodo
                li.d-flex 
                  i.fas.fa-check-circle
                  p.mb-0.m-0 <b>R =</b> TIR                
            .col-lg-4.align-self-center
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img16.png', alt='Fórmula para calcular la TIR.')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
          p Todos los proyectos implican inversión y recursos, así como oportunidades que pueden generar grandes resultados, por lo tanto, es necesario evaluarlo, para analizar si es factible y rentable. Es por esto que la Tasa Interna de Retorno es una de las mejores opciones para evaluar económicamente la innovación, gracias a que se basa en el flujo de caja de cada proyecto, con lo cual es posible una planificación financiera óptima debido a que mide la viabilidad del proyecto a ejecutar, evitando riesgos económicos que puedan presentarse. 

    
    .row.justify-content-md-center.align-items-center
      .col-md-12.col-lg-5.mb-5(data-aos="fade-right")
        figure
          img.img-t.mx-auto.mb-0.mb-lg-5(src='@/assets/curso/tema2/img16.svg', alt='')
      .col-md-10.col-lg-7(data-aos="fade-left")
        p.mb-5 Las principales ventajas de la tasa interna de retorno en una empresa que tiene procesos de innovación son:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Maximiza la rentabilidad de los negocios o proyectos que se quieren realizar. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Examina la inversión para verificar que tan rentable puede ser.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Su información está enfocada en los flujos de efectivo de los negocios.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Se ajusta con el valor real de la unidad monetaria.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Facilita la comparación de varios proyectos.
          li  
            .lista-ol--cuadro__vineta
              span 6
            | Genera cifras estratégicas para la toma de decisiones.        

    p.mb-5(data-aos='fade-right') Para ampliar el concepto de análisis de tasa de retorno, lo invitamos a ver el video Alternativas de inversión, el cual se encuentra en el material complementario.

    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.3 Indicadores de gestión
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Permiten revisar los resultados y la trazabilidad de las variables y metas proyectadas a cumplir con el proyecto de innovación, además de entender el nivel del objetivo propuesto desde el punto de vista de las políticas establecidas por las compañías. 
          p En ellos se reflejan las fortalezas, debilidades, oportunidades y amenazas.
          p Por eso, es importante clarificar y precisar las condiciones necesarias para construir aquello realmente útil, para medir el desempeño de la organización en sus diferentes áreas.
          p El objetivo de las empresas debe ser específico y estar definido, ser medible en la mayoría de los casos, lograrse de forma realista y adaptarse al entorno cambiante, ser relevante para la organización al estar alineado con la estrategia y la práctica o procesos que mide y su plazo para ser alcanzado debe ser claro. Los beneficios de contar con indicadores en procesos de innovación son:
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img18.png', alt='')

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-12 
        h4.text-center Beneficios de contar con indicadores en procesos de innovación

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10            
              p.text-center Previenen y detectan desviaciones del logro de los objetivos. 

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Genera alertas para evitar perder la dirección y que la organización continúe alineada al plan de innovación.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Produce información que analiza el desempeño de las áreas de modo que los objetivos se cumplan.

      .tarjeta-avatar.h_2
        img.img-t.mx-auto(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
        .tarjeta.color2
          .row.justify-content-center.p-4
            .col-lg-10            
              p.text-center Permite la evaluación del desempeño con respecto a las metas, objetivos y responsabilidades de cada miembro de la empresa.

    p.mb-4 Existen múltiples indicadores y formas de medición, las cuales varían de acuerdo al tipo de sector y proyecto de innovación; a continuación, se identifican los principales tipos de indicadores:

    SlyderA(tipo="b").color1.p-2.p-md-3.p-lg-4.mb-5 
      .row
        .col-lg-12.col-11(data-aos="fade-left")
          h4.my-4.ms-lg-5.ms-4 Indicadores de evaluación
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5 
              p Tiene que ver con las razones y métodos que ayudan a reconocer el rendimiento obtenido en una tarea o proceso, identificando las fortalezas, oportunidades y debilidades para mejorar. 
            .col-10.col-md-11.col-lg-6(data-aos="fade-right") 
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img20.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de eficacia
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p Está relacionado con la actitud y capacidad para hacer una tarea o trabajo con un mínimo de recursos disponibles.
            .col-10.col-md-11.col-lg-6
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema2/img21.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de cumplimiento
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p Están relacionados con el cumplimiento de las tareas, que indican el grado de consecución de tareas y trabajo. 
            .col-10.col-md-11.col-lg-6
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema2/img22.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de gestión
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p Tiene que ver con las razones que aprueban la administración de un proceso.
            .col-10.col-md-11.col-lg-6
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img23.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de gestión internos o externos
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p Los indicadores internos permiten identificar los procesos internos de las empresas, como por ejemplo, los ingresos, mientras que los externos miden el impacto de la empresa en el mercado, como por ejemplo, los porcentajes de clientes satisfechos con algún producto.
            .col-10.col-md-11.col-lg-6
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema2/img24.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de gestión cuantitativos o cualitativos
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p Los cuantitativos miden los procesos de producción y servicio que son expresados mediante números; por otro lado, los cualitativos miden las percepciones subjetivas del funcionamiento de la empresa.
            .col-10.col-md-11.col-lg-6
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema2/img25.png', alt='AvatarTop')

      .row
        .col-lg-12.col-11
          h4.my-4.ms-lg-5.ms-4 Indicadores de gestión para medir eficacia y eficiencia
          .row.justify-content-center
            .col-10.col-md-11.col-lg-5              
              p La eficacia mide el funcionamiento objetivo de la organización, como la cantidad de productos que se fabrican al mes, y la eficiencia, permite verificar todos los recursos con los que cuenta la empresa, para lograr resultados superiores a los que se planificaron inicialmente.
            .col-10.col-md-11.col-lg-6
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img26.png', alt='AvatarTop')

    .bg_17      
      .row.justify-content-center.mb-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src="@/assets/curso/tema2/img18.svg")
        .col-lg-5(data-aos="fade-left")
          p.mb-4.mb-lg-5.mb-xl-4.mb-xxl-5 El enfoque y el uso de los indicadores dependerá de las áreas de innovación a implementar en cada una de las empresas, obteniendo en su gran mayoría los siguientes beneficios: 
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Comunica las metas.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Identifica problemas y oportunidades.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Mejora el control de la empresa.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Identifica iniciativas y acciones.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Permite plantear objetivos y metas.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Define responsabilidades. 
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Facilita la delegación en las personas.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Crea ambientes de aprendizaje para la empresa.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Aumenta la motivación en los trabajadores.
            li.d-flex 
              i.fas.fa-check-circle
              p.mb-0 Analiza y mide el progreso del tiempo.

      p.mb-4 Ahora bien, después de conocer los beneficios que tiene los indicadores de innovación, es importante conocer la manera de interpretar los indicadores de gestión, y para esto, lo invitamos a ver el video Interpretación de indicadores de gestión (KPI), el cual se encuentra en el material complementario.

    

    Separador 

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.4 Herramientas de mejora, evaluación y seguimiento

    p.mb-5 Un proceso evaluativo consiste en la comparación de los impactos reales del proyecto con los estratégicos, y se enfoca hacia el qué y el cómo se han conseguido los resultados, mientras que el seguimiento permite el análisis y la recopilación de la información, teniendo en cuenta cómo avanza un proyecto de innovación. En ambos casos se busca lograr la meta de mejorar la efectividad, eficacia y organización con respecto a las actividades establecidas. Estos procesos de evaluación y seguimiento se pueden realizar de forma: 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bg_18.p-4
          .row.justify-content-center
            .col-auto
              img(src="@/assets/curso/tema2/img25.svg")
            .col-lg-10
              p.text-bold Cuantitativa
              p.m-0 Informa con cifras, se expresa en números o porcentajes de medición de los procesos de avance.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bg_19.p-4
          .row.justify-content-center.align-items-center
            .col-auto
              img(src="@/assets/curso/tema2/img26.svg")
            .col-lg-10
              p.text-bold Cualitativa
              p Indica los impactos en forma de percepción personal con respecto a un trabajo o situación y es obtenida por medio de preguntas, de la observación o la interpretación. 
              p.m-0 Para evaluar proyectos de innovación se sugiere establecer una escala de las percepciones con el fin de poder analizar los datos. 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10             
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img27.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen múltiples herramientas y metodologías para el seguimiento y evaluación, pero la más utilizada es el Diagrama de Gantt, debido a que es aplicable para la gestión de cualquier tipo de proyecto, tanto para la planeación como el seguimiento, y apoya la evaluación constante de la innovación por medio de gráficas de control, las cuales permiten evaluar lo proyectado con lo cumplido. La razón de su gran uso corresponde a su facilidad tanto en la diagramación de forma manual, como se realizaba desde los años 1910 por su creador Henry Gantt, hasta la implementación actual con diferentes software especializados que han adoptado su metodología.
          
    p.mb-5 Los elementos básicos que conforman un diagrama de Gantt son las actividades o tareas, los tiempos de cada actividad, las fechas de inicio y culminación, los responsables y los recursos a utilizar. Los principales beneficios de su implementación son:
              
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")        
        ul.lista-ul--color
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Planifica y realizar seguimientos de forma gráfica y analítica, a la ejecución de un proyecto de innovación.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Define cronograma y realiza seguimientos del proyecto, indicando quién y qué actividad se realizará, así como también cuándo se realizará y cuánto tiempo tardará.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Establece recursos, tanto en equipos, máquinas, materiales, como personal responsable.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Controla y mide progresos, con lo cual se valida el avance del proyecto y los niveles de utilización de los recursos.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Permite definir puntos críticos (hitos), restricciones y dependencia de las diferentes actividades del proyecto.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Visualiza fallos y problemas, por medio de la verificación entre lo planeado y lo ejecutado.
          li.d-flex 
            i.fas.fa-check-circle
            p.mb-0 Visualiza en barras de tiempo, el escenario proyectado y el cumplimiento real.

      .col-lg-6(data-aos="fade-left")
        figure
          img.img-t.m-auto(src="@/assets/curso/tema2/img28.png")

    p.mb-4 A continuación, se presenta un gráfico de Gantt con un ejemplo de planeación de innovación de un proceso de producción de bienes o servicios.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 2.
      span Ejemplo Diagrama Gantt
    figure(data-aos="fade-down-right")
      img.img-t.mx-auto(src='@/assets/curso/tema2/img29.svg', alt='AvatarTop') 

    p.my-5 La globalización con respecto a la innovación ha generado la necesidad de interconexión en la gestión, seguimiento y evaluación de todos los usuarios y ejecutores en los proyectos innovadores, razón por la cual en la actualidad se han desarrollado varios tipos de herramientas informáticas que permiten colaborar y realizar el seguimiento al desarrollo de las actividades desde múltiples lugares con múltiples usuarios y desde diferentes tipos de dispositivos, siendo las principales:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/tema1/img30.svg")
          .col-5.col-md-4.col-lg-3
            h4.m-0 Asana

    p(data-aos="fade-right") Es una de las herramientas más utilizadas, gracias a su atractivo diseño, interfaz, variedad y sencillez de funciones. Su interfaz es minimalista y da una buena opción para quienes son principiantes en el mundo del software para la gestión de proyectos. Lo invitamos a conocer más acerca de esta herramienta en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-ESSDbSw2_A?si=PRCCuY0VzoM3iWQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Asana

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/tema1/img30.svg")
          .col-5.col-md-4.col-lg-3
            h4.m-0 Trello

    p(data-aos="fade-right") Es una herramienta lúdica, que organiza la información de los proyectos, discusiones, entradas o chats mediante tarjetas para que después esta sea arrastrada y soltada en diferentes listas o páginas. Lo invitamos a conocer más acerca de esta herramienta en el siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/n5IOTafXlRg?si=xDy9eEof-6ED_DVn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trello 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
