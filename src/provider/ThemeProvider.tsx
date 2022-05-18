import { ReactNode, useState } from "react"
import {Theme, ThemeContext} from "../context/ThemeContext"
import { changeCssRootvariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

interface Props{
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem(`theme`) || Theme.LIGHT);

    changeCssRootvariables(theme) //вынесли отдельно, чтобы вызавалась при инициализации приложения
    function changeTheme(theme: Theme){
        storage.setItem(`theme`, theme);
        setTheme(theme)
        changeCssRootvariables(theme)
    }

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};