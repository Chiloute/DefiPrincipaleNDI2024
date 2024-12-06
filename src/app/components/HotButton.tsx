'use client';

import React from 'react';
import styles from './HotButton.module.css'; // Import des styles CSS modules
import { useStore } from '../../store/temperature';

const HotButton: React.FC = () => {

    const temperature = useStore((state) => state.temperature);
    const increaseTemperature = useStore((state) => state.increment);
    const decreaseTemperature = useStore((state) => state.decrement);

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
