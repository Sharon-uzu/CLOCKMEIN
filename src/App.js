
import './App.css';
import Home from './Home';
import Forgot from './screens/Forgot';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Verification from './screens/Verification';
import Change from './Change';
import Admin from './screens/Admin';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Forgot' element={<Forgot />} />
        <Route path='/Verification' element={<Verification />} />
        <Route path='/Change' element={<Change />} />
        <Route path='/Admin' element={<Admin />} />
        
        </Routes>
    </div>
  );
}

export default App;
