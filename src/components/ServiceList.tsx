import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../reducers';
import {
  deleteService,
  startEditing,
  cancelEditing,
} from '../actions/actionCreators';

const ServiceList: React.FC = () => {
  const services = useSelector((state: RootState) => state.services.items);
  const editingId = useSelector((state: RootState) => state.form.editingId);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(deleteService(id));
    if (editingId === id) {
      dispatch(cancelEditing());
    }
  };

  const handleEdit = (service: { id: string; name: string; price: number }) => {
    dispatch(startEditing(service));
  };

  return (
    <div>
      <p>Всего услуг: {services.length}</p>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} — {service.price}₽
            <button
              onClick={() => handleEdit(service)}
              aria-label={`Редактировать ${service.name}`}
            >
              Редактировать
            </button>
            <button
              onClick={() => handleRemove(service.id)}
              aria-label={`Удалить ${service.name}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;