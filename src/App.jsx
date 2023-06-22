import React from 'react'
import Routing from "./routing/Routing"
import { Provider } from 'react-redux'
import store from './redux/store/store'
const App = () => {
  
  return <>
    <Provider store= {store}>
      <Routing />
    </Provider>
  </>
}

export default App