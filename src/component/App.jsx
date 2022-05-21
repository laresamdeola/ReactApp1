import React from "react";
import { Header } from "./Header";
import { Note } from "./Note";
import { Footer } from "./Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Note />
      <Footer />
    </main>
  );
};

export { App };
