import React, { Component } from 'react';

import '../src/components/Layout/Layout';
import Layout from '../src/components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;