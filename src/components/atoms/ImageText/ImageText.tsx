import React from 'react';

import style from './ImageText.module.scss';

type LinearWithValueLabelProps = {
    imgSrc: string;
    secondImgScr?: string
    text: string;
}

export const ImageText: React.FC<LinearWithValueLabelProps> = ({
    imgSrc,
    secondImgScr,
    text
}) => {
    return (
        <div className={ style.root }>
            <div className={ style.root__imgWrapper }>
                <img className={ secondImgScr ? style.root__img2 : style.root__img } src={ imgSrc } alt='chapterImage' />
                { secondImgScr && <img className={ style.root__img2 } src={ secondImgScr } alt='chapterSecondImage' /> }
            </div>
            <div className={ style.root__text }>{text}</div>
        </div>
    );
};
