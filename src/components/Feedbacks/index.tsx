import './feedbacks.css';
import CustomersLogo from './CustomersLogo';
import FeedbackSlider from './FeedbackSlider';

export default function Feedbacks() {
  return (
    <section
      className="feedbacks_section container"
    >
      <FeedbackSlider />
      <CustomersLogo />
    </section>
  )
}
