import logo from './logo.svg';
import './App.css';

const cardArray=[
  
  {
    name: 'buttercup',
    img: 'images/buttercup.png'
    
  },
  {
    name: 'courage',
    img: 'images/Courage3.png'
    
  },
  {
    name: 'dexter',
    img: 'images/dexter.png'
    
  },
  {
    name: 'edd',
    img: 'images/Edd1.png'
    
  },
  {
    name: 'foster',
    img: 'images/coco.png'
    
  },
  {
    name: 'rugG',
    img: 'images/lil.png'
    
  },
  {
    name: 'rugB',
    img: 'images/phil.png'
    
  },
  {
    name: 'recess',
    img: 'images/recess.png'
    
  },

]

cost grid = document.querySelector.('.grid')

function createBoard(){
  for(let i=0; i< cardArray; i++)
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
