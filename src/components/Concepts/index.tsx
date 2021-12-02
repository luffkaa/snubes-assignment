import './concepts.css';
import { CONCEPTS } from "../../constants/concepts";
import SingleConcept from "./SingleConcept";

export default function Concepts() {
  return (
    <section className="section___concepts">
      <div className="container">
        {CONCEPTS.map((concept, i) => {
          return (
            <SingleConcept
              key={concept.title}
              {...concept}
            />
          )
        })}
      </div>
    </section>
  )
}
