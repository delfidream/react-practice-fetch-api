import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import './css/bulma.min.css';



function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setAge(res.data.age);
      setDisplayName(name);
      setShowResult(true);
      //document.querySelector('.result').style.display="block";
    });

  }
  

  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
              <nav className="panel">
                <p className="panel-heading">FETCH FROM API</p>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input id="todo-input" onChange={(event)=>{setName(event.target.value)}} className="input" type="text" placeholder="Write a name"/>
                  </p>
                </div>
                
                
                <div className="panel-block reset">
                  <button className="button is-link is-outlined is-fullwidth" onClick={fetchAge}>
                    Predict Age
                  </button>
                  <div className="result" style={showResult ? {} : { display: 'none' }}>{displayName} is probably {age}</div>
                  {/* <div className="result" style={{display:'none'}}>{displayName} is probably {age}</div> */}
                </div>
              </nav>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
}

export default App;