import toast from 'react-hot-toast';
import { errorMessage } from '../constant/errorMessage';

export const checkErrors = (brand, price, values) => {
  if (!brand && !price && !values.from && !values.to) {
    return toast.error(errorMessage.all);
  }
  const fromNumber = parseFloat(values.from);
  const toNumber = parseFloat(values.to);

  if (values.from.trim() !== '' || values.to.trim() !== '') {
    if (!values.from || !values.to) {
      return toast.error(errorMessage.required);
    } else if (isNaN(fromNumber) || isNaN(toNumber)) {
      return toast.error(errorMessage.number);
    } else if (fromNumber >= toNumber) {
      return toast.error(errorMessage.mileage);
    }
  }

  return null;
};
