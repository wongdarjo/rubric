import Header from './Header';
import css from '../assets/scss/style.scss';

const Layout = props => {
    return (
        <main className={css.wrapper}>
            <Header />
            {props.children}
        </main>
    )
};

export default Layout;