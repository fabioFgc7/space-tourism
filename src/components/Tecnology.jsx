import React from "react";
import { TecnologyView } from "./TecnologyView";

export const Tecnology = () => {
  return (
    <section className="box-border min-h-screen md:bg-[url('/public/assets/technology/background-technology-desktop.jpg')] relative bg-[url('/public/assets/technology/background-technology-tablet.jpg')] place-content-center">
      <TecnologyView />
    </section>
  );
};
