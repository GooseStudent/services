import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../reducers';
import {
  setFormField,
  addService,
  updateService,
  cancelEditing,
  setValidationErrors,
} from '../actions/actionCreators';
import { validateForm } from '../utils/validateForm';

const ServiceForm: React.FC = () => {
  const form = useSelector((state: RootState) => state.form);
  const services = useSelector((state: RootState) => state.services.items);
  const dispatch = useDispatch();

  const isEditing = form.editingId !== null;
  const editingService = isEditing
    ? services.find((s) => s.id === form.editingId)
    : null;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    dispatch(setFormField(name as 'name' | 'price', value));
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const errors = validateForm(form.name, form.price);
    if (Object.keys(errors).length > 0) {
      dispatch(setValidationErrors(errors));
      return;
    }

    const price = Number(form.price.trim());
    const name = form.name.trim();

    if (isEditing && form.editingId) {
      dispatch(updateService(form.editingId, name, price));
    } else {
      dispatch(addService(name, price));
    }

    dispatch(cancelEditing());
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Редактирование услуги' : 'Добавление услуги'}</h2>

      {isEditing && editingService && (
        <p>Редактируется: {editingService.name}</p>
      )}

      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Название услуги"
        />
        {form.errors.name && <p style={{ color: 'red' }}>{form.errors.name}</p>}
      </div>

      <div>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Цена"
        />
        {form.errors.price && <p style={{ color: 'red' }}>{form.errors.price}</p>}
      </div>

      <button type="submit">Save</button>

      {isEditing && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ServiceForm;