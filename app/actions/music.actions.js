import * as types from './types';
import Config from '../config';
import RNFetchBlob from 'react-native-fetch-blob';
import * as Utils from '../helpers/utils';
import {AsyncStorage} from 'react-native';
import RNFS from 'react-native-fs';


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
