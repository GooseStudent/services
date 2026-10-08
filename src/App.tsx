import React from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Управление услугами</h1>
      <ServiceForm />
      <ServiceList />
    </div>
  );
};

export default App;