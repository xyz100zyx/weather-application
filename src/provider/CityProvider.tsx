import { useEffect } from "react";
import { ReactNode, useState } from "react"
import { CityContext } from "../context/CityContext";
import { useCustomDispatch } from "../hooks/store";
import { storage } from "../model/Storage";
import { setText } from "../store/slices/currentCitySlice";

interface Props{
    children: ReactNode
}

export const CityProvider = ({children, ...props} : Props) => {
    const dispatch = useCustomDispatch()
    const [name, setName] = useState<string>('')
    function changeName(name: string){
        dispatch(setText(name));
        storage.setItem('name', name);
        setName(name);
        console.log(name)
    }

    return (
        <CityContext.Provider 
            value={{
                name,
                changeName
            }}
            {...props}
        >
            {children}
        </CityContext.Provider>
    );
}
