import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    userId: null,
    token: '',
  }),
  actions: {
    setUserId(userId) {
      this.userId = userId;
    },
    setToken(token) {
      this.token = token;
    },
    clearAuth() {
      this.user = null
      this.token = ''
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})