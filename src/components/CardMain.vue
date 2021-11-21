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
        v-for="category in $getCategories"
        :key="category.id"
        @click="getQuestions(category.id)"
      >
        <img :src="require(`@/assets/images/${category.icon}`)" />
        {{ category.title }}
      </li>
    </main>
  </section>
</template>

<script>
export default {
  computed: {
    $getCategories() {
      return this.$store.getters.$getCategories
    }
  },

  methods: {
    setCategory(id) {
      this.$store.dispatch('fetchQuestionByCategory', id)
    },

    getQuestions(categoryId) {
      const params = {
        nextCard: 'CardFaq',
        nextItemId: categoryId
      }
      this.$store.dispatch('getFaqsCard', params)
    }
  }
}
</script>

<style scoped>
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
  margin-bottom: 5px;
}
header div p {
  font-size: 16px;
}

main {
  width: 100%;
  padding: 0 6px;
}

main li {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  align-items: center;

  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
}

main li:hover {
  background: #3f4452;
}

main li img {
  width: 24px;
}
</style>
