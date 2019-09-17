import React from 'react';

export default class CollectJSSection extends React.Component {
  // Created the 3 divs for the CollectJS iframes
  render() {
    return (
      <React.Fragment>
        <div id="ccnumber" />
        <div id="ccexp" />
        <div id="cvv" />
      </React.Fragment>
    );
  }
}
