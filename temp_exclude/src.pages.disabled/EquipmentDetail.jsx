
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/EquipmentDetail && EquipmentDetail.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/EquipmentDetail && EquipmentDetail.jsx import React from \'react\'; export default function EquipmentDetail () { const { equipmentId } = useParams () ; const navigate = useNavigate () ; const { isAuthenticated } = useAuth () ; const [selectedImageIndex,setSelectedImageIndex] = useState (0) ; const [quantity,setQuantity] = useState (1) ; const [isAdding,setIsAdding] = useState (false) ; import React from \'react\'; export default function EquipmentDetail () { const { equipmentId } = useParams () ; const navigate = useNavigate () ; const { isAuthenticated } = useAuth () ; const [selectedImageIndex,setSelectedImageIndex] = useState (0) ; const [quantity,setQuantity] = useState (1) ; const [isAdding,setIsAdding] = useState (false) \';\';
<<<<<<< "HEAD": src && src.pages.disabled/EquipmentDetail && EquipmentDetail.jsx import _React from 'react'; export default function EquipmentDetail () { const { equipmentId } = useParams () ; const navigate = useNavigate () ; const { isAuthenticated } = useAuth () ; const [selectedImageIndex,setSelectedImageIndex] = useState (0) ; const [quantity,setQuantity] = useState (1) ; const [isAdding,setIsAdding] = useState (false) ; import _React from 'react'; export default function EquipmentDetail () { const { equipmentId } = useParams () ; const navigate = useNavigate () ; const { isAuthenticated } = useAuth () ; const [selectedImageIndex,setSelectedImageIndex] = useState (0) ; const [quantity,setQuantity] = useState (1) ; const [isAdding,setIsAdding] = useState (false) ';';