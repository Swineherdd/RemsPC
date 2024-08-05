import React, { Component } from 'react'
export class item extends Component {
  render() {
    return (
			<div className='item'>
				<img src={'./imgs/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
				<h2>{this.props.item.title}</h2>
				<p>{this.props.item.desc}</p>
				<b>{this.props.item.price}$</b>
				<button className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>
					+ 
				</button>
				
				<button className='add-to-cart'  onClick={() => this.props.onDelete(this.props.item.id)}>
					- 
				</button>
				
				
			</div>
		)
  }
}


export default item 
