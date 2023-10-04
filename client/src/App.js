import {Outlet, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Home, Login, Profile, Register, ResetPassword} from './pages/index';

//When user logs in will have access to their protected route 
function Layout() {
  const user = null;
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{from: location}} replace />
  );
}

function App() {
  return (
    <div className="w-full min-h-[100vh]">
       <Routes>
         {/* protected routes */}
         <Route element={<Layout />}>
            <Route path='/' element= {<Home />}/>
            <Route path='/profile/:id?' element={<Profile />} />         
         </Route>
         { /* unprotected routes */}
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='reset-password' element={<ResetPassword />} />
       </Routes>       
    </div>
  );
}

export default App;
