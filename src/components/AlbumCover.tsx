import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

interface AlbumCoverProps {
 albumCover: string;
}

export default function AlbumCover({ albumCover }: AlbumCoverProps) {
 return (
    <View style={styles.container}>
      <Image
        source={{ uri: albumCover }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    margin: 10,
    width: width,
    height: 300,
    borderRadius: 5,
    backgroundColor: 'transparent', 
 },
 image: {
    width: '100%',
    height: '100%',
    borderRadius: 5, 
 },
});
