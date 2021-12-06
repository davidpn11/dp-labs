import React from 'react';
import {Link} from 'react-router-dom';
import {Experiment} from '../../experiments';
import {
  CardPostWrapper,
  Overlay,
  ExperimentDetails,
  StatusWrapper,
  StatusLight,
  Tag,
} from './styles';

import {useNavigate} from 'react-router-dom';
import {ExperimentStatus} from '../..';

export function Tags({tags}: {tags: string[]}) {
  return (
    <>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </>
  );
}

export function Status({status}: {status: ExperimentStatus}) {
  const getText = () => {
    switch (status) {
      case 'STARTED':
        return 'Started';
      case 'ONGOING':
        return 'Ongoing';
      case 'COMPLETED':
        return 'Completed';
      default:
        break;
    }
  };

  return (
    <StatusWrapper>
      <StatusLight status={status} />
      {getText()}
    </StatusWrapper>
  );
}

type Props = {
  id: string;
  experiment: Experiment;
};

export function ExperimentCard({experiment, id}: Props) {
  const navigate = useNavigate();

  const goToExperiment = () => {
    navigate(`/experiments/${id}`);
  };
  return (
    <CardPostWrapper onClick={goToExperiment}>
      <ExperimentDetails>
        <h2>{experiment.name}</h2>
        <p>{experiment.description}</p>
        <Status status={experiment.status} />
        <Tags tags={experiment.tags} />
      </ExperimentDetails>
      <img src={experiment.thumbnail} alt={experiment.thumbnailAlt} />
      <Overlay>Click to see more</Overlay>
    </CardPostWrapper>
  );
}
