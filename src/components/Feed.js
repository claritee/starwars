import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import response from '../result.json';

class Feed extends Component {
  render() {
    const items = response.results.map((person) => 
      <ListItem>
        <ListItemText>
        {person.name}
        </ListItemText>
      </ListItem>
    )
    return (
      <List>{items}</List>
    )
  }
}

export default Feed;