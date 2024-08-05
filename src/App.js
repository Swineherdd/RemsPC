import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"
class App extends React.Component 
{
	constructor(props)
	{
		super(props)
		this.state = {
			orders:
			[

			],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'PC-RX-470',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu porttitor tortor, sit amet elementum sapien. ',
					img: 'pc-3090.jpg',
					category: 'PC',
					price: '100',
				},
				{
					id: 2,
					title: 'PC-RTX-1660',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu porttitor tortor, sit amet elementum sapien. ',
					img: 'pc-1660.jpg',
					category: 'PC-NORM',
					price: '250',
				},
				{
					id: 3,
					title: 'PC-RTX-3090',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu porttitor tortor, sit amet elementum sapien. ',
					img: 'pc-3090.jpg',
					category: 'PC-COOL',
					price: '400',
				},
				{
					id: 4,
					title: 'PC-RTX-4090',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu porttitor tortor, sit amet elementum sapien. ',
					img: 'pc-4090.jpg',
					category: 'PC-JEBAT',
					price: '900',
				},
			],
			showFullItem: false,
			fullItem: {},
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render()
{
  return (
		<div className='wrapper'>
			<Header orders={this.state.orders} onDelete={this.deleteOrder} />
			<Categories chooseCategory ={this.chooseCategory}/>
			<Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} onDelete={this.deleteOrder} />
			{this.state.showFullItem && <ShowFullItem item ={this.state.fullItem} onAdd={this.addToOrder} onDelete={this.deleteOrder} onShowItem = {this.onShowItem}/>}
			<Footer />
		</div>
	)
}

onShowItem(item)
{
	this.setState({fullItem: item})
	this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category)
{
	if (category === 'all') 
	{
		this.setState({currentItems: this.state.items})
		return
	}
	this.setState(
		{
			currentItems: this.state.items.filter(el =>
				
					el.category === category
				)
		}
	)
}

deleteOrder(id)
{
	this.setState({orders: this.state.orders.filter(el => el.id !== id)})
	
}

addToOrder(item)
{
	let isInArray = false;
	this.state.orders.forEach(el =>
		{
			if (el.id === item.id)
			{
				isInArray = true;
				
			}
		})
		if (!isInArray)
		{
			this.setState({ orders: [...this.state.orders, item] })	
		}

	
}
}

export default App;
