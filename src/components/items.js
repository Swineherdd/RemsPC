import React, { Component } from 'react'
import Item from './item';
export class items extends Component {
  render() {
    return (
			<main>
				{this.props.items.map(el => (
					<>
						<Item onShowItem = {this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} onDelete = {this.props.onDelete}  />
					
					</>
				))} 
			</main>
		)
  }
}

export default items