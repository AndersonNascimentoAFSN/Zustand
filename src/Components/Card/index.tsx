import { Repo } from '../../queries/repo/types';
import styles from './styles.module.css';

interface CardProps {
  repo: Repo
  onAddToFavorite: () => void
}

export function Card({ repo, onAddToFavorite }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{repo.name}</h2>

      <div className={styles['card-buttons']}>
        <button onClick={onAddToFavorite}>
          Favoritar
        </button>
      </div>
    </div>
  )
}

