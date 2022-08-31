import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isOk: true,
  }),
  getters: {
    getIsOk(): boolean {
      return this.isOk
    },
  },
  actions: {
    setIsOk(isOk: boolean) {
      this.isOk = isOk
    },
  },
})
