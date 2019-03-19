import React from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'

export default class List extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recipes!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    )
  }

}
