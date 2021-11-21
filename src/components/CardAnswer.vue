<template>
  <section>
    <header>
      <div class="backIcon">
        <a href="#" @click="backFaq()"
          ><img src="@/assets/images/arrow-left.svg"
        /></a>
      </div>

      <div>
        <h1>{{ $getAnswers.title }}</h1>
      </div>
    </header>

    <main>
      <div v-html="$getAnswers.content"></div>
    </main>
  </section>
</template>

<script>
export default {
  computed: {
    $getAnswers() {
      return this.$store.getters.$getAnswers
    }
  },
  methods: {
    backFaq() {
      this.$store.dispatch('backFaq')
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

header h1 {
  font-size: 1.1rem;
}

main {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  width: 100%;
  padding: 10px 30px;
  font-size: 0.9rem;
}
</style>
