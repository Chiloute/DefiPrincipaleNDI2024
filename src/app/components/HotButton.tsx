'use client';

import React, { useState } from 'react';
import styles from './HotButton.module.css'; // Import des styles CSS modules

const HotButton: React.FC = () => {
    const [temperature, setTemperature] = useState<number>(37);

    const increaseTemperature = () => setTemperature((prev) => prev + 1);
    const decreaseTemperature = () => setTemperature((prev) => prev - 1);

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
