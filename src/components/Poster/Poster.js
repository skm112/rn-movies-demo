import React, { useRef, useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { IMG_BASE_URL_W500, IMG_BASE_URL_ORIGINAL } from "~config";
import {styles} from './styles'

const Poster = ({ img, posterType = 'one' }) => {
    const fastImageRef = useRef(null)
    const [errorCount, setErrorCount] = useState(0)

    useEffect(() => {
        return () => {
            if (fastImageRef && fastImageRef.current) {
                fastImageRef.current?.clearMemoryCache();
                //    fastImageRef.current?.clearDiskCache()
            }

        }
    }, [])


    const size = posterType == 'one' ? styles.imageSizeOne : styles.imageSizeTwo
    const defaultSource = posterType == 'one' ? require('../../../assets/placeholderOne.png') : require('../../../assets/placeholderTwo.png')

    return (
        <>

            <FastImage
                ref={fastImageRef}
                style={[styles.image, size]}
                source={{
                    uri: `${IMG_BASE_URL_W500}${img}?reload=${errorCount}`,
                    priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.immutable,

                }}
                resizeMode={posterType == 'one' ? FastImage.resizeMode.cover : FastImage.resizeMode.stretch}
                defaultSource={defaultSource}
                onError={(e) => {
                   if (errorCount <= 3) {
                        setErrorCount(count => count + 1)
                    }
                }}
            />
        </>
    )
}

export default Poster

