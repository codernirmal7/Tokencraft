import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetStarted from "./pages/GetStarted";
import Staking from "./pages/Staking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/get-started",
      element: (
        <>
          <Navbar />
          <GetStarted />
          <Footer />
        </>
      ),
    },
    {
      path: "/staking",
      element: (
        <>
          <Navbar />
          <Staking />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
