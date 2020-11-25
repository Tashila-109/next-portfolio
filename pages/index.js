import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <Link href='/about'>
      <a>Go to About</a>
    </Link>
  </Layout>
);

export default Index;
