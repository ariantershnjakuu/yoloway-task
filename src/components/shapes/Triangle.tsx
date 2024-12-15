import React from "react";
import { RegularPolygon } from "react-konva";
import { BaseShapeProps, TriangleShape } from "../../types/shapes";

interface TriangleProps extends BaseShapeProps {
  shape: TriangleShape;
  isDraggable: boolean;
}

const Triangle: React.FC<TriangleProps> = ({
  shape,
  onDragEnd,
  onDragMove,
  onClick,
  isDraggable,
}) => {
  return (
    <RegularPolygon
      {...shape}
      sides={3}
      stroke="#000000"
      strokeWidth={1}
      draggable={isDraggable}
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Triangle;
