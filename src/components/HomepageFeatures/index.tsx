import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Foundation of A.i ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore the fundamental concepts of Physical AI, embodied intelligence, and the integration of artificial intelligence with physical robotic systems. Learn about the theoretical foundations, historical evolution, and key principles that distinguish physical AI from traditional software-based AI systems.
      </>
    ),
  },
  {
    title: 'Sensor System',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Comprehensive coverage of sensor technologies, perception algorithms, and multi-modal integration for robotic systems. Learn how robots sense their environment through vision, touch, proprioception, and other modalities, and how raw sensor data is transformed into actionable understanding
      </>
    ),
  },
  {
    title: 'Acutation System',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Master the principles of robotic actuation, including electric motors, hydraulic systems, pneumatics, and soft actuators. Explore control theory fundamentals, feedback systems, and hierarchical control architectures that enable precise and robust robotic motion.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
