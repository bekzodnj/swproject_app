import {GET_SERVICES} from '../actions/services';

const initialState = {
  services: [
    {
      id: 1,
      name: 'Geometry Starter',
      price: 100,
      info:
        'During the course we start from base and look into more practical problem solving skills...',
    },
    {
      id: 2,
      name: 'Algorithms Course',
      price: 150,
      info:
        'The course is oriented for students who wants to learn more advanced algorithms and data structures',
    },
    {
      id: 3,
      name: 'Algorithms Course',
      price: 150,
      info:
        'The course is oriented for students who wants to learn more advanced algorithms and data structures',
    },
    {
      id: 4,
      name: 'Algorithms Course',
      price: 150,
      info:
        'The course is oriented for students who wants to learn more advanced algorithms and data structures',
    },
    {
      id: 5,
      name: 'Algorithms Course',
      price: 150,
      info:
        'The course is oriented for students who wants to learn more advanced algorithms and data structures',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return state;
  }

  return state;
};
