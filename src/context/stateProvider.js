import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ store, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, store)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);