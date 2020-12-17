import React from 'react';
import {AppContextType} from "./interfaces";

const initialState:AppContextType = {
    users: [],
    posts: [],
    currentUser: {},
}

const AppContext = React.createContext(initialState)

export default AppContext