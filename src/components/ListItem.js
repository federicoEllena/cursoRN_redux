import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const {titleStyle} = styles;
    console.log(this.props); 
    return (
      <CardSection>
        <Text style style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,

  }
};

export default connect(null, actions)(ListItem);
/*El primer argumento de connect es para la funcion mapStateToProps*/