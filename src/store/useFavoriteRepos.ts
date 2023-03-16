import { create } from "zustand";
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

export type FavoriteRepoStore = {
  favoriteRepoIds: number[]
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
}

export const useFavoriteRepoStore = create(persist<FavoriteRepoStore>((set) => ({
  favoriteRepoIds: [],
  addToFavorites: (repoId: number) => {
    set((state) => ({
      favoriteRepoIds: [...state.favoriteRepoIds, repoId]
    }))
  },
  removeFromFavorites: (repoId: number) => {
    set((state) => ({
      favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId)
    }))
  }
}),
  {
    name: 'favoriteRepos-storage',
    storage: createJSONStorage(() => localStorage),
  }))


// const usePlainStore = create(devtools(useFavoriteRepoStore))

// export const useFavoriteRepoStore = create<FavoriteRepoStore>(
//   (set) => ({
//     favoriteRepoIds: [],
//     addToFavorites: (repoId: number) => {
//       set((state) => ({
//         favoriteRepoIds: [...state.favoriteRepoIds, repoId]
//       }))
//     },
//     removeFromFavorites: (repoId: number) => {
//       set((state) => ({
//         favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId)
//       }))
//     }
//   }))
