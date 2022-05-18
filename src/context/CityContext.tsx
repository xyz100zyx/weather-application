//delete from context this file + delete from App.tsx intersected with this file components

import { createContext } from "react";

interface Props{
    name: string;
    changeName: (name: string) => void
}

export const CityContext = createContext<Props>( {
    name: 'Минск',
    changeName: () => {}
} );