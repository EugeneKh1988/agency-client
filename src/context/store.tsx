"use client";

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    logged: boolean;
    setLogStatus: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    logged: false,
    setLogStatus: (): boolean => false,
});

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    const [logged, setLogStatus] = useState(false);

    return (
        <GlobalContext.Provider value={{logged, setLogStatus}}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)