import {
  SET_FORM_FIELD,
  START_EDITING,
  CANCEL_EDITING,
  CLEAR_FORM,
  SET_VALIDATION_ERRORS,
} from '../actions/actionTypes';

interface FormState {
  name: string;
  price: string;
  editingId: string | null;
  errors: {
    name?: string;
    price?: string;
  };
}

const initialState: FormState = {
  name: '',
  price: '',
  editingId: null,
  errors: {},
};

export default function formReducer(
  state: FormState = initialState,
  action: any
): FormState {
  switch (action.type) {
    case SET_FORM_FIELD: {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
        errors: { ...state.errors, [field]: undefined },
      };
    }

    case START_EDITING: {
      const { service } = action.payload;
      return {
        name: service.name,
        price: String(service.price),
        editingId: service.id,
        errors: {},
      };
    }

    case CANCEL_EDITING:
    case CLEAR_FORM:
      return initialState;

    case SET_VALIDATION_ERRORS: {
      const { errors } = action.payload;
      return { ...state, errors };
    }

    default:
      return state;
  }
}