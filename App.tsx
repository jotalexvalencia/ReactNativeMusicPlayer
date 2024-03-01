import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import AlbumCover from './src/components/AlbumCover';
import AlbumDetails from './src/components/AlbumDetails';
import Controls from './src/components/Controls';
import { TRACKS } from './src/components/tracks-data';

const App = () => {
 const [selectedTrack, setSelectedTrack] = useState(0);
 const [pause, setPause] = useState(false);

 const currentTrack = TRACKS[selectedTrack];

 function togglePlayPauseBtn() {
    setPause(!pause);
 }

 function playNextSong() {
    if (selectedTrack === TRACKS.length - 1) {
      setSelectedTrack(0);
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
 }

 function playPrevSong() {
    if (selectedTrack === 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
 }

 function handleVideoEnd() {
    playNextSong();
 }

 return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <AlbumCover albumCover={currentTrack.albumArtUrl} />
        <AlbumDetails trackName={currentTrack.title} artistName={currentTrack.artist} />
        <Controls tooglePlayPauseBtn={togglePlayPauseBtn} pause={pause} playNextSong={playNextSong} playPrevSong={playPrevSong} />
        <Video 
          source={{uri: currentTrack.audioUrl}} 
          audioOnly={true} 
          paused={pause} 
          repeat={false} 
          onEnd={handleVideoEnd} 
        />
      </View>
    </>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#2B2B52',
 },
});

export default App;

