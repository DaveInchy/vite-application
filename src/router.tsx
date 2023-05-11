import "./index.css";
import Home from "./components/pages/Home";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const navigate = async (path: string) => {
  window.location.href = path;
  return path;
};

export default function Component(): JSX.Element {

  //* logic *//
  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path="/" element={<Home/>}>
        <Route path="index"/>
      </Route>


      <Route path="api/">
        <Route path="metadata" element={<pre>API :: Metadata</pre>} />
      </Route>
    </>)
  );

  return (<RouterProvider router={router} />);
}