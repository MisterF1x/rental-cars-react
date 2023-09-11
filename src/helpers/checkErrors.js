import toast from 'react-hot-toast';
import { errorMessage } from '../constant/errorMessage';

export const checkErrors = (brand, price, values) => {
  if (!brand && !price && !values.from && !values.to) {
    return toast.error(errorMessage.all);
  }

  if (parseInt(values.from) >= parseInt(values.to)) {
    return toast.error(errorMessage.mileage);
  }

  if (
    (!parseInt(values.from) || !parseInt(values.to)) &&
    (values.from || values.to)
  ) {
    return toast.error(errorMessage.number);
  }

  return null;
};
