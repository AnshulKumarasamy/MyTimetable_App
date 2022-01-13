import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class Entertainment extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() =>
                  this.props.navigation.navigate('DashboardScreen')
                }
              />
            }
            centerComponent={{
              text: 'Entertainment',
              style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#6f03fc"
          />
        </View>
        <Text
          style={styles.text}
          onPress={() => Linking.openURL('https://www.youtube.com/')}>
          Youtube
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            Linking.openURL('https://www.epicgames.com/site/en-US/home/')
          }>
          Games
        </Text>
        <Text
          style={styles.text}
          onPress={() => Linking.openURL('https://www.spotify.com/in-en/')}>
          Spotify
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 190,
  },
});
