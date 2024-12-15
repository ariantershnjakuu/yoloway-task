import React from "react";
import { Circle as KonvaCircle } from "react-konva";
import { BaseShapeProps, CircleShape } from "../../types/shapes";
import { DRAWING_CONSTANTS } from "../../constants/drawing";

interface CircleProps extends BaseShapeProps {
  shape: CircleShape;
}

const Circle: React.FC<CircleProps> = ({
  shape,
  onDragEnd,
  onDragMove,
  onClick,
  isDraggable,
}) => {
  return (
    <KonvaCircle
      {...shape}
      stroke="#000000"
      strokeWidth={DRAWING_CONSTANTS.DEFAULT_STROKE_WIDTH}
      draggable={isDraggable}
      onDragStart={(e) => {
        // Cancel drag if not in move mode
        if (!isDraggable) {
          e.cancelBubble = true;
        }
      }}
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Circle;
