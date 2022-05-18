import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from './ThisDay.module.scss';
import {Popup} from "../../../../shared/Popup/Popup"


interface Props{
    weather: Weather
}

export const ThisDay = ({weather}: Props) =>{

    const cityNamesLocale = new Map().set(`minsk`, `Минск`)
    .set(`gomel`, `Гомель`)
    .set(`hrodna`,`Гродно`)
    .set(`brest`,`Брест`)
    .set(`vitebsk`, `Витебск`)
    .set(`mahilyow`, `Могилёв`)

    function getTime(){
        let currentTime = new Date();
        let h = currentTime.getHours().toString();
        let m = currentTime.getMinutes().toString();
        if(h.length === 1) {
            h = `0`+h;
        }
        if(m.length === 1) {
            m = `0`+m;
        }
        return `${h}:${m}`
    }
    

    return (
        <div className={s.this__day} >
            <div className={s.top__block}>
                <div className="top__block_wrapper">
                    <div className={s.this__temp}>{Math.round(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={weather.weather[0].description}/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.this__time}>
                    Время: <span>{getTime()}</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>{cityNamesLocale.has(weather.name.toLowerCase()) ? cityNamesLocale.get(weather.name.toLowerCase()) : weather.name}</span>
                </div>
            </div>
        </div>
    )
}