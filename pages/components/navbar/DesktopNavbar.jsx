import styles from '../../../styles/Hero.module.scss';

const DesktopNavbar = () => {
  return (
  <ul className={styles.navbar__list}>
    <li>
        <a href="#" className={styles.navbar__link}>.home</a>
    </li>

    <li>
        <a href="#skills" className={styles.navbar__link}>.tech</a>
    </li>
      
    <li>
        <a href="#projects" className={styles.navbar__link}>.projects</a>
    </li>
      
    <li>
        <a href="#about" className={styles.navbar__link}>.about me</a>
    </li>

    <li>
        <a href="#contact" className={styles.navbar__link}>.contact</a>
    </li>
  </ul>
  )
 }

export default DesktopNavbar;