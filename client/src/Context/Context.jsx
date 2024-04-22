import { createContext, useContext } from 'react'

export const InfoodContext = createContext()


export const useInfood = () =>{
    const context  = useContext(InfoodContext)
    if (!context){
        throw new Error("El contexto tiene que estar dentro del provider")
    }

    return context
}

export const InfoodContextProvider = ({children}) => {
    return (
            <InfoodContext.Provider value = {{ text : "Hello world" }}>
                {children}
            </InfoodContext.Provider>
    )
}