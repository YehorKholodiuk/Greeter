import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import NameButtons from "./NameButtons";

function App() {
  const [names,setNames] = useState(['Alice','Bob','Maria','Sean'])
    const [newName,setNewName] = useState(' ')
const saveNewName = (newName) => {
      const newNames = [...names,newName];
      setNames(newNames)
      setNewName('')
}
  return (
    <div>
 <h1>Greeter</h1>
<hr/>
<input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
<button onClick ={() =>saveNewName(newName)}>Save</button>
<hr/>

      {names.map((el,index) => <NameButtons name={el} key={uuidv4()}index={index}/>)}

    </div>
  );
}

export default App




