import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

 const [data,setData] = useState();
  const [name,setName] = useState();
  const [weight,setWeight] = useState();
  const [number,setNumber] = useState(1);
  const [showData, setShowData] = useState(false);

const DndApi = 'https://www.dnd5eapi.co/api/'

useEffect(() => {
  axios.get(`${DndApi}${number}`).then((res) => {
    console.log(res.data)
  setData(res.data);
  setName(res.data.name);
  setWeight(res.data.weight);

  }).catch((err)=>{
    window.alert(err);
  });
}, [number]);



    return (
      <div className="App">
        <h1>dnd</h1>
        <input type="number" onChange={(e) => {e.target.value && setNumber(e.target.value)}} />
        <h2>name of dnd :{name}</h2>
        <button onClick={() => setShowData(!showData)}>Show {showData ? 'Less' : 'More'} Info</button>
        {showData && (
          <>
            <h3>weight of dnd : {weight}</h3>
            <img src={data ? data.front_default : "<p>loading</p>"} alt="dnd"/>
            <p>my abilities are:</p>
            {data? data.abilities.map((value,key)=>{
              return(
                <div key={key}>
                  {value.ability.name}
                </div>
              )
            }):""}
          </>
        )}
    </div>
  );
}

export default App;
