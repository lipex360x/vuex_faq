<template>
  <section>
    <header>
      <img src="@/assets/images/astronaut.svg" alt="astronaut" />

      <div>
        <h1>Perguntas Frenquentes</h1>
        <p>Escolha a categoria desejada</p>
      </div>
    </header>

    <main>
      <li
        v-for="category in categories"
        :key="category.id"
        @click="setCategory(category.id), setCard()"
      >
        <img :src="require(`@/assets/images/${category.icon}`)" />
        {{ category.title }}
      </li>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    }
  },
  created() {
    this.categories = this.$store.getters.$getQuestions
  },
  methods: {
    setCategory(id) {
      this.$store.dispatch('fetchQuestionByCategory', id)
    },

    setCard() {
      this.$store.dispatch('setCard', 'CardFaq')
    }
  }
}
</script>

<style scoped>
section {
  color: #f5f6f8;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-top: 20px;
}

header img {
  width: 80%;
}
header div {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 36px;
}

header div h1 {
  font: normal normal bold 20px Lato;
  margin-bottom: 5px;
}
header div p {
  font: normal normal normal 16px Lato;
}

main {
  width: 100%;
  padding: 0 6px;
}

main li {
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  align-items: center;

  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2px;
  transition: background-color 0.3s ease-in-out;
}

main li:hover {
  background: #3f4452b3 0% 0% no-repeat padding-box;
}

main li img {
  width: 24px;
}
</style>
