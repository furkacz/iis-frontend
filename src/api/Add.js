import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async (requestData, queryParams) => {
  if (!validators.requests.Add.isValid(requestData)) {
    throw new errors.SchemaParsingError('Error sending Add request - invalid request schema');
  }

  const response = await api.post(endpoints.Add, requestData, {
    params: { ...queryParams },
    timeout: parseInt(process.env.VUE_APP_API_PURCHASE_TIMEOUT, 10),
  });

  if (!validators.responses.Add.isValid(response.data)) {
    throw new errors.SchemaParsingError('Error parsing Add response - invalid response schema');
  } else {
    return response.data;
  }
};
