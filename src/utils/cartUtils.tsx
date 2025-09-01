export 
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent'}

  return items.reduce ( (total, item) => total + item.price * item.quantity, 0) };

  
  if (existingItem) {
    return cart.map (cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem) }

  return [...cart, item]};

  itemId: string) : CartItem[] => {
  return cart.filter (item => item.id !== itemId) };

  itemId: string,
  quantity: number) : CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart (cart, itemId) }

  return cart.map (item => (item.id === itemId ? { ...item, quantity } : item) ) };

  return []};

  return `cart_${userId}`};

  newItems: CartItem[]) : CartItem[] => {
  
  newItems.forEach (newItem => {
    
    if (existingIndex >= 0 && merged[existingIndex]) {
      merged[existingIndex].quantity += newItem.quantity} else {
      merged.push (newItem) }
  }) ;

  return merged};
