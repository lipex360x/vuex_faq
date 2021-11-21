import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    categories: [],
    card: {
      prevCard: null,
      prevItemId: null,
      currentCard: 'CardMain',
      currentItemId: null
    }
  },

  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    SET_CARD(state, card) {
      state.card = card
    }
  },

  actions: {
    fetchCategories(context) {
      context.commit('SET_CATEGORIES', faqCategories)
    },

    getFaqsCard(context, params) {
      const request = {
        prevCard: 'CardMain',
        prevItemId: params.prevItemId | null,
        currentCard: params.nextCard,
        currentItemId: params.nextItemId
      }

      context.commit('SET_CARD', request)
    },

    getAnswer(context, params) {
      const request = {
        prevCard: 'CardFaq',
        prevItemId: params.categoryId,
        currentCard: 'CardAnswer',
        currentItemId: params
      }
      context.commit('SET_CARD', request)
    },

    backFaq(context) {
      const request = {
        prevCard: 'CardMain',
        prevItemId: null,
        currentCard: 'CardFaq',
        currentItemId: this.getters.$cardView.currentItemId.categoryId
      }

      context.commit('SET_CARD', request)
    },

    backHome(context) {
      const request = {
        prevCard: null,
        prevItemId: null,
        currentCard: 'CardMain',
        currentItemId: null
      }
      context.commit('SET_CARD', request)
    }
  },

  getters: {
    $cardView(state) {
      return state.card
    },
    $getCategories(state) {
      return state.categories
    },
    $getFaqs(state) {
      const currentItemId = state.card.currentItemId
      const faqs = state.categories.find(
        (category) => category.id === currentItemId
      )
      return faqs
    },
    $getAnswers(state) {
      const { categoryId, faqId } = state.card.currentItemId
      const getFaqs = state.categories.find(
        (category) => category.id === categoryId
      )
      const getFaq = getFaqs.questions.find((faq) => faq.id === faqId)
      console.log(getFaq)
      return getFaq
    }
  }
})
