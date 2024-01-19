import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Vacuum Window</h2>
      </header>
      <div class="main-container">
        <div class="sub-container">
            <div class='address_container'>
              <p class="label">Your address</p>
              <p class="address">234 545 876</p>
            </div>
            
            <div class='create_conn_container'>
              <p class="label">Enter connection address</p>
              <input type='number' class="Entry" />
            </div>
            
        </div>
        <div class="sub-container">
          <textarea>

          </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
