import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select, { SingleValue }  from "react-select";
import Control from "react-select/dist/declarations/src/components/Control";
import { useTheme } from "../../hooks/useTheme";
import { useCity } from "../../hooks/useCityName";
import { Theme } from "../../context/ThemeContext";

export const options = [
    { value: 'minsk', label: 'Минск' },
    { value: 'gomel', label: 'Гомель' },
    { value: 'hrodna', label: 'Гродно' },
    {value: 'brest', label: 'Брест'},
    {value: 'vitebsk', label: 'Витебск'},
    {value: 'mahilyow', label: 'Могилёв'}
];



export const Header = () => {
    const theme = useTheme();
    const city = useCity();
    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : `rgba(71, 147, 255, 0.2)`,
            width: `194px`,
            height: `37px`,
            border: `none`,
            borderRadius: `10px`,
            zIndex: 100,

        }),
        singleValue : (styles : any) => ({
            ...styles,
            color: theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
        }),
    };

    function changeTheme(){
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT) 
    }
    
    const findDefaultSelectValue = (name: string) => {
        let it = {}
        options.forEach((item)=>{
            if (item.value==name){
                it = item
            }
        });
        return it as {value: string};
    };


    return(
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
                <div className={s.title}>Getmeteo</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                { <Select
                    defaultInputValue= { city.name } 
                    styles={colourStyles} 
                    options={options}
                    onChange={e => {city.changeName(e?.value!); console.log(city.changeName.toString(), city.name)}}
                />}
            </div>
        </header>
    )
}

function useCityName() {
    throw new Error("Function not implemented.");
}
