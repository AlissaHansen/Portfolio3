import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';


function App() {
  return (
    <div>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movieinfo/:id" element={<MovieInfo />} />
        <Route path="/search/:searchTerm" element={<Search/>} />
      </Routes>

    </div>
  );
}

export default App;
