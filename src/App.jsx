import { useState } from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/AuthPage/login.page'
import Root from './pages/root/root.page';
import PrivateRoute, { PrivateRouteLoader }from './pages/AuthPage/PrivateRoute.page'
import Home from './pages/Home';
import About from './pages/About'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="login" element={<Login />} /> 
      {/* <Route path="Register" element={<SignUpForm />} /> */}

      <Route element={<PrivateRoute />} loader={PrivateRouteLoader}>
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
)

function App() {

  const [user, setUser ] = useState(() => null);

  return (
    <RouterProvider router={Router} />
  )
}

export default App
