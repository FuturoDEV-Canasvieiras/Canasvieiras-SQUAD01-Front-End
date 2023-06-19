import { createContext, useContext} from 'react';
import { useFetch } from '../hooks/useFetch.js';

export const DevAdotionCotext = createContext();

export const DevAdotionProvider = ({children}) => {
  
    const store = useFetch()
    return (
        <DevAdotionCotext.Provider value={{...store}}>
            {children}
        </DevAdotionCotext.Provider>
    )
}

export const useAdotionContext = () => useContext(DevAdotionCotext);