import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardPage from './AddCardPage';

const AddCardPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  return <AddCardPage navigate={navigate} />;
};

export default AddCardPageWrapper;
