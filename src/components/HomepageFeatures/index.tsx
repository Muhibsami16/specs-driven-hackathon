import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
  link: string;  
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Foundation of A.I',
    imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20240629224644/Foundation-Models-for-AI-copy.webp',
    link: '/docs/Chapter%201%20Foundations%20of%20physical%20A.I', 
    description: (
      <>
        Explore the fundamental concepts of Physical AI, and the integration of artificial intelligence with physical robotic systems.
      </>
    ),
  },
  {
    title: 'Sensor System',
    imageUrl: 'https://file.aichiplink.com/static/2025-09-01/bf177061-3852-413a-8042-dcbee70fd523.webp',
    link: '/docs/Chapter%202%20Sensor%20Sensor%20Systems%20and%20Perception%20in%20Physical%20AI', 
    description: (
      <>
        Comprehensive coverage of sensor technologies, perception algorithms, and multi-modal integration for robotic systems.
      </>
    ),
  },
  {
    title: 'Actuation System',
    imageUrl: 'https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1733489696/sites/tb/articles/sup/MD/2024/features/MD-1224-p5_fig1.jpg',
    link: '/docs/Chapter%203%20Acutaion%20Systems%20and%20Contraol',  
    description: (
      <>
        Master the principles of robotic actuation, including electric motors, hydraulic systems, pneumatics, and soft actuators.
      </>
    ),
  },
];

function Feature({ title, imageUrl, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <img 
            src={imageUrl} 
            className={styles.featureSvg} 
            alt={title}
            role="img"
          />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}