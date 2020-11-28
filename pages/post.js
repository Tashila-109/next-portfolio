import Layout from '../components/Layout';
import {withRouter} from 'next/router';

const Post = ({router}) => (
  <Layout title={router.query.title}>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur omnis error, incidunt aliquam eum,
      explicabo, placeat neque amet eos necessitatibus minima? Magni quos ipsa commodi asperiores distinctio velit
      maxime!
    </p>
  </Layout>
);

export default withRouter(Post);
