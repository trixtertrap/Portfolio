import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/trixtertrap/ssh-bruteforce"
          h3="SSH Cracker"
          p="SSH Brute Force Tool"
        />
        <ProjectCard
          src={p3}
          link="https://github.com/trixtertrap/Portfolio"
          h3="Portfolio"
          p="My Portfolio"
        />
        <ProjectCard
          src={p2}
          link="https://github.com/trixtertrap/hashhunter"
          h3="Hash Hunter"
          p="Simple Password Unmasker"
        />
       <ProjectCard
          src={p4}
          link="https://github.com/trixtertrap/web-brute"
          h3="Web Brute"
          p="Unlock Access"
        />
      </div>
    </section>
  );
}

export default Projects;
