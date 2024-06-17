// src/components/SplineScene.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  sceneUrl: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ sceneUrl }) => {
  return <Spline scene={sceneUrl} />;
}

export default SplineScene;
