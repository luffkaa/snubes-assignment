import { MouseEvent } from 'react';

export default function RequestForm() {
  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div className="request_form__container">
      <h1 className="request_form__title">
        Find inbound call centers for your company
      </h1>
      <p className="request_form__description">
        Use our AI and Big Data driven call center sourcing solution
      </p>
      <form className="request_form__form">
        <div className="form__inputs_container">
          <div className="form__item">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" placeholder="Company"/>
          </div>
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Full name"/>
          </div>
          <div className="form__item">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="+49"/>
          </div>
          <div className="form__item">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="name@mail.com"/>
          </div>
        </div>
        <button
          type="submit"
          className="form__button"
          onClick={(e) => handleSubmit(e)}
        >
          Get informed
        </button>
      </form>
    </div>
  )
}
