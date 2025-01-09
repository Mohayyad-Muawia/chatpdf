import React, { createContext,  useState } from 'react'

export const DocumentProvidedContext = createContext(false)

export function DocumentProvidedProvider({ children }) {
  const [noDoc, setNoDoc] = useState(true)


  return (
    <DocumentProvidedContext.Provider value={{ noDoc, setNoDoc }}>
      {children}
    </DocumentProvidedContext.Provider>
  )
}
