import './app';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';
import Video from 'react-native-video';
export default class MusicPlayer extends Component {
  componentWillMount() {
      // let dirs = RNFetchBlob.fs.dirs;
      // RNFetchBlob
      // .config({
      //   // by adding this option, the temp files will have a file extension
      //   path: dirs.DocumentDir + '/song.mp3'
      // })
      // .fetch('GET', 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab', {
      //   //some headers ..
      // })
      // .then((res) => {
      //   // the temp file path with file extension `png`
      //   console.log('The file saved to ', res.path())
      //   // Beware that when using a file path as Image source on Android,
      //   // you must prepend "file://"" before the file path
      //   // imageView = <Image source={{ uri : Platform.OS === 'android' ? 'file://' + res.path()  : '' + res.path() }}/>
      // })
  }
  state = {muted: false}
  remoteUrl = 'https://cf-media.sndcdn.com/OODNEECGc5YF.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vT09ETkVFQ0djNVlGLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0ODU3MTEyMDl9fX1dfQ__&Signature=N4GZQm8usoIBffWvy4-7xOzE5Ab0jm0GE7aam4PQ0e4ULS-pIZlsKl7z8~EfP5zdWhqeLPGl~2~cSASdAp-Jc7kFPFl2E1grFtZyI64G19gesGY~3F8IefDRhWtAlnrwoXcCNjG4KaGMtQd-wVu0t~6YOPsfxKEDDUL2WzUSseoC606s9z46~pZE~Sl~mpJYG4OxVbrrOT7n-NIMNQN6A6U4r3iowH0YiVTj8X05TttGxcCnYyytRW2xOnRsAgge3Mc9vI88UcHlMhZjdJWeon-TxclEiVJ6HVBVajpqYo0N24HeyLCmY0JK5gF7XkPER1cMogZJM-1tKThT46ISSA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ';
  render() {

    return (
      <View style={styles.container}>
        <Text>Player</Text>
        <Video source={{uri: '/Users/varik77/Library/Developer/CoreSimulator/Devices/3A00A3A3-6331-4743-ACD1-08966FEA940F/data/Containers/Data/Application/849D654E-CCEE-4640-88E0-3E07BBACFAD0/Documents/song.mp3'}}
            ref="audio"
            volume={ this.state.muted ? 0 : 1.0}
            muted={false}
            paused={false}
            onLoad={ () => console.log('loaded') }
            onProgress={console.log }
            onEnd={ () => console.log('end') }
            resizeMode="cover"
            repeat={false}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
