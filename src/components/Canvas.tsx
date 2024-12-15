import React from "react";
import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import Rectangle from "./shapes/Rectangle";
import Circle from "./shapes/Circle";
import Triangle from "./shapes/Triangle";
import Ellipse from "./shapes/Ellipse";
import Freehand from "./shapes/Freehand";
import ImageShape from "./shapes/ImageShape";
import { useStore } from "../store/useStore";
import { useDrawingManager } from "../hooks/useDrawingManager";
import { useImageUpload } from "../hooks/useImageUpload";

/**
 * Main canvas component that draws all shapes and tools
 */
const Canvas: React.FC = () => {
  const shapes = useStore((state) => state.shapes);
  const selectedTool = useStore((state) => state.selectedTool);
  const updateShape = useStore((state) => state.updateShape);
  const removeShape = useStore((state) => state.removeShape);
  const setSelectedId = useStore((state) => state.setSelectedId);

  const { startDrawing, updateDrawing, stopDrawing } = useDrawingManager();
  const { fileInputRef, handleFileChange } = useImageUpload();

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos || selectedTool === "move") return;
    startDrawing(pos);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos || selectedTool === "move") return;
    updateDrawing(pos);
  };

  const handleShapeClick = (e: KonvaEventObject<MouseEvent>, id: string) => {
    if (selectedTool === "eraser") {
      removeShape(id);
    } else if (selectedTool === "select" || selectedTool === "move") {
      setSelectedId(id);
    } else {
      setSelectedId(null);
    }
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>, id: string) => {
    if (selectedTool !== "move") return;

    const shape = e.target;
    updateShape(id, {
      x: shape.x(),
      y: shape.y(),
    });
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <Stage
        width={window.innerWidth - 200}
        height={window.innerHeight}
        className="bg-white"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrawing}
        onClick={(e) => {
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {shapes.map((shape) => {
            const commonProps = {
              key: shape.id,
              id: shape.id,
              onDragEnd: handleDragEnd,
              onDragMove: () => {},
              onClick: handleShapeClick,
              isDraggable: selectedTool === "move",
            };

            switch (shape.type) {
              case "rectangle":
                return <Rectangle {...commonProps} shape={shape} />;
              case "circle":
                return <Circle {...commonProps} shape={shape} />;
              case "ellipse":
                return <Ellipse {...commonProps} shape={shape} />;
              case "triangle":
                return <Triangle {...commonProps} shape={shape} />;
              case "freehand":
                return <Freehand {...commonProps} shape={shape} />;
              case "image":
                return <ImageShape {...commonProps} shape={shape} />;
              default:
                return null;
            }
          })}
        </Layer>
      </Stage>
    </>
  );
};

export default Canvas;
