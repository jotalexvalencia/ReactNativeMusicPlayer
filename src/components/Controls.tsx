import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ControlsProps {
  tooglePlayPauseBtn: () => void; // Indica que tooglePlayPauseBtn es una función que no devuelve nada
  pause: boolean; // Indica que pause es un valor booleano
  playNextSong:() => void;
  playPrevSong:() => void;
}

const Controls: React.FC<ControlsProps> = ({ tooglePlayPauseBtn, pause, playNextSong, playPrevSong }) => {
  return (
    <View style={styles.container}>
      {/* prevbtn */}
      <TouchableOpacity onPress={playPrevSong}>
        <AntDesign name='banckward' size={32} color="#F9DDA4"/>
      </TouchableOpacity>

      {/* play/pause btn */}
      <TouchableOpacity style={styles.playPauseBtn} onPress={tooglePlayPauseBtn}>
        <AntDesign name={pause ? 'playcircleo' : 'pausecircleo'} size={32} color="#30336B"/>
      </TouchableOpacity>

      {/* nextbtn */}
      <TouchableOpacity onPress={playNextSong}>
        <AntDesign name='forward' size={32} color="#F9DDA4"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:   20
  },
  playPauseBtn: {
    width:   120,
    height:   120,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:   100,
    borderWidth:   20,
    borderColor: '#30336B',
    margin:   20
  }
});

export default Controls;
