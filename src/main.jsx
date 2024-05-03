import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import Routes from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import DataProvider from "./DataProvider/DataProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      // position="top-center"
      // autoClose={1000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme="light"
      // transition:Bounce
    />
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <AuthProvider>
          <RouterProvider router={Routes} />
        </AuthProvider>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
