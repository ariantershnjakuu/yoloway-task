import { KonvaEventObject } from 'konva/lib/Node';

type ShapeType = 'rectangle' | 'circle' | 'triangle' | 'image' | 'freehand' | 'ellipse';

interface BaseShape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  fill: string;
}

export interface FreehandShape extends BaseShape {
  type: 'freehand';
  points: { x: number; y: number }[];
}

export interface RectangleShape extends BaseShape {
  type: 'rectangle';
  width: number;
  height: number;
}

export interface CircleShape extends BaseShape {
  type: 'circle';
  radius: number;
}

export interface EllipseShape extends BaseShape {
  type: 'ellipse';
  radiusX: number;
  radiusY: number;
}

export interface TriangleShape extends BaseShape {
  type: 'triangle';
  radius: number;
}

export interface ImageShape extends BaseShape {
  type: 'image';
  width: number;
  height: number;
  src: string;
}

export type Shape = 
  | RectangleShape 
  | CircleShape 
  | TriangleShape 
  | ImageShape 
  | FreehandShape 
  | EllipseShape;

export interface BaseShapeProps {
  shape: Shape;
  onDragMove: (e: KonvaEventObject<DragEvent>, id: string) => void;
  onDragEnd: (e: KonvaEventObject<DragEvent>, id: string) => void;
  onClick: (e: KonvaEventObject<MouseEvent>, id: string) => void;
  isDraggable: boolean;
  onTransformEnd?: (e: KonvaEventObject<Event>) => void;
  id?: string;
}

export type ShapeConfigUnion = {
  width?: number;
  height?: number;
  radius?: number;
  sides?: number;
  image?: HTMLImageElement;
}; 