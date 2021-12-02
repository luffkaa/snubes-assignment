import allianzLogo from '../../images/customers/allianz-logo.webp';
import creditshelfLogo from '../../images/customers/creditshelf-logo.webp';
import laserhubLogo from '../../images/customers/laserhub-logo.webp';
import talixoLogo from '../../images/customers/talixo-logo-gray.webp';
import usercentricsLogo from '../../images/customers/usercentrics-logo.webp';

export default function CustomersLogo() {
  return (
    <div className="feedbacks__customers_logo">
      <img
        src={allianzLogo}
        alt="customer logo"
        width="136"
        height="36"
        className="customer_logo"
      />
      <img
        src={creditshelfLogo}
        alt="customer logo"
        width="86"
        height="36"
        className="customer_logo"
      />
      <img
        src={usercentricsLogo}
        alt="customer logo"
        width="173"
        height="36"
        className="customer_logo"
      />
      <img
        src={laserhubLogo}
        alt="customer logo"
        width="149"
        height="36"
        className="customer_logo"
      />
      <img
        src={talixoLogo}
        alt="customer logo"
        width="131"
        height="36"
        className="customer_logo"
      />
    </div>
  )
}
