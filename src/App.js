import logo from './logo.svg';
import './App.css';
import DoubbleButton from './components/DoubleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';
// 追記箇所
import ClickCount from './components/ClickCount';
// 追記箇所
import TextField from './components/TextField';

function App() {
  return (
    <>
  <div className="App">
    <h1>本の指標</h1>
    <div className="book-list">
      {data.map(book => (
        <div className="book-item" key ={book.id} > 
        <h3>{book.name}</h3>        
        <ReactStars totalStars={5}  count={book.evaluation} />    
        </div>
      ))}
    </div>
  </div>
{/* 追記箇所 */}
    <ClickCount />
    <TextField />   
    </>
  );
}


export default App;
