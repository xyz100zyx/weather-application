import React from "react";
import s from "./Popup.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select  from "react-select";
import Control from "react-select/dist/declarations/src/components/Control";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";

interface Props{

}

export const Popup = ({}: Props) => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20 - ощущается как 17'
        },
        {
            icon_id: 'pressure',
            name: 'Давление ',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        }
    ];

    return(
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>
                        12°
                    </div>
                    <div className={s.day__name}>
                        Среда
                    </div>
                    <div className={s.img}>
                        <GlobalSvgSelector id="sun"/>
                    </div>
                    <div className={s.day__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={s.day__city}>
                    Город: <span>Минск</span>
                </div>
                </div>  
                <div className={s.this__day_info}>
                    <div className={s.this__day_info_items}>
                        {items.map((item: Item) => {
                            return <ThisDayItem key={item.icon_id} item={item} />
                        })}
                    </div>
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    )
}