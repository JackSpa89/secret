import React from 'react';

import style from './Chapter.module.scss';

type LinearWithValueLabelProps = {
    chapterNumber: number;
    text: string;
}

export const Chapter: React.FC<LinearWithValueLabelProps> = ({
    chapterNumber,
    text
}) => {
    return (
        <div className={ style.root }>
            <div className={ style.root__chapterNumber }>Chapter {chapterNumber}: </div>
            <div className={ style.root__text }>{text}</div>
        </div>
    );
};
