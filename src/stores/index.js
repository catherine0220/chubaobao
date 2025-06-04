// src/stores/index.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    username: '宝宝',
  }),
})
