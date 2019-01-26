import React, { Component } from 'react';

import response from '../result.json';

class Feed extends Component {
  render() {
    const items = response.results.map((person) => 
      <li>{person.name}</li>
    )
    return (
      <ul>{items}</ul>
    )
  }
}

export default Feed;