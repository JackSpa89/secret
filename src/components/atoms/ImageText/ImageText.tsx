import React from 'react';

import style from './ImageText.module.scss';

type LinearWithValueLabelProps = {
    imgSrc: string;
    text: string;
}

export const ImageText: React.FC<LinearWithValueLabelProps> = ({
    imgSrc,
    text
}) => {
    return (
        <div className={ style.root }>
            <img className={ style.root__img } src={ imgSrc } alt='chapterImage' />
            <div className={ style.root__text }>{text}</div>
        </div>
    );
};
