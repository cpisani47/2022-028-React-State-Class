
import React, { Component } from 'react';
import "./Product.css";

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

export default class Product extends Component {

    // In ES6 class fields are introduced. React uses them routinely
    // through Babel. So don't need to define this through the constructor
    // and this also avoids this binding issues.
    state = {
        cart: []
    }

    add = (product) => {
        this.setState(state => ({
            // * Don't use this.state as it might be out of date. 
            // * Take care not to directly mutate state
            // Adding the entire produce object.
            cart: [...state.cart, product]
        })
        )
    }

    remove = (product) => {
        this.setState(state => {
            // To avoid mutating the state object, you must first make
            // a copy of it using the spread operator. Then you can
            // splice out the item you want from the copy and return
            // the copy in the new object. By copying state as the
            // first step, you can be sure that you will not mutate
            // the state object.
            const cart = [...state.cart];
            // we have an array of product objects so need to find the first
            // with the right name.
            const productIndex = cart.findIndex(p => p.name === product.name)
            // By returning nothing, React will know the state didn’t
            // change and won’t trigger a re-render. If you return state
            // or an empty object, it will still trigger a re-render.
            if (productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
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
        const total = this.state.cart.reduce(
            (totalCost, item) => totalCost + item.price, 0)
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    render() {
        return (
            <div className='wrapper'>
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                <div>Total: {this.getTotal()}</div>
                <div>
                    {products.map(product => (
                        <div key={product.name}>
                            <div className='product'>
                                <span role="img" aria-label={product.name}>{product.emoji}</span>
                            </div>
                            <button onClick={() => this.add(product)}>Add</button>
                            <button onClick={() => this.remove(product)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}