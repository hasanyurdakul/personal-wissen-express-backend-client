import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
