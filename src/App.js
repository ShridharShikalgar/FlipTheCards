import Cards from './components/Cards'
import Rating from './components/Rating/Rating';
import Comment from './components/Comments/Comment';
function App() {
  return (
      <div className='Main-Container'>
        <h1>Flip The Card</h1>
        <Cards />
        <Rating/>
        <Comment/>
      </div>
  );
}
export default App;
