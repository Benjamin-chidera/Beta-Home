import { createContext } from "react";
import { properties } from "./mockData/properties";

export const AppContext= createContext()



const AppProvider = ({children})=>{
    
    return <AppContext.Provider value = {{properties}}>
        {children}
    </AppContext.Provider>

}

export default AppProvider