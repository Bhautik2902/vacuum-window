import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-wv5tNq2ZZeP6yKOpTg+Z6W5tZR5V5/d9/1LT1OSW5zVoqTkcJs6u1fT1JdA2uj/Py" crossorigin="anonymous"/>
      </head>
      <body>
        <div className="App">
          <header className="App-header">
            <h2>Vacuum Window</h2>
          </header>
          <div class="main-container">
            <div class="sub-container">
              <div class='address_container'>
                <p class="label">Your address</p>
                <div class="address">
                  <p>234 545 876</p>
                  <i class="fa-solid fa-copy"></i>
                </div>
              </div>
              
              <div class='create_conn_container'>
                <p class="label">Enter connection address</p>
                <input type='number' class="Entry" />
              </div>
                
            </div>
            <div class="sub-container">
              <textarea>

              </textarea>
              <div class="right-bottom">
                <input type='checkbox' /> 
                <p>Auto send</p>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    
  );
}

export default App;
