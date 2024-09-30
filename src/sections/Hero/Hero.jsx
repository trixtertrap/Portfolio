import styles from './HeroStyles.module.css';
import heroImg from '../../assets/tj.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
{/*import twitterLight from '../../assets/youtube-light.png';
import twitterDark from '../../assets/youtube-round-svgrepo-com.svg'; */}
import youtubeLight from '../../assets/youtube-light.png';
import youtubeDark from '../../assets/youtube-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Thanuj_Yenna_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
{/*const twitterIcon = theme === 'light' ? twitterLight : twitterDark; */}
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Portfolio of Thanuj Yenna"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Thanuj
          <br />
          Yenna
        </h1>
        <h2>Cybersecurity Engineer</h2>
        <span>
   {/*     
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
   */}
          <a href="https://github.com/trixtertrap" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/thanujyenna" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
             <a href="https://youtube.com/@Trixtertrap" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about securing applications and identifying vulnerabilities in systems.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
