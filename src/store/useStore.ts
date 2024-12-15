import { create } from 'zustand';
import { Shape } from '../types/shapes';
import { DRAWING_CONSTANTS } from '../constants/drawing';

/**
 * Central state management for the drawing application.
 * Manages tool selection, shape manipulation, and canvas state.
 * 
 * State is divided into two main concerns:
 * 1. Tool state (selected tool, color)
 * 2. Shape state (all shapes on canvas and their modifications)
 */
interface ToolState {
  shapes: Shape[];
  selectedTool: string;
  selectedColor: string;
  addShape: (shape: Shape) => void;
  updateShape: (id: string, newProps: Partial<Shape>) => void;
  removeShape: (id: string) => void;
  setSelectedTool: (tool: string) => void;
  setSelectedColor: (color: string) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const useStore = create<ToolState>((set) => ({
  shapes: [],
  selectedTool: DRAWING_CONSTANTS.DEFAULT_TOOL,
  selectedColor: DRAWING_CONSTANTS.DEFAULT_COLOR,
  selectedId: null,

  addShape: (shape) =>
    set((state) => ({
      shapes: [...state.shapes, shape],
    })),

  updateShape: (id, newProps) =>
    set((state) => ({
      shapes: state.shapes.map((shape) =>
        shape.id === id ? { ...shape, ...newProps } : shape as any
      ),
    })),

  removeShape: (id) =>
    set((state) => ({
      shapes: state.shapes.filter((shape) => shape.id !== id),
    })),

  setSelectedTool: (tool) =>
    set({
      selectedTool: tool,
    }),

  setSelectedColor: (color) =>
    set({
      selectedColor: color,
    }),

  setSelectedId: (id) =>
    set({
      selectedId: id,
    }),
})); 