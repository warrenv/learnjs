
import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Page = (props) => (
  <div id="home_page">
    <Header />
    <Body />
    <Footer />
  </div>
)

Page.propTypes = {
  //  currentSelectionPanel: React.PropTypes.string.isRequired,
  //change:                React.PropTypes.func.isRequired,
  //  toggleBedsSelection:   React.PropTypes.func.isRequired,
}

Page.displayName = 'Page'

export default Page
