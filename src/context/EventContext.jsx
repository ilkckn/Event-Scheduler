import React, {createContext} from 'react'

const EventContext = createContext();

function EventContextProvider({children}) {
  return (
      <EventContext.Provider value={{}}>
        {children}
      </EventContext.Provider>
  )
}

export default EventContextProvider