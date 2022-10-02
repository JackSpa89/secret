import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { onValue } from '@firebase/database';
import ListItem from '@mui/joy/ListItem';
import { List, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ref } from 'firebase/database';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import { Guest } from '../../../types/guest';

import style from './GuestList.module.scss';

import { database } from '~helper/firebase';

type ItemProps = {
    guest: Guest;
}

const Item: React.FC<ItemProps> = ({
    guest
}) => {
    return (guest.willAttend
        ? <ListItem className={ style.guestList__item }>
            <ListItemText
                key={ guest.name }
                primary={ guest.name }
                secondary={
                    <Fragment>
                        <div className={ style.guestList__line }>
                            <div>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Allergies:
                                </Typography>
                                { `  ${guest.allergies !== '' ? guest.allergies : 'none'} `}
                            </div>
                            <div>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Plus ones:
                                </Typography>
                                { `  ${guest.plusOne[0].name !== '' ? guest.plusOne.map(plus => plus.name).join(', ') : 'none'} `}
                            </div>
                        </div>
                    </Fragment>
                }
            />
        </ListItem>
        : <ListItem className={ style.guestList__item }>
            <ListItemText
                primary={ guest.name }
            />
        </ListItem>
    );
};

export const GuestListPage: React.FC = () => {
    const [ guestList, setGuestList ] = useState<Guest[]>([]);
    const [ counter, setCounter ] = useState<number>(0);

    useEffect(() => {
        const dataRef = ref(database);

        onValue(dataRef, (snapshot) => {
            const tmpGuestList = Object.values(snapshot.val()) as Guest [];
            const guestCounter = tmpGuestList.filter(tmpGuest => tmpGuest.willAttend).length;

            const plusOnecounter = tmpGuestList
                .filter(tmpGuest => tmpGuest.willAttend)
                .map(tmp => tmp.plusOne[0].name === '' ? 0 : tmp.plusOne.length)
                .reduce((a, b) => a + b, 0);

            setCounter(guestCounter + plusOnecounter);
            setGuestList(tmpGuestList);
        });
    }, []);

    return (
        <div className={ style.guestList }>
            <Head>
                <title>Guest List</title>
            </Head>
            <AppMenu />
            <div className={ style.guestList__title }>Guest List</div>
            <div className={ style.guestList__title }>Counter: {counter}</div>
            <div className={ style.guestList__attend }>Will attend</div>
            <List>
                {
                    guestList.filter(tmp => tmp.willAttend).map(tmp => {
                        return (
                            <Item guest={ tmp } />
                        );
                    })
                }
            </List>
            <Divider light />
            <div className={ style.guestList__attend }>Will not attend</div>
            <List>
                {
                    guestList.filter(tmp => !tmp.willAttend).map(tmp => {
                        return (
                            <Item guest={ tmp } />
                        );
                    })
                }
            </List>
        </div>
    );
};

export default GuestListPage;
