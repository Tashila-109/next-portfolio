import {PureComponent} from 'react';
import Error from './_error';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

export default class About extends PureComponent {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/tashila-109');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return {user: data, statusCode};
  }

  render() {
    const {user, statusCode} = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title='About'>
        <p>{user?.name}</p>

        <img src={user?.avatar_url} alt='coder' height='200px' />
      </Layout>
    );
  }
}
