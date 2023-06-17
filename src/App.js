/** ------------ IMPORTING COMPONENTS ------------ **/
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
/** ------------ IMPORTING PAGES ------------ **/
import Add from "./Pages/AddContact/add";
import Edit from "./Pages/EditContact/edit";
/** ------------ IMPORTING ROUTER ------------ **/
import {RouterProvider, createBrowserRouter} from 'react-router-dom';



function App() {

  /** ------------ Creating Routes ------------ **/
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/> ,
      children : [
        {path: '/', element: <Home/>},
        {path: '/add', element: <Add/>},
        {path: '/edit', element: <Edit/>}
      ]}
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}



/** ------------ EXPORTING MODULES ------------ **/
export default App;
