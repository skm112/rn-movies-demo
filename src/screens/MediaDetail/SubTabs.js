import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getApi } from '../../apis'
import { HorizontalMediaListSecond, MediaCard, SubHeader, ListItem, ListItemRating } from '../../components';
import { FlashList } from "@shopify/flash-list";
import { SubTabsStyles } from './styles';


const FirstRoute = ({ mediaType, relatedMedia }) => {
    const { colors } = useTheme();


    return (
        <View style={{ flex: 1, marginHorizontal: 8 }} >
            {/* <Text style={{ color: 'white' }}>{JSON.stringify(mediaCredits, null, 4)}</Text> */}
            <HorizontalMediaListSecond title={"You Might Like"} mediaList={relatedMedia ?? []} mediaType={mediaType} />
        </View>
    )
}

const SecondRoute = ({ data, mediaCredits }) => {
    const { colors } = useTheme()
    const genres = useMemo(() => {
        let result = ''
        const _genres = data?.genres ?? []
        const genresLength = _genres.length
        _genres.forEach((val, i) => {
            if (genresLength - 1 === i) {
                result += `${val?.name}`

            } else {
                result += `${val?.name}, `

            }
        })
        return result
    }, [data])

    const renderItem = ({ item, index }) => {

        return (
            <View style={{ flex: 1, marginBottom: 8 }}>
                <MediaCard
                    poster={item?.profile_path}
                    posterType={'two'}
                />
                <View style={{ marginHorizontal: 8 }}>
                    <Text numberOfLines={2} style={{ textAlign: 'center', fontSize: 14, color: colors.textOne }}>{item?.name}</Text>
                </View>
            </View>
        )
    };

    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`

    return (
        <>
            {/* <Text style={{ color: 'white' }}>{JSON.stringify(data, null, 4)}</Text> */}
            <ListItem title="Genres" content={genres} />
            <ListItem title="Director" content={"Tuva Novotny"} />
            <ListItem title="Producer" content={"Elisabeth Kvithyll"} />
            <ListItemRating title="Customer Rating" rating={data?.vote_average} />
            <SubHeader
                containerStyle={{ marginHorizontal: 8 }}
                title={"Caste & Crew"}
                hideIcon={true}
            />
            <View style={{ minHeight: 8 }}>
                <FlashList
                    scrollEnabled={false}
                    keyboardDismissMode='on-drag'
                    estimatedItemSize={200}
                    numColumns={3}
                    contentContainerStyle={{ paddingHorizontal: 8 }}
                    data={mediaCredits}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </View>

        </>
    )
};








const SubTabs = ({ data, mediaType }) => {
    const { colors } = useTheme()
    const [currentTab, setCurrentTab] = useState('more_details');
    const [relatedMedia, setRelatedMedia] = useState([])
    const [mediaCredits, setMediaCredits] = useState([])


    const styles = SubTabsStyles(colors)

    useEffect(() => {
        let isActive = true
        const fetchRelatedMedia = async () => {
            if (data && data.id && mediaType) {
                let resp = await getApi(`${mediaType}/${data?.id}/similar`)
                if (isActive) {
                    if (resp?.data?.results) {
                        setRelatedMedia(resp.data.results)
                    }
                }

            }

        }

        const fetchCredits = async () => {
            if (data && data.id && mediaType) {
                let resp = await getApi(`${mediaType}/${data?.id}/credits`)
                if (isActive) {
                    if (resp?.data) {
                        setMediaCredits(resp.data.cast)
                    }
                }

            }

        }

        fetchRelatedMedia();
        fetchCredits();

        return () => {
            isActive = false
        }

    }, [data?.id])

    const tabPressed = (tab) => {
        if (tab != currentTab) {
            setCurrentTab(tab)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.tabBar}>
                <Pressable style={[styles.tab, currentTab == 'more_details' ? styles.activeTab : {}]} onPress={() => tabPressed('more_details')}>
                    <Text style={[styles.tabText, currentTab == 'more_details' ? styles.activeTabText : {}]}>
                        More Details
                    </Text>
                </Pressable>
                <Pressable style={[styles.tab, currentTab == 'related_movies' ? styles.activeTab : {}]} onPress={() => tabPressed('related_movies')}>
                    <Text style={[styles.tabText, currentTab == 'related_movies' ? styles.activeTabText : {}]}>
                        Related Movies
                    </Text>
                </Pressable>

            </View>
            {currentTab == 'more_details' ? <SecondRoute data={data} mediaCredits={mediaCredits} /> : null}
            {currentTab == 'related_movies' ? <FirstRoute
                mediaType={mediaType}
                relatedMedia={relatedMedia} /> : null}

        </View>
    );
}

export default SubTabs;