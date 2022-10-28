import React from "react";
import { Routes, Route } from "react-router-dom ";
import { Crew } from "../components/Crew";
import { Destination } from "../components/Destination";
import { DestinationView } from "../components/DestinationView";
import { Error } from "../components/Error";
import { Home } from "../components/Home";
import { Tecnology } from "../components/Tecnology";
export const RoutePage = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='destination'
        element={<Destination />}>
        <Route
          path='moon'
          element={<DestinationView />}
        />
        <Route
          path='mars'
          element={<DestinationView />}
        />
        <Route
          path='europa'
          element={<DestinationView />}
        />
        <Route
          path='titan'
          element={<DestinationView />}
        />
      </Route>
      <Route
        path='crew'
        element={<Crew />}
      />
      <Route
        path='tecnology'
        element={<Tecnology />}
      />
      <Route
        path='*'
        element={<Error />}
      />
    </Routes>
  );
};
