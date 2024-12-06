'use client';

import React, { useState } from 'react';
import './HotButton.module.css'; // Assurez-vous d'avoir ce fichier dans le bon chemin.

const HotButton: React.FC = () => {
    const [temperature, setTemperature] = useState<number>(37);

    const increaseTemperature = () => setTemperature(temperature + 1);
    const decreaseTemperature = () => setTemperature(temperature - 1);

    return (
        <div className="hot-button-overlay">
            <button className="hot-button" onClick={increaseTemperature}>
                +
            </button>
            <div className="hot-temperature">
                {temperature}°C
            </div>
            <button className="hot-button" onClick={decreaseTemperature}>
                -
            </button>
        </div>
    );
};

export default HotButton;
