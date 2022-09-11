import * as React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CastleIcon from '@mui/icons-material/Castle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Countdown } from '~components/molecules/countdown/Countdown';

import style from './AppMenu.module.scss';

import { navigateToHome, navigateToOurStory, navigateToPictures, navigateToRsvp } from '~helper/_url';
import { isMobile } from '~helper/windowsize';

export const AppMenu: React.FC = () => {
    const fontSize = 30;

    return (
        <AppBar className={ style.appMenu } position="static">
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
                        <CastleIcon sx={{ fontSize }} />
                    </Button>
                    <Button
                        className={ style.appMenu__button }
                        onClick={ navigateToPictures }
                    >
                        <AddAPhotoIcon sx={{ fontSize }} />
                    </Button>
                    <Button
                        className={ style.appMenu__button }
                        onClick={ navigateToOurStory }
                    >
                        <AutoStoriesIcon sx={{ fontSize }} />
                    </Button>
                    <Button
                        className={ style.appMenu__button }
                        onClick={ navigateToRsvp }
                    >
                        <HowToRegIcon sx={{ fontSize }} s />
                    </Button>
                    { !isMobile() && <Countdown />}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
