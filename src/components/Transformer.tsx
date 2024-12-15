import React, { useEffect, useRef } from "react";
import { Transformer as KonvaTransformer } from "react-konva";
import { Shape } from "../types/shapes";

interface TransformerProps {
  selectedId: string | null;
  shapes: Shape[];
}

const Transformer: React.FC<TransformerProps> = ({ selectedId, shapes }) => {
  const transformerRef = useRef<any>(null);

  useEffect(() => {
    if (selectedId === null) {
      return;
    }

    const node = transformerRef.current;
    const shape = node.getStage().findOne(`#${selectedId}`);

    if (shape) {
      node.nodes([shape]);
      node.getLayer().batchDraw();
    }
  }, [selectedId]);

  return (
    <KonvaTransformer
      ref={transformerRef}
      boundBoxFunc={(oldBox, newBox) => {
        // Ensure minimum size
        const minSize = 5;
        if (
          Math.abs(newBox.width) < minSize ||
          Math.abs(newBox.height) < minSize
        ) {
          return oldBox;
        }
        return newBox;
      }}
    />
  );
};

export default Transformer;
