
import React, { Component } from 'react';
import "./Product.css";

export default class Product extends Component {

    // Shouldn't this be define in the constructor?
    state = {
        cart: [],
        total: 0
    }

    // This is a parameter which won't change, so don't put it in the state
    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    // Without using the arrow function, this method would
    // create a new this binding, which would interfere with
    // the current this binding and introduce a bug into our code.
    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }

    render() {
        return (
            <div className='wrapper'>
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                <div>Total: {this.getTotal()}</div>
                <div className='product'>
                    <span role="img" aria-label='ice cream'>🍦</span>
                </div>
                <button>Add</button>
                <button>Remove</button>
            </div>
        )
    }
}