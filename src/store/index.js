import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    card: 'CardMain',
    questions: [],
    questionCategory: []
  },

  mutations: {
    SET_QUESTIONS(state, questions) {
      state.questions = questions
    },

    SET_QUESTIONS_CATEGORY(state, id) {
      state.questionCategory = []
      const questionIndex = state.questions.findIndex(
        (question) => question.id === id
      )
      const { questions } = state.questions[questionIndex]
      state.questionCategory = questions
    },

    SET_CARD_VIEW(state, card) {
      state.card = card
    }
  },

  actions: {
    fetchQuestions(context) {
      context.commit('SET_QUESTIONS', faqCategories)
    },
    fetchQuestionByCategory(context, id) {
      context.commit('SET_QUESTIONS_CATEGORY', id)
    },
    setCard(context, card) {
      context.commit('SET_CARD_VIEW', card)
    }
  },

  getters: {
    $cardView(state) {
      return state.card
    },
    $getQuestions(state) {
      return state.questions
    },
    $getQuestionsCategory(state) {
      console.log(state.questionCategory)
      return state.questionCategory
    }
  }
})
