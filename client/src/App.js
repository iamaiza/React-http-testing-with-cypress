import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from "./components/SideNav/SideNav"
import Habit from "./components/Habit/Habit"
import Accomplishments from "./components/Accomplishment/Accomplishment"
import Rewards from "./components/Rewards/Rewards"
// import Elements from "./components/Elements/Elements"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='App-container'>
          <SideNav />
          <Routes>
            <Route exact path='/habits' element={<Habit />} />
            <Route exact path='/accomplishments' element={<Accomplishments />} />
            <Route strict exact path="/rewards" element={<Rewards />} />
            {/* <Route exact path='/elements' element={<Elements />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
