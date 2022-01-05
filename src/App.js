import './App.css';
import Banner from './components/Banner';
import banner1 from "./assets/images/banner-1.png"
import Header from './components/Header';
import FlatList from './components/FlatList';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner title="true" image={banner1}/>
        <FlatList />
    </div>
  );
}

export default App;
