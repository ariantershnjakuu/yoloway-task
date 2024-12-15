import { useState } from 'react';
import { Shape, FreehandShape, EllipseShape } from '../types/shapes';
import { useStore } from '../store/useStore';
import { calculateShapeUpdates } from '../utils/shapeCalculations';

export const useDrawingManager = () => {
  const { selectedTool, selectedColor, addShape, updateShape } = useStore();
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentShapeId, setCurrentShapeId] = useState<string | null>(null);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

  const createNewShape = (pos: { x: number; y: number }) => {
    const baseShape = {
      id: Math.random().toString(),
      x: pos.x,
      y: pos.y,
      fill: selectedColor,
    };

    switch (selectedTool) {
      case 'rectangle':
        return {
          ...baseShape,
          type: 'rectangle',
          width: 0,
          height: 0,
        } as Shape;
      case 'circle':
        return {
          ...baseShape,
          type: 'circle',
          radius: 0,
        } as Shape;
      case 'ellipse':
        return {
          ...baseShape,
          type: 'ellipse',
          radiusX: 0,
          radiusY: 0,
        } as EllipseShape;
      case 'triangle':
        return {
          ...baseShape,
          type: 'triangle',
          radius: 0,
        } as Shape;
      case 'pencil':
        return {
          ...baseShape,
          type: 'freehand',
          points: [{ x: pos.x, y: pos.y }],
        } as FreehandShape;
      default:
        return null;
    }
  };

  const startDrawing = (pos: { x: number; y: number }) => {
    setStartPoint(pos);
    setIsDrawing(true);

    const newShape = createNewShape(pos);
    if (newShape) {
      addShape(newShape);
      setCurrentShapeId(newShape.id);
    }
  };

  const updateDrawing = (pos: { x: number; y: number }) => {
    if (!isDrawing || !currentShapeId || !startPoint) return;
    
    const currentShape = useStore.getState().shapes.find(s => s.id === currentShapeId);
    if (!currentShape) return;

    if (currentShape.type === 'freehand') {
      updateShape(currentShapeId, {
        points: [...(currentShape as FreehandShape).points, { x: pos.x, y: pos.y }]
      });
    } else {
      const updates = calculateShapeUpdates(selectedTool, startPoint, pos);
      if (Object.keys(updates).length > 0) {
        updateShape(currentShapeId, updates);
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setCurrentShapeId(null);
    setStartPoint(null);
  };

  return {
    isDrawing,
    startDrawing,
    updateDrawing,
    stopDrawing,
    addShape,
  };
};