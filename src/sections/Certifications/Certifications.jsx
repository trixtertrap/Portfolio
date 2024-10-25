import styles from './CertificationsStyles.module.css';
import gcp from '../../assets/PCSE.png';
import klcp from '../../assets/klcp.png';
import github from '../../assets/github.png';
import mitre from '../../assets/mitre.png';
import ai from '../../assets/ai.png'
import ProjectCard from '../../common/ProjectCard';

function Certifications() {
  return (
    <section id="certifications" className={styles.container}>
      <h1 className="sectionTitle">Certifications</h1>
      <div className={styles.certificationsContainer}>
        <ProjectCard
          src={gcp}
          link="https://www.credly.com/users/thanujyenna"
        />
        <ProjectCard
          src={klcp}
          link="https://www.credential.net/profile/thanujyenna/wallet#gs.ez5hzt"
        />
        <ProjectCard
          src={github}
          link="https://www.credly.com/users/thanujyenna"
        />
        <ProjectCard
          src={mitre}
          link="https://www.credential.net/profile/thanujyenna/wallet#gs.ez5hzt"
        />
        <ProjectCard
          src={ai}
          link="https://www.credly.com/users/thanujyenna"
        />

      </div>
    </section>
  );
}

export default Certifications;
