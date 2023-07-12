import React, { useState, useCallback, useImperativeHandle } from "react";
import { Dimensions, Pressable } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Portal from "../Portal/Portal";
import { styles } from './styles'
const { height } = Dimensions.get('window')

const stub = () => null;

const YtPlayer = React.forwardRef(({ videoId }, ref) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    useImperativeHandle(ref, () => ({
        start: () => setPlaying(true),
        stop: () => setPlaying(false)
    }));

    if (!playing) {
        return null
    }
    if (!videoId) {
        alert("Video not available.")
        return null;
    }

    return (
        <Portal>
            <Pressable style={styles.container} onPress={() => setPlaying(false)}>
                <Pressable onPress={stub}>
                    <YoutubePlayer
                        height={height / 3 + 3}
                        play={playing}
                        videoId={videoId}
                        onChangeState={onStateChange}
                    />
                </Pressable>
            </Pressable>
        </Portal>
    );
})

export default YtPlayer