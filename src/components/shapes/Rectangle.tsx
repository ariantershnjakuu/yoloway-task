import React from "react";
import { Rect } from "react-konva";
import { BaseShapeProps, RectangleShape } from "../../types/shapes";
import { DRAWING_CONSTANTS } from "../../constants/drawing";

interface RectangleProps extends BaseShapeProps {
  shape: RectangleShape;
  isDraggable: boolean;
}

const Rectangle: React.FC<RectangleProps> = ({
  shape,
  onDragEnd,
  onDragMove,
  onClick,
  isDraggable,
}) => {
  return (
    <Rect
      {...shape}
      stroke="#000000"
      strokeWidth={DRAWING_CONSTANTS.DEFAULT_STROKE_WIDTH}
      draggable={isDraggable}
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Rectangle;
