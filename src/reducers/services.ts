import { nanoid } from 'nanoid';
import { ADD_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../actions/actionTypes';
import type { Service } from '../actions/actionCreators';

interface ServicesState {
  items: Service[];
}

const initialState: ServicesState = {
  items: [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  ],
};

export default function servicesReducer(
  state: ServicesState = initialState,
  action: any
): ServicesState {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return {
        ...state,
        items: [...state.items, { id: nanoid(), name, price: Number(price) }],
      };
    }

    case UPDATE_SERVICE: {
      const { id, name, price } = action.payload;
      return {
        ...state,
        items: state.items.map((service) =>
          service.id === id ? { ...service, name, price: Number(price) } : service
        ),
      };
    }

    case DELETE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((service) => service.id !== id),
      };
    }

    default:
      return state;
  }
}