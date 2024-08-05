import React, {  useState } from 'react'
import { LuShoppingCart } from 'react-icons/lu';
import Order from './Order';

const showOrders =(props) =>
{
	let sum = 0;
	props.orders.forEach(element => {
		sum += Number.parseInt(element.price)
	});
	return(
	<div>
		{props.orders.map(el => (
			<Order onDelete = {props.onDelete} key={el.id} item={el} />
		))}
		<p className='summ'>
			Сумма товаров: {sum}$
		</p>
	</div>
	)
}
const showNothing = () =>
{
	return(
		<div className='empty'>
			<h2>
				Товаров нет
			</h2>
		</div>
	)
}





export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false)

  return (
		<header>
			<div>
				<span className='logo'>Rem</span>
				<ul className='nav'>
					<li>Про нас</li>
					<li>Контакты</li>
					<li>Наши работы</li>
				</ul>
				<LuShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
				
					<div className={`shop-cart ${cartOpen && 'active'}`} >
						{props.orders.length > 0 ?
						showOrders(props) : showNothing()}
					</div>
				
			</div>
			<div className='presentation'></div>
		</header>
	)
}
