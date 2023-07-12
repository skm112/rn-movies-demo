import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image'
import { IMG_BASE_URL_W500, IMG_BASE_URL_ORIGINAL } from "~config";
import { useNavigation } from '@react-navigation/core';
import { CarouselBannerStyles } from './styles';

const CarouselBanner = ({ data, mediaType }) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()
    const styles = CarouselBannerStyles(width)

    const renderItem = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => navigation?.navigate("MediaDetail", { id: item.id, mediaType })}
            >
                <FastImage
                    style={styles.itemContainer}
                    source={{
                        uri: `${IMG_BASE_URL_W500}${item?.backdrop_path}`,
                        priority: FastImage.priority.normal,
                        cache: FastImage.cacheControl.immutable
                    }}
                    resizeMode={FastImage.resizeMode.cover}

                />
            </Pressable>
        )
    }



    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Carousel
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={data}
                    scrollAnimationDuration={3000}
                    renderItem={renderItem}

                />
            </View>
        </SafeAreaView>
    )
}

CarouselBanner.defaultProps = {
    data: []
}

export default CarouselBanner

