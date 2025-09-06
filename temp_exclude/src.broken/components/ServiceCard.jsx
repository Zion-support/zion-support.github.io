}
}

export default function ServiceCard ({
  service, onSelect 
}) {
  const navigate = useNavigate ();
const location = useLocation ();
const {
  user 
}= useAuth ();
const dispatch = useAppDispatch ();
const handleClick = () => {
  if (onSelect) {
  onSelect (service.id) 
}
};
const handleSave = (e) => {
  e.stopPropagation ();
toast.info ('Log in to save favorites');
navigate (`/login?next=$ {
  encodeURIComponent (location.pathname + location.search) 
}`);
return 
}> <Heart className="w-4 h-4" /> </button> </div>) 
}
