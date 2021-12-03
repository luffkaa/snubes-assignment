import RequestForm from './RequestForm';
import './getOffer.css';
import InfoData from './InfoData';

export default function GetOffer() {
  return(
    <section className="get_offer__section">
      <div className="container">
        <div className="get_offer__container">
          <RequestForm/>
          <InfoData />
        </div>
      </div>
    </section>
  )
}
