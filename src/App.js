import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
       
      </head>
      <body>
        <div className="App">
          <header className="App-header">
            <h2>Vacuum Window</h2>
          </header>
          <div className="main-container">
            <div className="sub-container">
              <div className='address_container'>
                <p className="label">Your address</p>
                <div className="address">
                  <p>234 545 876</p>
                  <button><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/copy.png" alt="copy"/></button>
                </div>
              </div>
              
              <div className='create_conn_container'>
                <p className="label">Enter connection address</p>
                <input type='number' className="Entry" />
                <button>Connect</button>
              </div>
                
            </div>
            <div className="sub-container">
              <textarea>
              </textarea>
              <div className="right-bottom">
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
