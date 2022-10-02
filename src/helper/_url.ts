import Router from 'next/router';

import { Routes } from '~constants/routes';

export const navigateToHome = (): Promise<boolean> =>
    Router.push(Routes.ROOT);

export const navigateToPictures = (): Promise<boolean> =>
    Router.push(Routes.PICTURES);

export const navigateToOurStory = (): Promise<boolean> =>
    Router.push(Routes.OUR_STORY);

export const navigateToRsvp = (): Promise<boolean> =>
    Router.push(Routes.RSVP);

export const navigateToGuestList = (): Promise<boolean> =>
    Router.push(Routes.GUEST_LIST);
