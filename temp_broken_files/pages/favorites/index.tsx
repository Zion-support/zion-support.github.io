import EmptyState from '../../components/ui/EmptyState' export default function FavoritesPage () {
  const [favorites, setFavorites] = useState<string[]> ([]) useEffect ( () => {
  const raw = localStorage.getItem ('zion.favorites') setFavorites (raw ? JSON.parse (raw) : []) 
}, []) </ul> </div>) 
}