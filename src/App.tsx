import { Card } from "./Components/Card"
import { useFetchRepos } from "./queries/repo"

export function App() {
  const username = 'andersonnascimentoafsn'
  const { data } = useFetchRepos({ username })

  function handleAddToFavorite() {

  }

  return (
    <div style={{maxWidth: '600px', margin: '0 auto'}}>
      {data?.map((repo) => (
        <Card repo={repo} key={repo.id} onAddToFavorite={handleAddToFavorite}/>
      ))}
    </div>
  )
}
