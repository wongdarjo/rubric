import Head from './Head';
import css from '../assets/scss/style.scss';

const Layout = props => {
    return (
        <main className={css.wrapper}>
            <Head />
            {props.children}
        </main>
    )
};

export default Layout;