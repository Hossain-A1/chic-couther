import { useCartContext } from "./hooks/useCartContext";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import AmountController from "./components/cart/AmountController";

const CartPage = () => {
  const { cart,haldleDecrement,haldleIncrement} = useCartContext();
  
  // let [amount, setAmount] = useState(1);
  
  // const haldleDecrement = () => {
  //   amount > 1
  //     ? setAmount((curAmount) => (curAmount = amount--))
  //     : setAmount(1);
  // };
  // const haldleIncrement = () => {
  //   amount < 1? setAmount((curAmount) => (curAmount = amount++))
  //     : setAmount(1);
  // };
  return (
    <div className='wrapper section-p'>
  
     <div className='cart-row flex justify-between items-center border-2 text-lg font-semibold '>
        <h2>Items</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
      </div>

      {cart.map((item) => (
        <div
          key={item.id}
          className='flex justify-between place-items-center border-t py-2'
        >
          <div className='h-16 w-16 flex '>
            <img
              src={item.image}
              alt={item.title}
              className='h-full w-full object-cover'
            />
            <p className='text-xs '>{item.title.substring(0, 25)}</p>
          </div>

          <span className="text-lg font-normal">{<CurrencyFormatter amount={item.price}/>}</span>

          <div className="flex justify-center gap-5">
<button className="text-lg font-semibold"><AiOutlineMinus onClick={()=>haldleIncrement()}/></button>
<span className="text-lg">{amount}</span>
<button className="text-xl font-semibold"><AiOutlinePlus onClick={()=>haldleDecrement()}/></button>
</div>

          <span className="text-lg font-semibold">{<CurrencyFormatter amount={item.price}/>}</span>
        </div>
      ))}
   
    </div>
  );
};

export default CartPage;
