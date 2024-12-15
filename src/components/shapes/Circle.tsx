import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';
import { BaseShapeProps, CircleShape } from '../../types/shapes';

interface CircleProps extends BaseShapeProps {
  shape: CircleShape;
}

const Circle: React.FC<CircleProps> = ({ shape, onDragEnd, onDragMove, onClick }) => {
  return (
    <KonvaCircle
      {...shape}
      stroke="#000000"
      strokeWidth={1}
      draggable
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Circle; 