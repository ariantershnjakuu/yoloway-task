import { Shape } from '../types/shapes';

interface Point {
  x: number;
  y: number;
}

/**
 * Pure utility functions for shape calculations.
 */
export const calculateShapeUpdates = (
  shapeType: string,
  startPoint: Point,
  currentPoint: Point
): Partial<Shape> => {
  switch (shapeType) {
    case 'rectangle': {
      const width = currentPoint.x - startPoint.x;
      const height = currentPoint.y - startPoint.y;
      return {
        width: Math.abs(width),
        height: Math.abs(height),
        x: width < 0 ? currentPoint.x : startPoint.x,
        y: height < 0 ? currentPoint.y : startPoint.y,
      };
    }
    case 'circle': {
      const dx = currentPoint.x - startPoint.x;
      const dy = currentPoint.y - startPoint.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      return { radius };
    }
    case 'ellipse': {
      const radiusX = Math.abs(currentPoint.x - startPoint.x);
      const radiusY = Math.abs(currentPoint.y - startPoint.y);
      return { radiusX, radiusY };
    }
    case 'triangle': {
      const dx = currentPoint.x - startPoint.x;
      const dy = currentPoint.y - startPoint.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      return { radius };
    }
    case 'freehand': {
      return {
        points: [...(startPoint as any).points, { x: currentPoint.x, y: currentPoint.y }]
      };
    }
    default:
      return {};
  }
};