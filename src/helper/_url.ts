import Router from 'next/router';

import { Routes } from '~constants/routes';

export const navigateToHome = (): Promise<boolean> =>
    Router.push(Routes.ROOT);

export const navigateToPictures = (): Promise<boolean> =>
    Router.push(Routes.PICTURES);

export const navigateToVenue = (): Promise<boolean> =>
    Router.push(Routes.VENUE);

export const navigateToRsvp = (): Promise<boolean> =>
    Router.push(Routes.RSVP);
