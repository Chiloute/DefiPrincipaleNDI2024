'use client';

import React, { useContext } from 'react';
import styles from './HotButton.module.css'; // Import des styles CSS modules
import useTempContext from '../page';
import { useStore } from '../page';


const minval = 0;
const maxval = 4;

const HotButton: React.FC = () => {

    const temperature = useStore((state) => state.temperature);
    const increment = useStore(state => state.increment);
    const decrement = useStore(state => state.decrement);
    const increaseTemperature = async ()  => {if (temperature < maxval) increment();};
    const decreaseTemperature = async () => {if (temperature > minval) decrement();};

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
