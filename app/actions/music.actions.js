import * as types from './types';
import Config from '../config';
import RNFetchBlob from 'react-native-fetch-blob';
import * as Utils from '../helpers/utils';
import {AsyncStorage} from 'react-native';
import RNFS from 'react-native-fs';

export function downloadMusic(song) {
    return async (dispatch) => {
      let songs = await AsyncStorage.getItem('songs');
      songs = songs || JSON.stringify([]);
      songs = JSON.parse(songs);
      if(Utils.findSongInCollection(song.id, songs)) {
        console.log("Song already downloaded");
        return {};
      }
      let dirs = RNFetchBlob.fs.dirs;
      RNFetchBlob
      .config({
        path: `${dirs.DocumentDir}/${song.id}.mp3`
      })
      .fetch('GET', song.path, {
      })
      .progress((received, total) => {
        dispatch(setProgress(received / total, song.id));
      })
      .then(async (res) => {
        const headers = res.respInfo.headers;
        if(!Utils.isAudioObject(headers['Content-Type'])) return;
        const songPath = res.path();
        const songName = song.title;
        song.path = res.path();
        songs = JSON.stringify([...songs, song]);
        await AsyncStorage.setItem('songs', songs);
        return dispatch(setSongs(JSON.parse(songs)));
      })
    }
}

export function musicDownloaded(path) {
  return {
    type: types.DOWNLOADED,
    path
  }
}

export function getSongs() {
    return async (dispatch) => {
      let songs = await AsyncStorage.getItem('songs');
      songs = songs || JSON.stringify([]);
      songs = JSON.parse(songs);
      return dispatch(setSongs(songs));
    }
}

export function deleteSong(index, song) {
  return async (dispatch) => {
    let songs = await AsyncStorage.getItem('songs');
    songs = songs || JSON.stringify([]);
    songs = JSON.parse(songs);
    try {
      await RNFS.unlink(song.path);
      songs.splice(index, 1);
      await AsyncStorage.setItem('songs', JSON.stringify(songs));
      return dispatch(setSongs(songs));
    } catch(err) {
        songs.splice(index, 1);
        await AsyncStorage.setItem('songs', JSON.stringify(songs));
        return dispatch(setSongs(songs));
    }
  }
}

export function setSongs(songs) {
  return {
    type: types.SONGS,
    songs
  }
}

export function setProgress(progress, id) {
  return {
    type: types.PROGRESS,
    progress,
    id
  }
}
