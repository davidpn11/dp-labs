import React from 'react';
import {Link} from 'react-router-dom';
import {Experiment} from '../../experiments';
import {CardPostWrapper, Overlay, ExperimentDetails} from './styles';
type Props = {
  id: string;
  experiment: Experiment;
};
import {useNavigate} from 'react-router-dom';

function ExperimentStatus() {}

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
      </ExperimentDetails>
      <img src={experiment.thumbnail} alt={experiment.thumbnailAlt} />
      <Overlay>Click to see more</Overlay>
    </CardPostWrapper>
  );
}
