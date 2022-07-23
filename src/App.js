import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Adding from './Components/Adding';
import Home from './Components/Home';
import Login from './Components/Login';
import Members from './Components/Members';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import RequireAuth from './Components/RequareAuth';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route
          path="/"
          element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
          }
        />
        <Route path="/members" element={<RequireAuth>
          <Members/>
        </RequireAuth>} />
        <Route path="/adding" element={<RequireAuth>
          <Adding/>
        </RequireAuth>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
