import * as React from 'react';
import Head from 'next/head';

import { Chapter } from '~components/atoms/Chapter/Chapter';
import { ImageText } from '~components/atoms/ImageText/ImageText';
import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './OurStory.module.scss';

const andagonText = 'They say that when one door closes another one opens. Throughout your lifetime many people will ' +
    'walk in and out of those doors and if you\'re lucky, you will find someone who walks in and stays. This is one of ' +
    'those stories. Peter and Angela met on a sunny day in May 2018 at the andagon headquarters in Cologne, Germany. ' +
    '\n \n Peter had originally declined the job offer because he wanted to live and work in Munich which is about 6' +
    ' hours away from Cologne. After numerous persuasion attempts by the tenacious recruiter Julian Sandig, Peter' +
    ' finally caved and accepted. He never knew that that single act would change his life forever.';

const movingInText = 'Angela had lived in Bonn which is approximately 60 minutes by train and was in desperate need of' +
    ' a change. She applied for a job as a Team Assistant through a personnel placement agency called adevis. Knowing' +
    ' full well that she would eventually have to move to Cologne, she accepted the temporary position in hopes of a' +
    ' fresh start. \n \n A couple months later, Angela found an amazing 2 bedroom apartment just 10 minutes away' +
    ' from andagon. At the same time, Peter was searching for a "roommate". \n One day at work Peter approached Angela' +
    ' and asked if she was still looking for someone to occupy the second room in the apartment... And she was. \n' +
    'They moved in together in August 2018.';

const thirdText = 'In June of 2019 the two were as thick as thieves. Peter wanted to do something special for ' +
    'Angela\'s birthday, so he booked them a romantic 3 day weekend getaway to Greece. \n' +
    'This was one of the sweetest gifts anyone had ever given her. At the time, she was struggling at work and ' +
    'contemplating changing jobs.';

const fourthText = 'Both Peter and Angela decided it was time for a  change. They moved to Düsseldorf in 2019 after' +
    ' Peter got a permanent position at the Douglas headquarters and Angela accepted a new position as a B2B Advisor' +
    ' at a language school called GoAcademy!';

const fifthText = 'In 2021 they spent Christmas in the US and took mock engagement photos. Angela was ill so Peter ' +
    'postponed the proposal till she was feeling better. He took her on an Easter spa vacation to Bad Oeynhausen ' +
    'where they spent 2 relaxing days at the sauna. After about 12 hours at the spa, Peter took a knee, professed ' +
    'his love and asked Angela to be his partner in crime till the end of their days.';

const sixthText = 'In Germany, you have to be married by a Justice of the peace in a courthouse or on a boat ' +
    ' before you can have a big wedding ... silly Germans. The two were ' +
    'married on July 8th, 2022 with their closest friends and family as their witnesses.';

const seventhText = 'They flew to Thailand a couple days later and spent 2 1/2 weeks exploring, creating memories, ' +
    'and visiting with friends.';

const eightText = 'Upon their return Angela said "Baby or Cat?"' +
    ' The couple welcomed their baby kitten Ginger Mumber to the family on August 16th, 2022.';

const ninthText = 'Our story doesn\'t end there though... To get the next chapter, please join us on June 24th, 2023 ' +
    'as we continue our happily ever after. \n 🥂\n \n \n';

export const OurStoryPage: React.FC = () => {
    return (
        <div className={ style.root }>
            <Head>
                <title>Our Story</title>
            </Head>
            <AppMenu />
            <div className={ style.root__title }>How they met</div>
            <Chapter chapterNumber={ 1 } text={ 'Once upon a time...' } />
            <ImageText imgSrc={ './peterAndagon.jpg' } secondImgScr={ './angelaAndagon.jpg' } text={ andagonText } />
            <Chapter chapterNumber={ 2 } text={ 'Moving in together' } />
            <ImageText imgSrc={ './movingIn.jpeg' } text={ movingInText } />
            <Chapter chapterNumber={ 3 } text={ 'First vacation' } />
            <ImageText imgSrc={ './firstVacation.jpeg' } text={ thirdText } />
            <Chapter chapterNumber={ 4 } text={ 'Düsseldorf' } />
            <ImageText imgSrc={ './duesseldorf.jpeg' } text={ fourthText } />
            <Chapter chapterNumber={ 5 } text={ 'Engagement' } />
            <ImageText imgSrc={ './mockEngagement.jpeg' } text={ fifthText } />
            <Chapter chapterNumber={ 6 } text={ 'Hitched on a boat' } />
            <ImageText imgSrc={ './courthouseWedding.jpeg' } text={ sixthText } />
            <Chapter chapterNumber={ 7 } text={ 'Honeymoon' } />
            <ImageText imgSrc={ './honeymoon.jpeg' } text={ seventhText } />
            <Chapter chapterNumber={ 8 } text={ 'Ginger' } />
            <ImageText imgSrc={ './ginger.jpeg' } text={ eightText } />
            <Chapter chapterNumber={ 9 } text={ 'Happily ever after' } />
            <ImageText imgSrc={ './theend.jpeg' } text={ ninthText } />
        </div>
    );
};

export default OurStoryPage;
