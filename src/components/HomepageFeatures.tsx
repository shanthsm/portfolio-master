import React from 'react';
import styles from './HomepageFeatures.module.css';
import { PersonalTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <PersonalTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
