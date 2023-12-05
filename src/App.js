import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';


function App() {
  return (
    <div>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>

    </div>
  );
}

export default App;
