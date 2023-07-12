
import React from 'react'
import FastImage from 'react-native-fast-image'
import { IMG_BASE_URL_W500 } from "~config";
import { styles } from './styles'

const Banner = ({ img }) => {
    return (
        <>

            <FastImage
                style={styles.image}
                source={{
                    uri: `${IMG_BASE_URL_W500}${img}`,
                    priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.immutable
                }}
                defaultSource={require('../../../assets/placeholderOne.png')}
                resizeMode={FastImage.resizeMode.cover}
            />
        </>
    )
}

export default Banner

