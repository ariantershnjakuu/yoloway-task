import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import {
  BaseShapeProps,
  ImageShape as ImageShapeType,
} from "../../types/shapes";
import { KonvaEventObject } from "konva/lib/Node";

interface ImageShapeProps extends BaseShapeProps {
  shape: ImageShapeType;
  id: string;
}

const ImageShape: React.FC<ImageShapeProps> = ({
  shape,
  onDragEnd,
  onDragMove,
  onClick,
  isDraggable,
  id,
}) => {
  const [image] = useImage(shape.src);

  return (
    <Image
      {...shape}
      id={id}
      image={image}
      draggable={isDraggable}
      onDragEnd={(e) => onDragEnd(e, shape.id)}
      onDragMove={(e) => onDragMove(e, shape.id)}
      onClick={(e) => onClick(e, shape.id)}
    />
  );
};

export default ImageShape;
