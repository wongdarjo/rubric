import Layout from '../components/Layout';
import Link from 'next/link';
import css from '../assets/scss/style.scss';
import axios from 'axios';

const Index = (props) => {
  return (
      <Layout>
        <div className={css['container']}>
          {props.data.map(i => (
              <div className={css['c-card']} key={i.id}>
                <h2 className={css['c-card__title']}>{i.title}</h2>
                <p className={css['c-card__description']}>{i.description}</p>
                <Link href={`/article/detail?title=${i.title}`}>
                  <a className={css['c-link']}>Read more...</a>
                </Link>
              </div>
          ))}
        </div>

      </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await axios.get('http://localhost:1337/articles');
  const data = await res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data
  }
}

export default Index;