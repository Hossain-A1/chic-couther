import { useCartContext } from "./hooks/useCartContext";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartPage = () => {
  const { cart, haldleDecrement, haldleIncrement ,amount} = useCartContext();
  console.log(cart);

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

          <span className='text-lg font-normal'>
            {<CurrencyFormatter amount={item.price} />}
          </span>

          <div className='flex justify-center gap-5'>
    <button className='text-lg font-semibold'>
      <AiOutlineMinus onClick={() => haldleIncrement(item.id)} />
    </button>
    <span className='text-lg'>{amount }</span>
    <button className='text-xl font-semibold'>
      <AiOutlinePlus onClick={() => haldleDecrement(item.id)} />
    </button>
    </div>
          <span className='text-lg font-semibold'>
            {<CurrencyFormatter amount={item.price} />}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
