import logo from './assets/logo.svg';
import dollar from './assets/icon-dollar.svg';
import person from './assets/icon-person.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App__logo"><img src={logo} alt="The logo for the app, Spliter" /></div>
      <div className="calculator">
        <div className="calculator__inputs">
          <div className="calculator__bill">
            <label htmlFor="bill">Bill</label> <br />
            {/* step property below allows for decimals to be considered valid */}
            <input type="number" name="bill" id="bill" min="0" placeholder="0" step="0.01" />
            <div className="input-icon icon--dollar">
              <img src={dollar} alt="Icon of a dollar sign" />
            </div>
          </div>
          <div className="calculator__tip-selection">
            <label htmlFor="custom">Select Tip %</label> <br />
            <div className="tip-selections grid grid--tip">
              <div className="btn btn--tip unselected">5%</div>
              <div className="btn btn--tip unselected">10%</div>
              <div className="btn btn--tip unselected">15%</div>
              <div className="btn btn--tip unselected">25%</div>
              <div className="btn btn--tip unselected">50%</div>
              <input type="number" name="custom" id="custom" placeholder="Custom" />
            </div>
          </div>
          <div className="calculator__people">
            <label htmlFor="numPeople">Number of People</label> <br />
            <input type="number" name="numPeople" id="numPeople" placeholder="0" />
            <div className="input-icon icon--person">
              <img src={person} alt="Icon of a person" />
            </div>
          </div>
        </div>

        <div class="calculator__outputs">
          <div className="calculator__results">
            <div className="tip-results grid grid--results">
              <p><span>Tip Amount </span><br /> / person</p>
              <div className="tip-amount"></div>
  
              <p><span>Total </span><br /> / person</p>
              <div className="total-amount"></div>
            </div>
  
            <div className="btn btn--reset">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
