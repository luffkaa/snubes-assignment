import { IConcepts } from "../../constants/types";

export default function SingleConcept({
  title,
  description,
  image,
}: IConcepts) {
  return (
    <div 
      className="single_concept"
    >
      <img src={image} alt={`concept ${title}`} width="80" height="80"/>
      <div className="single_concept__info">
        <h3 className="concept__title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
