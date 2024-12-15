import React from 'react';
import { Ellipse as KonvaEllipse } from 'react-konva';
import { BaseShapeProps, EllipseShape } from '../../types/shapes';

interface EllipseProps extends BaseShapeProps {
  shape: EllipseShape;
}

const Ellipse: React.FC<EllipseProps> = ({ 
  shape, 
  onDragEnd, 
  onDragMove, 
  onClick,
  isDraggable 
}) => {
  return (
    <KonvaEllipse
      {...shape}
      stroke="#000000"
      strokeWidth={1}
      draggable={isDraggable}
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Ellipse; 