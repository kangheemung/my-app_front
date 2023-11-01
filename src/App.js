import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import header from'./components/Header';

function App() {
  return (
    <div className = "App">
      <Header />
      <h1>Hellow app!</h1>
      <Post title = "hello title" body= "hello body"/>
      <Post title = "hello titl2" body= "hello body2"/>
      <Post />
      <Post />
    </div>
  );
}

export default App;
