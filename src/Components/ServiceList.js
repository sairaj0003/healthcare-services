import React from "react";
import '../CSS/style.css'

const ServiceList = ({ services, onEdit, onDelete }) => {
    return (
        <div className="cards">
            <h2>Services</h2>
            <div className="cards-container">
                {services.length === 0 ? (
                    <p>No services found!</p>
                ) : (
                    services.map((service, index) => (
                        <div key={index} className="card">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <p>Rs. {service.price} /-</p>
                            <button onClick={() => onEdit(index)}>Edit</button>
                            <button onClick={() => onDelete(index)}>Delete</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ServiceList;