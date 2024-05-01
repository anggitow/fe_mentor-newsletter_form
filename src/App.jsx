import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@views/Home';
import Success from '@views/Success';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/success', element: <Success /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
