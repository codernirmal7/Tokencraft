import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetStarted from "./pages/GetStarted";

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
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
