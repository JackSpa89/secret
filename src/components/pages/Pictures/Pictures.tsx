import * as React from 'react';
import { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref, uploadBytesResumable } from '@firebase/storage';
import { PhotoCamera } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Head from 'next/head';

import { LinearWithValueLabel } from '~components/atoms/LinearProgress';
import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './Pictures.module.scss';

import { storage } from '~helper/firebase';
import { isMobile } from '~helper/windowsize';

export const PicturesPage: React.FC = () => {
    const [ imagesAsFile, setImagesAsFile ] = useState<File[]>([]);
    const [ imagesList, setImageList ] = useState<string[]>([]);
    const [ localImagesList, setLocalImageList ] = useState<string[]>([]);
    const [ progress, setProgress ] = useState(0);

    const choosePicture = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const files = target.files;

        setImagesAsFile(Array.prototype.slice.call(files));
        setLocalImageList(Array.prototype.slice.call(files));
    };

    const uploadPictures = (e: any) => {
        e.preventDefault();
        imagesAsFile.forEach(imageAsFile => {
            const storageRef = ref(storage, imageAsFile.name);
            const uploadTask = uploadBytesResumable(storageRef, imageAsFile);

            uploadTask.on('state_changed', snapshot => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    console.log(`File available at: ${url}`);
                    setImageList([ ...imagesList, url ]);
                });
            }
            );
        });
    };

    useEffect(() => {
        const tmp : string[] = [];

        listAll(ref(storage)).then(ref => {
            ref.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setImageList([ ...tmp, url ]);
                    tmp.push(url);
                });
            });
        });
    }, []);

    return (
        <div className="picturespage">
            <Head>
                <title>Pictures</title>
            </Head>
            <AppMenu />
            <div className={ style.pictures }>
                <Stack className={ style.pictures__stack } justifyContent="flex-start" direction="column" alignItems="center">
                    <IconButton className={ style.pictures__stack__upload } size="large" color="primary" aria-label="upload picture" component="label">
                        <input onChange={ choosePicture } hidden accept="image/*" type="file" multiple={ true } />
                        <PhotoCamera />
                    </IconButton>
                    <Button className={ style.pictures__stack__choosePicture } variant="contained" component="label">
                        Upload {localImagesList.length} images
                        <input onClick={ uploadPictures } hidden accept="image/*" multiple type="file" />
                    </Button>
                </Stack>
                {
                    progress > 0 && progress < 100 && <LinearWithValueLabel progress={ progress } />
                }
                <ImageList sx={{ width: '100%' }} cols={ isMobile() ? 1 : 4 }>
                    {
                        imagesList.length > 0 && imagesList.map((image, key) => {
                            return <ImageListItem key={ key }>
                                <img
                                    alt="weddingPicture"
                                    src={ image }
                                    loading="lazy"
                                />
                            </ImageListItem>;
                        })
                    }
                </ImageList>
            </div>
        </div>
    );
};

export default PicturesPage;
