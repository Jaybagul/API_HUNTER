import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from './Home';
import Login from './Login';
import SingleProductPage from './SingleProductPage';

import PrivateRoute from '../Components/PrivateRoute';


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/singleproduct/:id" element={<SingleProductPage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
