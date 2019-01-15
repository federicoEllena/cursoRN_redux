import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectLibrary } from '../actions';

import { CardSection } from './common';

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true)

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class ListItem extends Component {
  componentDidUpdate(){
    LayoutAnimation.linear();
  }

  handleSelectLibrary = () => {
    const { library, handleSelectLibrary } = this.props;
    handleSelectLibrary(library.item.id);
  }

  renderItemDescription = () => {
    const { library, selectedLibraryId } = this.props;
    if (library.item.id === selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{ flex:1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
    return false;
  }

  render() {
    const { library } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.handleSelectLibrary}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {library.item.title}
            </Text>
          </CardSection>
          {this.renderItemDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  library: PropTypes.shape({
    id: PropTypes.number,
  }),
  handleSelectLibrary: PropTypes.func.isRequired,
  selectedLibraryId: PropTypes.number,
};

const mapStateToProps = store => ({
  selectedLibraryId: store.selectedLibraryId,
});

/* En el reducer una de las props es selectedLibraryId
esta funcion es la que ira en el connect helper */

const mapDispatchToProps = dispatch => ({
  handleSelectLibrary: id => dispatch(selectLibrary(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
/* El primer argumento de connect es para la funcion mapStateToProps
El segundo argumento hace dos cosas,en primer lugar "muta" el action creator de una
funcion vacia o tonta
y la convierte en algo que cada vez que es llamado devuelve el store de redux,
la segunda cosa, toma todas las acciones dentro del objeto y las pasa todas
al componente como props */
