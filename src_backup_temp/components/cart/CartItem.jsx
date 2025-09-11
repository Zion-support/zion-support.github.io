import {Button} from '@/components/ui/button';
export function CartItem("props": "any) {;
    return (<li className="flex items-center gap-4">;
      <img src={item.image || '/placeholder.svg'"} alt={item.name} className="w-16 h-16 object-cover rounded"  />;
      <div className="flex-1">;
        <p className="font-medium">{item.name}</p>;
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>;
      </div>;
      <input type="number" min={1} value={item.quantity} onChange={e => onUpdateQuantity?.(item.id, parseInt(e.target.value || '1',;
  10))} className="w-16 bg-transparent border border-input rounded p-1 text-center"/>;
      <span className="w-20 text-right">;
        ${(item.price * item.quantity).toFixed(2)}
      </span>;
      <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>;
        Remove;
      </Button>;
    </li>)}
;
export default CartItem;
import {Button} from &apos;@/components/ui/button&apos;; export function CartItem($1) { return (<liclassName=&quot;flex items-center gap-4&quot;> <img src={item.image || &apos;/placeholder.svg&apos;} alt={item.name} className=&quot;w-16 h-16 object-cover rounded&quot; /> <div className=&quot;flex-1&quot;> <p className=&quot;font-medium&quot;>{item.name}</p> <p className=&quot;text-sm text-muted-foreground&quot;>${item.price.toFixed(2)}</p> </div>&apos;; <input type=&quot;number&quot; min={1} value={item.quantity} onChange={e => onUpdateQuantity?.(item.id,parseInt(e.target.value || &apos;1&apos;,10))} className=&quot;w-16 bg-transparent border border-input rounded p-1 text-center&quot;/> <span className=&quot;w-20 text-right&quot;> ${(item.price * item.quantity).toFixed(2)} </span> <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={() => onRemove?.(item.id)}> Remove </Button> </li>)} export default CartItem;&apos;;&apos;;
const {Button} from "@/components/ui/button"; export function CartItem($1) { return (<liclassName="flex items-center gap-4"> <img src={item.image | "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded" /> <div className="flex-1"> <p className="font-medium">{item.name}</p> <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p> </div>"; <input type="number" min={1} value={item.quantity} onChange={e => onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))} className="w-16 bg-transparent border border-input rounded p-1 text-center"/> <span className="w-20 text-right"> ${(item.price * item.quantity).toFixed(2)} </span> <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}> Remove </Button> </li>)} export default CartItem;";";"""
import {Button} from '@/components/ui/button'; export function CartItem(_) { return (<liclassName="flex items-center gap-4"> <img src={item.image || '/placeholder.svg'} alt={item.name} className="w-16 h-16 object-cover rounded" /> <div className="flex-1"> <p className="font-medium">{item.name}</p> <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p> </div>'; <input type="number" min={1} value={item.quantity} onChange={e => onUpdateQuantity?.(item.id,parseInt(e.target.value || '1',10))} className="w-16 bg-transparent border border-input rounded p-1 text-center"/> <span className="w-20 text-right"> ${(item.price * item.quantity).toFixed(2)} </span> <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}> Remove </Button> </li>)} export default CartItem;';';