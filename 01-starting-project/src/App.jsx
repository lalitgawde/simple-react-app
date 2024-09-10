import { useState, Fragment } from "react";
import CoreConcepts from "./component/CoreConcept/CoreConcepts";
import Examples from "./component/CoreConcept/Examples";
import Header from "./component/Header/Header";

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
