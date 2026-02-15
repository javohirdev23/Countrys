import { createBrowserRouter,BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/component/Navbar";
import Mainsec from "./components/component/Mainsec";
import Select from "./components/component/Select";
import { useState } from "react";
import Information from "./components/component/Information";
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
              <Select
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
