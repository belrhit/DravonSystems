'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface ConnectingLinesProps {
  points: [number, number, number][];
}

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({ points }) => {
  const lineObject = useMemo(() => {
    const vPoints = points.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
    const curve = new THREE.CatmullRomCurve3(vPoints, false, 'centripetal', 0.5);
    const curvePoints = curve.getPoints(140);
    const geom = new THREE.BufferGeometry().setFromPoints(curvePoints);

    const mat = new THREE.LineDashedMaterial({
      color: 0x0066ff,
      dashSize: 0.16,
      gapSize: 0.1,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const line = new THREE.Line(geom, mat);
    line.computeLineDistances();
    return line;
  }, [points]);

  useFrame((state) => {
    if (lineObject.material instanceof THREE.LineDashedMaterial) {
      const t = state.clock.getElapsedTime();
      lineObject.material.opacity = 0.45 + Math.sin(t * 1.5) * 0.15;
    }
  });

  return <primitive object={lineObject} />;
};
