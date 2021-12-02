import './whySnubes.css';

export default function WhySnubes() {
  return (
    <section className="why_snubes__section">
      <div className="why_snubes__container inner_container">
        <h2 className="why_snubes__title">Why Snubes?</h2>
        <div className="why_snubes__reasons">
          <article className="why_snubes__reasons single_reason">
            <h3 className="single_reason__title">Trusted Know-How</h3>
            <p className="single_reason__description">We have more than 20 years of experience and continuously check call centers for their quality and capabilities. Customers like Allianz trust Snubes industry knowledge.</p>
          </article>
          <article className="why_snubes__reasons single_reason">
            <h3 className="single_reason__title">Time and cost savings</h3>
            <p className="single_reason__description">With Snubes you can easily compare prices, quality and availability, and find more potential suppliers. Reach your goal faster and save resources.</p>
          </article>
          <article className="why_snubes__reasons single_reason">
            <h3 className="single_reason__title">Satisfaction guaranteed</h3>
            <p className="single_reason__description">We offer a validated data-based approach to procurement, rather than awarding contracts only based on the lowest price, an existing relationship or "gut feeling".</p>
          </article>
        </div>
      </div>
    </section>
  )
}
