import logo from './assets/logo.svg';
import dollar from './assets/icon-dollar.svg';
import person from './assets/icon-person.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [bill_amount, setBillAmount] = useState(0);
  const [tip_amount, setTipAmount] = useState(0);
  const [num_people, setNumPeople] = useState(0);
  const [total_per_person, setTotalPerPerson] = useState(0);
  const [tip_per_person, setTipPerPerson] = useState(0);

  function setBill(event){
    // For some reason, the bill amount was of type string, 
    // so I had to parse to a number, in this case a Float
    setBillAmount( parseFloat(event.target.value, 10) );
  }

  function setTip_5() {
    /* setTipAmount(0.05); */
    setTipAmount(5);
  }

  function setTip_10() {
    /* setTipAmount(0.10); */
    setTipAmount(10);
  }

  function setTip_15() {
    /* setTipAmount(0.15); */
    setTipAmount(15);
  }

  function setTip_25() {
    /* setTipAmount(0.25); */
    setTipAmount(25);
  }

  function setTip_50() {
    /* setTipAmount(0.50); */
    setTipAmount(50);
  }

  function setTip_Custom(event) {
    setTipAmount( parseInt(event.target.value, 10) );
  }

  function setPeople(event) {
    // For some reason, the input for the number of people was of type string, 
    // so I had to parse to a number (in this case, an Integer)
    setNumPeople( parseInt(event.target.value, 10) );
  }

  function reset() {
    setBillAmount(0);
    setTipAmount(0);
    setNumPeople(0);
    setTotalPerPerson(0);
    setTipPerPerson(0);    
  }

  useEffect(() => {
    updateAmounts();
  })

  function updateAmounts() {
    if(num_people === 0){
      let error = document.getElementById("zero-error");

      error.classList.remove("noshow");
      error.classList.add("show");
    }
    else {
      let error = document.getElementById("zero-error");

      error.classList.remove("show");
      error.classList.add("noshow");

      let tip = (bill_amount * (tip_amount / 100)) / num_people;
      let total = ((bill_amount * (tip_amount / 100)) + bill_amount) / num_people;

      /* let string = "Bill: " + bill_amount + "\nTip Amount: " + tip_amount + "\nPeople: " + num_people + "\nTip / person: " + tip_per_person + "\nTotal / person: " + total_per_person;
      console.log(string);
      console.log("\nTotal: " + total);
      console.log("\nType of people: " + typeof num_people); */

      setTipPerPerson(tip);
      setTotalPerPerson(total);
    }
  }

  return (
    <div className="App">
      <div className="App__logo"><img src={logo} alt="The logo for the app, Spliter" /></div>
      <div className="calculator">
        <div className="calculator__inputs">
          <div className="calculator__bill">
            <label htmlFor="bill">Bill</label> <br />
            {/* step property below allows for decimals to be considered valid */}
            <input type="number" name="bill" id="bill" value={bill_amount} onChange={setBill} min="0" placeholder="0" step="0.01" />
            {/* <h3>{bill_amount}</h3> */}
            <div className="input-icon icon--dollar">
              <img src={dollar} alt="Icon of a dollar sign" />
            </div>
          </div>
          <div className="calculator__tip-selection">
            <label htmlFor="custom">Select Tip %</label> <br />
            <div className="tip-selections grid grid--tip">
              <div className="btn btn--tip unselected" onClick={setTip_5}>5%</div>
              <div className="btn btn--tip unselected" onClick={setTip_10}>10%</div>
              <div className="btn btn--tip unselected" onClick={setTip_15}>15%</div>
              <div className="btn btn--tip unselected" onClick={setTip_25}>25%</div>
              <div className="btn btn--tip unselected" onClick={setTip_50}>50%</div>
              <input type="number" name="custom" id="custom" value={tip_amount} onChange={setTip_Custom} placeholder="Custom" min="0" max="100" />
              {/* <h3>{tip_amount}</h3>
              <h3>Tip: ({bill_amount} * {tip_amount}) / {num_people}</h3>
              <h3>TOtal: (({bill_amount} * {tip_amount}) + {bill_amount}) / {num_people}</h3> */}
            </div>
          </div>
          <div className="calculator__people">
            <div className="flex s-b">
              <label htmlFor="numPeople">Number of People</label>
              <p className="zero-error noshow" id="zero-error">Can't be zero</p>
            </div>
            <br />
            <input type="number" name="numPeople" id="numPeople" value={num_people} onChange={setPeople} placeholder="Custom" min="0" />
            <div className="input-icon icon--person">
              <img src={person} alt="Icon of a person" />
            </div>
            {/* <h3>{num_people}</h3> */}
          </div>
        </div>

        <div className="calculator__outputs">
          <div className="calculator__results">
            <div className="tip-results grid grid--results">
              <p><span>Tip Amount </span><br /> / person</p>
              <div className="tip-amount">$ <span className="tip-results__outputs" id="t-a1">{tip_per_person}</span></div>
  
              <p><span>Total </span><br /> / person</p>
              <div className="total-amount">$ <span className="tip-results__outputs" id="t-a2">{total_per_person}</span></div>
            </div>
  
            <div className="btn btn--reset" onClick={reset}>Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
