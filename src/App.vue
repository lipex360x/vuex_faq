<template>
  <div class="container">
    <div class="card">
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in"
      >
        <component :is="$cardView" />
      </transition>
    </div>
  </div>
</template>

<script>
import CardMain from '@/components/CardMain.vue'
import CardAnswer from '@/components/CardAnswer.vue'
import CardFaq from '@/components/CardFaq.vue'
import 'animate.css'

export default {
  components: { CardMain, CardFaq, CardAnswer },
  created() {
    this.$store.dispatch('fetchQuestions')
  },
  computed: {
    $cardView() {
      return this.$store.getters.$cardView
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 305px;
  height: 457px;
  background: transparent
    linear-gradient(180deg, #404451 0%, var(--unnamed-color-26282c) 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(180deg, #404451 0%, #26282c 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #3f445266;
  border-radius: 15px;
  opacity: 1;
}
</style>
