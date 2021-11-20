<template>
  <div>
    <a href="#" @click="setCard()">sdf</a>
    <h1>CardFaq</h1>
    <ul>
      <li v-for="faq in faqs" :key="faq.id">
        {{ faq.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: []
    }
  },
  mounted() {
    this.faqs = this.$store.getters.$getQuestionsCategory
  },
  methods: {
    setCard() {
      this.$store.dispatch('setCard', 'CardMain')
    }
  }
}
</script>

<style lang="scss" scoped></style>
