import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Countdown } from '~components/molecules/countdown/Countdown';

import style from './AppMenu.module.scss';

import { navigateToHome, navigateToPictures, navigateToRsvp, navigateToVenue } from '~helper/_url';
import { isMobile } from '~helper/windowsize';

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
                    { !isMobile() && <Countdown />}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
