import {GET_SERVICES} from '../actions/services';
import {sampleData} from '../subjectData';

const initialState = sampleData;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return state;
  }

  return state;
};
