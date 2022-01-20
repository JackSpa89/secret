import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import style from './AppMenu.module.scss';

import { navigateToHome, navigateToPictures, navigateToRsvp, navigateToVenue } from '~helper/_url';

export const AppMenu: React.FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        className={ style.appMenu__logo }
                        variant="h6"
                        noWrap
                    >
                        Wedding
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            className={ style.appMenu__button }
                            onClick={ navigateToHome }
                        >
                            Home
                        </Button>
                        <Button
                            className={ style.appMenu__button }
                            onClick={ navigateToPictures }
                        >
                            Pictures
                        </Button>
                        <Button
                            className={ style.appMenu__button }
                            onClick={ navigateToVenue }
                        >
                            Venue
                        </Button>
                        <Button
                            className={ style.appMenu__button }
                            onClick={ navigateToRsvp }
                        >
                            Rsvp
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
