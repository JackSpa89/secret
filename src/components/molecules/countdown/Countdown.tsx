import React, { useEffect, useState } from 'react';

import style from './Countdown.module.scss';

const useTicker = () => {
    const [ now, setNow ] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    const target = new Date('06/24/2023 16:00:00');
    const difference = target.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

const TickerSeparator = () => {
    return <div className={ style.separator }>:</div>;
};

type TickerCellProps = {
    label: string;
    value: number;
}

const TickerCell: React.FC<TickerCellProps> = ({
    label,
    value
}) => {
    const formattedValue = value < 10 ? `0${value}` : value.toString();

    return (
        <div className={ style.tickerCell }>
            <span className={ style.tickerCellValue }>{ formattedValue }</span>
            <span className={ style.tickerCellLabel }>{ label }</span>
        </div>
    );
};

export const Countdown = () => {
    const { days, hours, minutes, seconds } = useTicker();

    return (
        <div className={ style.tickerShell }>
            <TickerCell value={ days } label="Days" />
            <TickerSeparator />
            <TickerCell value={ hours } label="Hours" />
            <TickerSeparator />
            <TickerCell value={ minutes } label="Minutes" />
            <TickerSeparator />
            <TickerCell value={ seconds } label="Seconds" />
        </div>
    );
};
