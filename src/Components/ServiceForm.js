import React, { useState, useEffect } from "react";
import '../CSS/style.css'

const ServiceForm = ({ addService, isEditing, currentService, updateService }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (isEditing && currentService) {
            setName(currentService.name);
            setDescription(currentService.description);
            setPrice(currentService.price);
        }
    }, [isEditing, currentService]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !price) return alert('All fields are required.');

        if (isEditing) {
            updateService({ name, description, price });
        } else {
            addService({ name, description, price})
        }

        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="service-form">
            <label className="form-label">Service Form</label>
            <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input" />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input" />
            <button type="submit" className="form-button">{isEditing ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default ServiceForm;