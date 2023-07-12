import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState, useRef, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Header, Banner, Paragraph, YtPlayer } from '../../components'
import { useTheme, useRoute } from '@react-navigation/native'
import TitleHead from './TitleHead'
import SubTabs from './SubTabs'
import { getApi } from '../../apis'
import { MediaDetailStyles } from './styles'

const MediaDetail = () => {
    const { colors } = useTheme();
    const { params } = useRoute();
    const [mediaData, setMediaData] = useState({})
    const [videoData, setVideoData] = useState([])
    const styles = MediaDetailStyles(colors);
    const ytPlayerRef = useRef(null);

    useEffect(() => {
        let isActive = true
        const fetchMediaDetails = async () => {
            if (params && params.id && params.mediaType) {
                let resp = await getApi(`${params.mediaType}/${params.id}`)
                if (isActive) {
                    if (resp?.data) {
                        setMediaData(resp.data)
                    }
                }

            }

        }
        const fetchVideos = async () => {
            if (params && params.id && params.mediaType) {
                let resp = await getApi(`${params.mediaType}/${params.id}/videos`)
                console.log(resp.data)
                if (isActive) {
                    if (resp?.data?.results) {
                        setVideoData(resp.data.results)
                    }
                }
            }

        }
        fetchMediaDetails()

        fetchVideos()
        return () => {
            isActive = false
        }
    }, [])

    const trailerId = useMemo(() => {
        let result = null
        if (videoData?.length) {
            const indexOfObj = videoData.findIndex((obj) => obj.type == "Trailer")
            if (indexOfObj !== -1) {
                result = videoData[indexOfObj].key

            }
        }
        return result

    }, [videoData])

    const playTrailer = () => {
        ytPlayerRef.current?.start()
    }

    return (<>
        <YtPlayer ref={ytPlayerRef} videoId={trailerId}  />
        <ScrollView contentContainerStyle={styles.container} >
            <Banner img={mediaData?.backdrop_path ?? ''} />
            <TitleHead title={params?.mediaType == 'movie' ? mediaData?.title : mediaData?.name} onPress={playTrailer} />
            <Paragraph content={mediaData?.overview ?? ''} />
            <SubTabs data={mediaData ?? {}} mediaType={params?.mediaType} />
        </ScrollView>
    </>
    )
}

export default MediaDetail;