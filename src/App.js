import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';
import Login from './components/Login';


function App() {
  return (
    <div>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
