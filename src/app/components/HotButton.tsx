'use client';

import React, { useState } from 'react';
import styles from './HotButton.module.css'; // Import des styles CSS modules

const minval = 0;
const maxval = 4;

const HotButton: React.FC = () => {
    const [temperature, setTemperature] = useState<number>(0);

    const increaseTemperature = async ()  => {if (temperature < maxval) setTemperature((prev) => prev + 1);};
    const decreaseTemperature = async () => {if (temperature > minval) setTemperature((prev) => prev - 1);};

    return (
        <div className={styles.hotButtonContainer}>
            <button className={styles.hotButton} onClick={increaseTemperature}>
                +
            </button>
            <div className={styles.hotTemperature}>
                {temperature}°C
            </div>
            <button className={styles.hotButton} onClick={decreaseTemperature}>
                -
            </button>
        </div>
    );
};

export default HotButton;
