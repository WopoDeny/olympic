<template>
  <div class="Congrats-page">
    <header-vue/>

    <div class="greeting-page-container">
      <h1 class="greeting-page-title">Добро пожаловать!</h1>
      <p>На сайт онлайн-олимпиады для школьников 10 - 11 классов <b>«Современные информационные
        технологии»</b>!
      </p>
      <p>Олимпиада проводится <b>Военно-космической академией имени Александра Федоровича Можайского</b> –
        крупнейшим политехническим вузом Министерства обороны Российской Федерации.</p>
      <a target="_blank" class="greeting-page-tg-link" href="https://t.me/vka62kaf_education">Наш Telegram-канал</a>

      <h2 class="greeting-page-title">Основными целями Олимпиады являются:</h2>
      <ul>
        <li>поиск и поддержка одаренных детей и талантливой молодежи во всех регионах Российской Федерации;</li>
        <li>стимулирование интереса детей и молодежи к инновационной деятельности в области высоких технологий, обеспечение равного доступа учеников к освоению передовых научных методов исследования;</li>
        <li>участие детей в научно-техническом творчестве, проведение ранней профессиональной ориентации молодежи;</li>
        <li>повышение образовательного уровня и отбор лучших участников в качестве абитуриентов Военно-космической академии имени А.Ф.Можайского.</li>
      </ul>

      <h2 class="greeting-page-title">Возможности, дающие участие в Олимпиаде:</h2>
      <ol>
        <li>Для победителей и призеров Олимпиады - получение льгот при поступлении в нашу Академию.</li>
        <li>Для наставников/тренеров – участие в мероприятии национального уровня, позволяющее увеличить аттестационные показатели педагогических работников.</li>
        <li>Для школ – повышение рейтинга образовательной организации.</li>
      </ol>

      <h4 class="greeting-page-title">
        Олимпиада проводится при поддержке
      </h4>
      <ol>
        <li><a class="sponsor11-link11" target="_blank" href="https://www.78isb.ru/">ООО «Инновационные системы безопасности»</a></li>
        <li>
          <a class="sponsor11-link11" target="_blank" href="https://www.78isb.ru/">Центр защиты информации ГК «Конфидент»</a><br>
          <img class="sponsor-img" src="../assets/images/sponsor-2.png" alt="Центр защиты информации ГК «Конфидент»" />
          <p class="sponsor-desc">Российский разработчик линейки средств защиты информации.
            Решения компании применяются для защиты конфиденциальной информации, в том числе содержащейся в ГИС, ИСПДн и АСУ ТП, значимых объектах КИИ и сведений, составляющих гостайну до уровня «совершенно секретно».
            Предназначены для разграничения, защиты и контроля доступа, межсетевого экранирования, доверенной загрузки, предотвращения вторжений и защиты виртуальных сред.
            Сертифицированы ФСТЭК России и Минобороны России.</p>
        </li>
      </ol>

      <p class="greeting-page-title">
        Регистрация участников доступна до: <b>23:59 09 февраля 2024 года</b>
      </p>
      <p class="greeting-page-title">
        Даты проведения олимпиады: <b>10–11 февраля 2024 года</b>
      </p>
    </div>
  </div>
</template>

<script>
import headerVue from "@/components/header";
export default {
  name: 'CongratsPage',
  components: {
    headerVue
  }
}
</script>

<style scoped>
a.sponsor11-link11:link,
a.sponsor11-link11:visited {
  display: inline !important;
  text-decoration: none;
  color: black;
  transition: 100ms;
}

.sponsor-img {
  width: 400px;
  margin-top: 15px;
  margin-left: 30px;
}

.sponsor-desc {
  font-size: 18px;
}

a.sponsor11-link11:hover {
  color: #545b87;
}

p {
  font-size: 22px;
  text-indent: 30px;
}

li {
  font-size: 22px;
  list-style: inside;
}

.greeting-page-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 130px 30px 30px 30px;
}

.greeting-page-tg-link:link,
.greeting-page-tg-link:visited {
  color: #e9ecff;
  font-weight: bold;
  text-decoration: none;
  font-size: 22px;
  transition: 200ms;
  padding: 5px 10px;
  background: linear-gradient(90deg, #0d27a7 0%, #22cbc9 100%);
  border-radius: 10px;
}

.greeting-page-tg-link:hover {
  background: linear-gradient(90deg, #0d27a7 0%, #22cbc9 100%);
  text-decoration: underline;
}

.greeting-page-title:not(:first-child) {
  margin-top: 24px;
}
</style>
