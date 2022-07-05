import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isOk: true,
  }),
  getters: {
    getIsOk() {
      return this.isOk
    },
  },
  actions: {
    setIsOk(isOk) {
      this.isOk = isOk
    },
  },
})
