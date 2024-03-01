import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AlbumDetailsProps {
  trackName: string;
  artistName: string;
}

const AlbumDetails = ({trackName, artistName}: AlbumDetailsProps) => {
  return (
    <View style={{justifyContent:'center'}}>
      <Text style={styles.name}>{artistName}</Text>
      <Text style={styles.name}>{trackName}</Text>
    </View>
  )
}

export default AlbumDetails

const styles = StyleSheet.create({
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#DAE0E2'
    }
})