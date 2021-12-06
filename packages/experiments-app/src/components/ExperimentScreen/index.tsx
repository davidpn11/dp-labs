import React from 'react';
import {useLocation, useParams} from 'react-router';
import {experimentList} from '../../experiments';

export function ExperimentScreen() {
  const location = useLocation();
  const params = useParams();
  console.log('what', params);

  if (!params.experimentId) return <div>No Demo</div>;

  const Demo = experimentList[params.experimentId].demo;
  console.log(Demo);

  return <div>{Demo}</div>;
}
