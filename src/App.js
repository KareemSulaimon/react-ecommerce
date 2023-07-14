import Home from "./pages/Home";
import {
  createBrowserRouter,
   RouterProvider, 
    Outlet,
    ScrollRestoration
   } from "react-router-dom";
import Lorgin from './pages/Lorgin'
import Heading from "./components/Heading";
import sanity from "./lib/client"
import Footer from "./components/Footer";

 
const Layout = () => {
  return (
    <div className='w-full h-full bg-white'>
      <Heading />
      <Outlet />
      <ScrollRestoration />
      <Footer />
  
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await sanity.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await sanity.fetch(bannerQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     {
       path: "/",
      element: <Home />,
    },
     {
       path: "/lorgin",
      element: <Lorgin />,
    }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  
  );
}

export default App;
