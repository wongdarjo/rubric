import css from '../assets/scss/style.scss';

const Socmed = () => {
    return (
        <div>
            <ul className={css['c-list']}>
                <li className={css['c-list__item']}>
                    <a className={css['u-link']} href="mailto:bimaindramulya@gmail.com"><img src="./cdn/icons/envelope-solid.svg" className={[css['o-icon'], css['o-icon__hovered']].join(' ')} /></a>
                </li>
                <li className={css['c-list__item']}>
                    <a className={css['u-link']} href="http://linkedin.com/in/bimaindra" target="_blank"><img src="./cdn/icons/linkedin-brands.svg" className={[css['o-icon'], css['o-icon__hovered']].join(' ')} /></a>
                </li>
                <li className={css['c-list__item']}>
                    <a className={css['u-link']} href="http://instagram.com/bimaindraa" target="_blank"><img src="./cdn/icons/instagram-square-brands.svg" className={[css['o-icon'], css['o-icon__hovered']].join(' ')} /></a>
                </li>
                <li className={css['c-list__item']}>
                    <a className={css['u-link']} href="http://twitter.com/bimaindraa" target="_blank"><img src="./cdn/icons/twitter-square-brands.svg" className={[css['o-icon'], css['o-icon__hovered']].join(' ')} /></a>
                </li>
                <li className={css['c-list__item']}>
                    <a className={css['u-link']} href="http://github.com/wongdarjo" target="_blank"><img src="./cdn/icons/github-square-brands.svg" className={[css['o-icon'], css['o-icon__hovered']].join(' ')} /></a>
                </li>
            </ul>
        </div>
    )
};

export default Socmed;