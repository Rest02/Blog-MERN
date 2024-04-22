import { createContext } from 'react'

export const InfoodContext = createContext()

export const InfoodContextProvider = ({children}) => {
    return (
            <InfoodContext.Provider value = {{ text : "Hello world" }}>
                {children}
            </InfoodContext.Provider>
    )
}