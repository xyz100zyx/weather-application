import React from "react";
import { useNavigate } from "react-router-dom";
import s from './ThisDayInfo.module.scss';
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { Weather } from "../../../../store/types/types";

interface Props{
    weather: Weather;
}

export interface Item{
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo = ({weather}: Props) =>{

    console.log('weather is ', weather.weather[0].description)

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.round(weather.main.temp)}° - ощущается как ${Math.round(weather.main.feels_like)}°`
        },
        {
            icon_id: 'pressure',
            name: 'Давление ',
            value: `${weather.main.pressure} мм. ртутного столба - нормальное`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${
                (weather.main.sea_level > 70 && weather.main.sea_level > 100) ? 'Лёгкий дождь' : 'Без осадков'
            }`
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${weather.wind.speed} м/с юго-запад - легкий ветер`
        }
    ];


    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => {
                    return <ThisDayItem key={item.icon_id} item={item} />
                })}
            </div>
            <img className={s.cloud__img} src={cloud} alt="облако"/>
        </div>
    )
}