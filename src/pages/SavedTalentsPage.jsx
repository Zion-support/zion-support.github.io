<<<<<<< HEAD
import React from 'react'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents, setSavedTalents] = useState ([]) ; const [isLoading, setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) {''
=======
import React from 'react'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents, setSavedTalents] = useState ([]) ; const [isLoading, setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
