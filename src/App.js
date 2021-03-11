import formJSON from './dummy_payload.json';
import {useState,useEffect} from 'react';
import Element from './components/Element';



function App() {
  const [elements,setElements]=useState(null);
  useEffect(() => {
    setElements(formJSON[0])
  
  }, [])
  const {field,description}=elements ?? {};
  
  return (
    <div className="App container">
      <h3>{description}</h3>
      
      
      <form>
        {field? field.map((eachField,i)=><Element key={i} field={eachField} fieldData={eachField.fieldData}/>): null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
