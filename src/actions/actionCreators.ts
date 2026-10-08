import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  SET_FORM_FIELD,
  START_EDITING,
  CANCEL_EDITING,
  CLEAR_FORM,
  SET_VALIDATION_ERRORS,
} from './actionTypes';

export interface Service {
  id: string;
  name: string;
  price: number;
}

export const addService = (name: string, price: number) => ({
  type: ADD_SERVICE,
  payload: { name, price },
});

export const updateService = (id: string, name: string, price: number) => ({
  type: UPDATE_SERVICE,
  payload: { id, name, price },
});

export const deleteService = (id: string) => ({
  type: DELETE_SERVICE,
  payload: { id },
});

export const setFormField = (field: 'name' | 'price', value: string) => ({
  type: SET_FORM_FIELD,
  payload: { field, value },
});

export const startEditing = (service: Service) => ({
  type: START_EDITING,
  payload: { service },
});

export const cancelEditing = () => ({
  type: CANCEL_EDITING,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const setValidationErrors = (errors: { name?: string; price?: string }) => ({
  type: SET_VALIDATION_ERRORS,
  payload: { errors },
});