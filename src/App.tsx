import { useCallback } from "react"
import { Card } from "./Components/Card"
import { useFetchRepos } from "./queries/repo"
import { useFavoriteRepoStore } from "./store/useFavoriteRepos"

export function App() {
  const username = 'andersonnascimentoafsn'
  const { data } = useFetchRepos({ username })
  const favoriteRepoIds = useFavoriteRepoStore((state) => state.favoriteRepoIds)
  const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites)
  const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites)


  const handleAddToFavorite = useCallback((repoId: number) => {
    addToFavorites(repoId)
  }, [])

  const handleRemoveFromFavorite = useCallback((repoId: number) => {
    removeFromFavorites(repoId)
  }, [])


  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {data?.map((repo) => (
        <Card
          repo={repo}
          key={repo.id}
          onAddToFavorite={handleAddToFavorite}
          onRemoveFromFavorite={handleRemoveFromFavorite}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />
      ))}
    </div>
  )
}
