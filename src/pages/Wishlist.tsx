
export default function WishlistPage() {
  const { favorites, loading, toggleFavorite } = useFavorites($2);
  const { user, isLoading: isAuthLoading} = useAuth(), // Added isAuthLoading
  const router = useRouter(), // Changed from navigate

