import React from "react";
import { Line } from "react-konva";
import { BaseShapeProps, FreehandShape, Shape } from "../../types/shapes";

interface FreehandProps extends BaseShapeProps {
  shape: FreehandShape;
}

const Freehand: React.FC<FreehandProps> = ({
  shape,
  onDragEnd,
  onDragMove,
  onClick,
}) => {
  // Convert points array to flat array for Konva Line
  const flatPoints = shape.points.flatMap((point) => [point.x, point.y]);

  return (
    <Line
      points={flatPoints}
      stroke={shape.fill}
      strokeWidth={2}
      tension={0.5}
      lineCap="round"
      lineJoin="round"
      draggable
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default Freehand;
