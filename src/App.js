import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div class="calculator__bill">
          <label for="bill">Bill</label>
          {/* step property below allows for decimals to be considered valid */}
          <input type="number" name="bill" id="bill" min="0" placeholder="0" step="0.01" />
        </div>

        <div class="calculator__tip-selection grid">
          <label for="custom">Select Tip %</label>
          <div class="btn btn--tip">5%</div>
          <div class="btn btn--tip">10%</div>
          <div class="btn btn--tip">15%</div>
          <div class="btn btn--tip">25%</div>
          <div class="btn btn--tip">50%</div>
          <input type="number" name="custom" id="custom" placeholder="Custom" />
        </div>

        <div class="calculator__people">
          <label for="numPeople">Number of People</label>
          <input type="number" name="numPeople" id="numPeople" placeholder="0" />
        </div>

        <div class="calculator__results grid">
          <p>Tip Amount <br /> / person</p>
          <div class="tip-amount"></div>
          
          <p>Total <br /> / person</p>
          <div class="total-amount"></div>
          
          <div class="btn btn--reset">Reset</div>
        </div>
      </div>
    </div>
  );
}

export default App;
