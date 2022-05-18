import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThisDay } from "./ThisDay/ThisDay";
import { selectCurrentCityName, selectCurrentWeatherData } from "../../../store/selectors";
import s from './Home.module.scss';
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {setText} from "../../../store/slices/currentCitySlice"


interface Props{

}

export const Home = ({}: Props) =>{
    
    const dispatch = useCustomDispatch()
    const { weather } = useCustomSelector(selectCurrentWeatherData);
    const cityName = useCustomSelector(selectCurrentCityName);
    useEffect(() => {
        dispatch(fetchCurrentWeather(`${cityName.name}`))
        console.log(cityName.name)
    }, [cityName.name]);
    

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            {/* <Days /> */}
        
        </div>
    )
}