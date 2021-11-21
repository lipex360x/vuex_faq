<template>
  <div>
    <section>
      <header>
        <div class="backIcon">
          <a href="#" @click="backHome()"
            ><img src="@/assets/images/arrow-left.svg"
          /></a>
        </div>

        <div>
          <h1>{{ $getFaqCategory.title }}</h1>
          <p>Selecione uma pergunta</p>
        </div>
        <div class="iconCategory">
          <img
            :src="require(`@/assets/images/${$getFaqCategory.icon}`)"
            alt=""
          />
        </div>
      </header>

      <main>
        <li
          v-for="faq in $getFaqs"
          :key="faq.id"
          @click="getAnswers($getFaqCategory.id, faq.id)"
        >
          {{ faq.title }}
        </li>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    $getFaqCategory() {
      return this.$store.getters.$getFaqs
    },
    $getFaqs() {
      return this.$store.getters.$getFaqs.questions
    }
  },
  methods: {
    backHome() {
      this.$store.dispatch('backHome')
    },

    getAnswers(categoryId, faqId) {
      const nextItemId = { categoryId, faqId }

      this.$store.dispatch('getAnswer', nextItemId)
    }
  }
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 30px 20px;
  height: 100px;
}
header .backIcon {
  display: flex;
  height: auto;
  align-items: center;
}
header p {
  margin-top: 0.4rem;
  font-size: 0.8rem;
}

header .iconCategory {
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin: 0 auto;
}

main {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  width: 100%;
  padding: 0 6px;
}

main li {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  align-items: center;

  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
}

main li:hover {
  background: #3f4452;
}
</style>
