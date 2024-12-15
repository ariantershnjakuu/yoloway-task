import { useState } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { Shape } from '../types/shapes';
import { useStore } from '../store/useStore';

export const useShapeDrawing = () => {
  const { selectedTool, selectedColor, addShape } = useStore();
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentShapeId, setCurrentShapeId] = useState<string | null>(null);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

  const handleDrawStart = (pos: { x: number; y: number }) => {
    setStartPoint(pos);
    setIsDrawing(true);

    const newShape: Partial<Shape> = {
      id: Math.random().toString(),
      x: pos.x,
      y: pos.y,
      fill: selectedColor,
    };

    return newShape;
  };

  const handleDrawEnd = () => {
    setIsDrawing(false);
    setCurrentShapeId(null);
    setStartPoint(null);
  };

  return {
    isDrawing,
    currentShapeId,
    startPoint,
    handleDrawStart,
    handleDrawEnd,
    setCurrentShapeId,
  };
}; 