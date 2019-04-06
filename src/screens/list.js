import React from 'react'
import {
  Content,
  Left,
  Right,
  List,
  ListItem,
  Text,
  Spinner,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { API, graphqlOperation } from "aws-amplify"

import * as queries from '../graphql/queries'

export default class RecipeList extends React.Component {

  constructor(props) {
    super(props)
    this.listRecipes = this.listRecipes.bind(this)
    this.state = {
      loading: true,
      data: null,
      errors: null
    }
  }

  async listRecipes() {
    const props = {
      searchTerm: null
    }
    const { searchTerm } = props
    let search = searchTerm ? { title: { contains: searchTerm } } : null
    let variables = { filter: null }
    if (search) variables.filter = search

    API.graphql(graphqlOperation(queries.listRecipes, variables))
      .then( ({ data }) => {
        console.log(JSON.stringify(data))
        this.setState({ loading: false, data: data.listRecipes.items })
      })
      .catch( ({ errors }) => {
        console.log(JSON.stringify(errors))
        this.setState({ errors: errors })
      })
  }

  render() {
    const { loading, data, errors } = this.state
    if ( loading ) this.listRecipes()

    if (!(data || errors)) {
      if ( loading ) return <Content><Spinner color="blue" /></Content>
    }
    if (data) {
      return (
        <Content>
          <List>
            { data.map((item) => (
              <ListItem key={ item.id }>
                <Left>
                  <Text>{ item.title }</Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Detail')}
//         />
      )
    }
    if (errors) {
      return (
        <Content>
          <Text>{ JSON.stringify(errors) }</Text>
        </Content>
      )
    }
  }
}
