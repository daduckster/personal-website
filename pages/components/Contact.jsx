import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import styles from "../../styles/Contact.module.scss"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        
        <div className={styles.row}>
          <h2>.contact</h2>
          
          <div className={styles.iconContainer}>
            <a href="https://github.com/Obtez" target="_blank" rel="noreferrer">
              <AiFillGithub className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/thedavidbeer/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/thedavidbeer" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className={styles.socialIcon} />
            </a>
          </div>

        </div>

        <div className={styles.formContainer}>
          <ContactForm />
        </div>

        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>

    </section>
  )
}

export default Contact