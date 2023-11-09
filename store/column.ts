import { defineStore } from 'pinia'
import { IColumn } from '~/interfaces/column.interface'

export const useColumnStore = defineStore('column', {
  state: () => ({ columns: [] as IColumn[] }),

  actions: {
    async getColumn() {
      const { $api } = useNuxtApp()

      try {
        const columns = await $api.column.get()

        if (columns) this.columns = columns
      } catch (error) {
        console.log(error)
      }
    },
  },

  persist: true,
})
