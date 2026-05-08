// You can pass the props from one component to another, the act of passing props several times is aka props drilling
// This can be very tedious, a better solution is useContext hook

// The useContext() hook allow us to share values between multipule levels of components without passing props through each level

// Provider Component (which component has the data we would like access to)
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext()
// 3. <MyContext.provider value={value}>
// <Child/>
// </MyContext.provider>

// Consumer Component (which component has the data we would like access to)
// 1. import React, { useContext } from "react";
//    import { MyContext } from "./ComponentA";
// 2. const user = useContext(UserContext)

import React, { useState, useContext } from "react";
import ComponentB from "./ComponentB.jsx";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Omar");

  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>

        {/* You can pass the props from one component to another, the act of passing props several times is aka props drilling */}
        {/* This can be very tedious, a better solution is useContext hook */}
        {/* The useContext() hook allow us to share values between multipule levels of components without passing props through each leve*/}
        <h2>{`Hello ${user}`}</h2>

        <UserContext.Provider value={user}>
          <ComponentB user={user}></ComponentB>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;
