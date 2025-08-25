import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/CounterSlice'




function App() {
  const dispatch = useDispatch()
  const count=useSelector((state)=>state.count)
  return (
    <>
      <h1>redux toolkit counter</h1>
      <h1>count:</h1>
      <button onClick={()=>dispatch(increment)}>Increment</button>
      <button onClick={()=>dispatch(decrement)}>Decrement</button>
      <button onClick={()=>dispatch(reset)}>Reset</button>
    </>
  )

}

export default App