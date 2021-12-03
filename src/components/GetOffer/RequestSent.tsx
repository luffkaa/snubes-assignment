import { useSelector } from "react-redux"
import { selectRequestData } from "../../store/request/selectors"

export default function RequestSent() {
  const data = useSelector(selectRequestData);

  return (
    <>
      <h1 className="request_form__title request_form__title_success">
        Thank you for your request!
      </h1>
      <p className="request_form__description request_form__description__success">
        You’ve taken the first step. Our experts will get in touch with you soon.
      </p>
      <div className="request_form__success">
        <div className="request__fields fields_names">
          <span>Company:</span>
          <span>Name:</span>
          <span>Phone:</span>
          <span>E-mail:</span>
        </div>
        <div className="request__fields fields_data">
          <span>Company name{data.company}</span>
          <span>User Name{data.name}</span>
          <span>+491234567890{data.phone}</span>
          <span>name@mail.com{data.email}</span>
        </div>
      </div>
    </>
  )
}
