import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    userId: null,
    token: '',
    language: 1,
    languageOption: [],
  }),
  actions: {
    setUserId(userId) {
      this.userId = userId;
    },
    setToken(token) {
      this.token = token;
    },
    setLanguage(language) {
      this.language = language;
    },
    setLanguageOption(languageOption) {
      this.languageOption = languageOption;
    },
    clearAuth() {
      this.user = null
      this.token = ''
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'store',
        storage: localStorage,
      }
    ]
  }
})