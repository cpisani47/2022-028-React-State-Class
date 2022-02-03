import React from 'react'
import './App.css';

function App() {

  return (
    <div className='wrapper'>
      <h1>2022-028 How To Manage State on React Class Components</h1>
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
    </div>
  )
}

export default App;
