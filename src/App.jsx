import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import RootLayout from "./components/Root";
import StoriesPage from "./components/storiesPage/StoriesPage";
import FeaturePage from "./components/FeaturesPage/FeaturePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "stories", element: <StoriesPage /> },
      { path: "feature", element: <FeaturePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
