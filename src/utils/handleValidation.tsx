export const handleValidation = (
  id: string,
  value: string
): boolean | undefined => {
  const companyMaxChar = 79;
  const nameMaxChar = 49;
  const companyRegExp = /^([^0-9]*)$/;
  const phoneRegExp = /^\+[0-9]{1,}$/;
  const emailRegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (id === 'company') {
    return value.length > 0 && value.length <= companyMaxChar && companyRegExp.test(value)
  }

  if (id === 'name') {
    return value.length > 0 && value.length <= nameMaxChar
  }

  if (id === 'phone') {
    return phoneRegExp.test(value)
  }

  if (id === 'email') {
    return emailRegExp.test(value)
  }
} 
