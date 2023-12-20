 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
 import Header from './components/Header'
 import Footer from './components/Footer';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
const appRouter =createBrowserRouter ([
     {
      path:'/',
      element: <Body/>,
      children: [{
        path: '/',
        element: <MainContainer/>
      }]
}

    ])

function App() {
  return (
    <div className='container mx-auto'>
      <Header/>     
      <RouterProvider router={appRouter}/> 
      <Footer/>
    </div>
  );
}

export default App;
