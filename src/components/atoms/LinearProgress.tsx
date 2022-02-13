import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

type LinearProgressProps = {
    value: number;
}

const LinearProgressWithLabel: React.FC<LinearProgressProps> = ({
    value
}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={ value } />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};

type LinearWithValueLabelProps = {
    progress: number;
}

export const LinearWithValueLabel: React.FC<LinearWithValueLabelProps> = ({
    progress
}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={ progress } />
        </Box>
    );
};
