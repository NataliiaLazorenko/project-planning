import AddButton from '../../components/AddButton';
import styles from './OneProjectPage.module.scss';
import SprintCard from '../../components/SprintCard';
import Container from '../../components/Container';
import SvgComponent from '../../components/SvgComponent';
import IconButton from '../../components/IconButton';
import Aside from '../../components/Aside';
import AsideListProject from '../../components/AsideListProject';

const OneProjectPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Aside createName="Create a project">
          <AsideListProject />
        </Aside>
        <div className={styles.headerProject}>
          <div className={styles.titleButtons}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Project 1</h2>
              <IconButton
                classes={styles.projectBtn}
                aria-label="edit name button"
              >
                <SvgComponent name="project" classes={styles.projectIcon} />
              </IconButton>
            </div>

            <div className={styles.createSprint}>
              <AddButton />
              <h2 className={styles.createTitle}>Create a sprint</h2>
            </div>
          </div>
          <div class={styles.addPeopleContainer}>
            <IconButton
              classes={styles.addPeopleBtn}
              aria-label="add people button"
            >
              <SvgComponent name="add-people" classes={styles.addPeopleIcon} />
            </IconButton>
            <h3 class={styles.addPeopleTitle}>Add people</h3>
          </div>
          <SprintCard />
        </div>
      </div>
    </Container>
  );
};

export default OneProjectPage;
