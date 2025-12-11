import styles from './HeroStyles.module.css'
import fidha from '../../assets/fidha.jpg'
import sun from'../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import twitterlight from '../../assets/twitter-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
 
function Hero() {
  const {theme,toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colormodecontainer}>
          <img src={fidha} alt='image'className={styles.profilepic}/>
          <img src={themeIcon} alt='ColorTheme' className={styles.colormode} onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1 >Fidha pk</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://github.com/fidha-pk-75' target='_blank'>
            <img src={githubIcon} alt='github' className={styles.socialicon}/>
          </a>
          <a href='https://www.linkedin.com/in/fidha-pk-252a03345/' target='_blank'>
            <img src={linkedinIcon} alt='linkedin' className={styles.socialicon}/>
          </a>
        </span>

        <p className={styles.description}>
        I build end-to-end web apps using modern React front-ends and Django back-ends, delivering scalable solutions for businesses.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
