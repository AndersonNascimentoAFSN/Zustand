import { memo } from 'react';
import { Repo } from '../../queries/repo/types';

import styles from './styles.module.css';

interface CardProps {
  repo: Repo
  onAddToFavorite: (repoId: number) => void
  onRemoveFromFavorite: (repoId: number) => void
  isFavorite: boolean
}

export const Card = memo(function Card({ repo, onAddToFavorite, onRemoveFromFavorite, isFavorite }: CardProps) {
  function handleToggleFavorite() {
    if (isFavorite) {
      onRemoveFromFavorite(repo.id)
    } else {
      onAddToFavorite(repo.id)
    }
  }

  return (
    <div className={styles.card}>
      <h2>{repo.name}</h2>

      <div className={styles['card-buttons']}>
        <button onClick={handleToggleFavorite}>
          {isFavorite ? 'Desfavoritar' : 'Favoritar'}
        </button>
      </div>
    </div>
  )
})

