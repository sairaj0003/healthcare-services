import React, { useState } from 'react';
import ServiceList from './Components//ServiceList';
import ServiceForm from './Components/ServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updateService) => {
    const updateServices = services.map((service, index) => (
      index === currentIndex ? updateService : service
    ));
    setServices(updateServices);
    setIsEditing(false);
    setCurrentService(null);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const editService = (index) => {
    setCurrentService(services[index]);
    setCurrentIndex(index);
    setIsEditing(true);
  }

  return (
    <div>
      <h1>Healthcare Services</h1>
      <ServiceForm 
        addService={addService}
        isEditing={isEditing}
        currentService={currentService}
        updateService={updateService}
      />
      <ServiceList
        services={services}
        onEdit={editService}
        onDelete={deleteService}
      />
    </div>
  );
}

export default App;
