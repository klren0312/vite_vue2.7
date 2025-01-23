import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    isOk: true,
    testNum: 1,
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

export default useAppStore
