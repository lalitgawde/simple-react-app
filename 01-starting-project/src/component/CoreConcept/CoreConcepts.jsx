import React from 'react';
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";


function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((core_concepts) => {
          return (
            <CoreConcept
              title={core_concepts.title}
              description={core_concepts.description}
              image={core_concepts.image}
            />
          )
        })}
      </ul>
    </section>
  );
}

export default CoreConcepts;