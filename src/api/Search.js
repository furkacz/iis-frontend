import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async (requestData) => {
  if (!validators.requests.Search.isValid(requestData)) {
    throw new errors.SchemaParsingError('Error sending Search request - invalid request schema');
  }

  const response = await api.post(endpoints.Search, requestData, {
    timeout: parseInt(process.env.VUE_APP_API_PURCHASE_TIMEOUT, 10),
  });

  if (!validators.responses.Search.isValid(response.data)) {
    throw new errors.SchemaParsingError('Error parsing Search response - invalid response schema');
  } else {
    return response.data.results;
  }
};
