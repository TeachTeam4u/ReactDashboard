import Login from './Validation/Login';
import React  from 'react';
import Base from './BASE/Base';
import { useSelector } from 'react-redux'; 
function App() {

  const state = useSelector(state => state)
  console.log(state);
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
