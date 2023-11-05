import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import CharactersPage from './pages/Characters';
import StarshipsPage from './pages/Starships';
import PlanetsPage from './pages/Planets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/movies', element: <MoviesPage /> },
      { path: '/characters', element: <CharactersPage /> },
      { path: '/starships', element: <StarshipsPage /> },
      { path: '/planets', element: <PlanetsPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} ></RouterProvider>
}

export default App;
