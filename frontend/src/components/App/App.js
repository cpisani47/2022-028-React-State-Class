import React from 'react'
import Product from '../Product/Product';
import './App.css';

function App() {

  return (
    <div className='wrapper'>
      <h1>2022-028 How To Manage State on React Class Components</h1>
      <h2>Example</h2>
      <Product />
      <h2>Notes</h2>
      <p>
        In React, state refers to a structure that keeps track of how data
        changes over time in your application. Managing state is a crucial
        skill in React because it allows you to make interactive web
        applications. State is used for everything from tracking form
        inputs to capturing dynamic data from an API.
      </p>
      <p>
        This tutorial shows
        how to manage state on class based components. While the
        functional based approach of Hooks have been introduced as a
        preferred approach, one still needs to understand existing code
        based on classes. Also one method componentDidCatch is not
        available in hooks. This tutorial shows you how to set the state,
        which is useful when the state doesn't depend on the previous
        state, and how to set the current satte when it does.
      </p>
      <p>
        The state of a React class is a special
        property that controls the rendering of a page. When you change the
        state, React knows that the component is out-of-date and will
        automatically re-render. You can add other properties to a React
        class, but they won’t have the same ability to trigger re-rendering.
      </p>
      <p>
        The setState method can take either an object or a function
        as the first argument. If you need to reference the current
        state, you use the latter to pass a function to avoid any
        references to out-of-date state. This can happen during data
        fetches, form validations, or any situation where several
        actions are occurring in parallel.
      </p>
      <p>
        The setState function you pass can have an additional
        argument of the current props, which can be helpful
        if you have state that needs to reference the current
        props. You can also pass a callback function to
        setState as the second argument, regardless of if
        you pass an object or function for the first
        argument. This is particularly useful when you are
        setting state after fetching data from an API and
        you need to perform a new action after the state
        update is complete.
      </p>
    </div>
  )
}

export default App;
