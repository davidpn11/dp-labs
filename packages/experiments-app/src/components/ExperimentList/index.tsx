import React from 'react';
import {experimentList} from '../../experiments';
import {ExperimentCard} from '../ExperimentCard';
export function ExperimentList() {
  return (
    <div>
      {Object.entries(experimentList).map(([key, experiment]) => (
        <ExperimentCard
          key={key}
          id={key}
          experiment={experiment}></ExperimentCard>
      ))}
    </div>
  );
}
