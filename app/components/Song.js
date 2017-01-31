import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles';
import Swipeout from 'react-native-swipe-out';
import * as Progress from 'react-native-progress';

let {height, width} = Dimensions.get('window');

export default class Search extends Component {
  state = {songImage: "../img/music.jpg"}
  swipeBtns = this.props.search?([{
      component: (
         <View style={Styles.downloadButtonContainer}>
          <FontAwesome name="download" size={25} color="#fff" />
          </View>
        ),
        onPress: this.props.downloadMusic
    }]): ([{
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => { this.props.deleteSong() }
    }])

  renderProgressBar() {
    if(!this.props.progreses) return null;
    var progress = this.props.progreses[this.props.id];
    if(this.props.search && (progress && progress > 0 && progress < 0.87))
      return <Progress.Bar progress={progress} width={width - 20} />
    else return null
  }

  render() {
    return (
        <Swipeout
          right={this.swipeBtns}
          backgroundColor= 'transparent'>
          <TouchableOpacity style={Styles.songContainer} onPress={this.props.onPress}>
            <View style={Styles.songView}>
              <Image
                source={{uri: this.props.songImage || this.state.songImage}}
                style={Styles.songTitleImage}
              />
              <View style={Styles.songTitleContainer}>
                <Text style={Styles.songArtistText}>{this.props.artistName || "Unknown Artist"}</Text>
                <Text style={Styles.songTitleText}>{this.props.songName || "Unknown Song"}</Text>
              </View>
            </View>
          </TouchableOpacity>
          {this.renderProgressBar()}
        </Swipeout>
   );
  }
}
