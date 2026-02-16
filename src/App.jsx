import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/component/Navbar";
import Mainsec from "./components/component/Mainsec";
import { useState } from "react";
import Information from "./components/component/Information";
import SelectDemo from "./components/component/Select";
export default function App() {
  const [selectedRegion, setSelectedRegion] = useState("Asia");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SelectDemo
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
              <Mainsec selectedRegion={selectedRegion} />
            </>
          }
        />

        <Route path="/country/:name" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}
