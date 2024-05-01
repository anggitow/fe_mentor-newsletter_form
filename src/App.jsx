import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@views/Home';
import Success from '@views/Success';
import { useEmailStore } from '@stores/storeEmail';

function App() {
  const { email } = useEmailStore();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/success', element: email ? <Success /> : <Navigate to="/" /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
