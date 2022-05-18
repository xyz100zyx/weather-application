import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {MonthStatistics} from "./pages/MonthStatistics/components/MonthStatistics";
import {Header} from "../src/shared/Header/Header";
import "./styles/index.scss";
import { Popup } from './shared/Popup/Popup';
import { useDispatch } from 'react-redux';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { selectCurrentCityName } from './store/selectors';
import {CityProvider} from "./provider/CityProvider"


function App() {

  const dispatch = useCustomDispatch();
  // const cityName = useCustomSelector(selectCurrentCityName);

  return (
    <div className="global-container">
      {/* {<Popup />} */}
      <div className="container">
        <CityProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="/month-statistics" element={<MonthStatistics />} />
          </Routes>
        </CityProvider>
      </div>
    </div>
  );
}

export default App;
