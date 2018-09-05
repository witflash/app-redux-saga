import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestDog, requestDogSuccess, requestDogError, fetchDog } from '../actions';

class App extends Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : this.props.error ? (
          <p>Error, try again</p>
        ) : (
          <p>
            <img src={this.props.url} />
          </p>
        )}
      </div>
    );
  }
}

export default connect(state => {
  console.log(state);
  return state.reducer;
})(App);
