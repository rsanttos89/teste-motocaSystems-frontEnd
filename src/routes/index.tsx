import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Page404 from "../screens/404";
import Layout from "../components/Layout";

import MotorcycleRegistration from "../screens/MotorcycleRegistration";
import MotorcycleTable from "../screens/MotorcycleTable";
import MotorcycleEdit from "../screens/MotorcycleEdit";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<MotorcycleRegistration />} />
          <Route path="/table" element={<MotorcycleTable />} />
          <Route path="/edit/:product_code" element={<MotorcycleEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;