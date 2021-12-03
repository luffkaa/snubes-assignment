import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import {
  BLUE_COLOR,
  GRAY_COLOR,
  RED_COLOR,
} from '../../constants/constants';
import { COUNTRIES } from '../../constants/countries';
import { sendRequest } from '../../store';
import { handleValidation } from '../../utils';
import RequestSent from './RequestSent';
import { IDispatchState } from './types';

export default function RequestForm() {
  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [countryCode, setCountryCode] = useState<string>();
  const [isdCode, setIsdCode] = useState<string>('')
  const [company, setCompany] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: IDispatchState<string>
  ): void => {
    const value = e.target.value;

    setState(value)
  }

  const handlePhoneFocus = () => {
    if (phone.length <= 2) {
      setPhone(isdCode)
    }
  }

  const handleInputFocus = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    e.target.style.borderColor = BLUE_COLOR;

    if (e.target.id === 'phone') {
      handlePhoneFocus()
    }
  }

  const handleInputBlur = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    e.target.style.borderColor = GRAY_COLOR;
  }

  const handleSubmit = (
    e: MouseEvent
  ): void => {
    e.preventDefault();

    const data = {
      company,
      name,
      phone,
      email,
    }

    if (!!companyRef.current &&
      !!nameRef.current &&
      !!phoneRef.current &&
      !!emailRef.current
    ) {
      const isAllValid = handleValidation(companyRef.current.id, companyRef.current.value) &&
        handleValidation(nameRef.current.id, nameRef.current.value) &&
        handleValidation(phoneRef.current.id, phoneRef.current.value) &&
        handleValidation(emailRef.current.id, emailRef.current.value)
      if (isAllValid) {
        dispatch(sendRequest(data))
        setIsRequestSent(true)
      } else {
        if (!handleValidation(companyRef.current.id, companyRef.current.value)) {
          companyRef.current.style.borderColor = RED_COLOR;
        }

        if (!handleValidation(nameRef.current.id, nameRef.current.value)) {
          nameRef.current.style.borderColor = RED_COLOR;
        }

        if (!handleValidation(phoneRef.current.id, phoneRef.current.value)) {
          phoneRef.current.style.borderColor = RED_COLOR;
        }

        if (!handleValidation(emailRef.current.id, emailRef.current.value)) {
          emailRef.current.style.borderColor = RED_COLOR;
        }
      }
    }
  }

  const getLocation = useCallback(async (): Promise<void> => {
    try {
      const res = await fetch('http://ip-api.com/json/')

      if (!res.ok) {
        throw new Error('Request failed')
      }

      const data = await res.json()

      setCountryCode(data.countryCode)
    } catch (err) {
      console.log(err)
    }
  },[])

  useEffect(() => {
    getLocation()
  },[getLocation])

  useEffect(() => {
    if (!!countryCode) {
      const isd = COUNTRIES.find((country) => 
        country.code === countryCode
      )
      if (!!isd) {
        setIsdCode(isd.dial_code)
      }
    }
  }, [countryCode])

  return (
    <div className="request_form__container">
      { !isRequestSent ?
        <>
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
                <input
                  ref={companyRef}
                  type="text"
                  id="company"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => handleInputChange(e, setCompany)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
              <div className="form__item">
                <label htmlFor="name">Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
              <div className="form__item">
                <label htmlFor="phone">Phone</label>
                <input
                  ref={phoneRef}
                  type="tel"
                  id="phone"
                  placeholder={isdCode}
                  value={phone}
                  onChange={(e) => handleInputChange(e, setPhone)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
              <div className="form__item">
                <label htmlFor="email">E-mail</label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
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
        </>
      : <RequestSent />
      }
    </div>
  )
}
