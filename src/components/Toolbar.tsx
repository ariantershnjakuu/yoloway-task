import React from 'react';
import { 
  CursorArrowRaysIcon,
  RectangleGroupIcon,
  PencilIcon,
  CircleStackIcon as CircleIconOutline,
  BackspaceIcon,
  ExclamationTriangleIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { useStore } from '../store/useStore';
import { DRAWING_CONSTANTS } from '../constants/drawing';

const Toolbar: React.FC = () => {
  const selectedTool = useStore((state) => state.selectedTool);
  const selectedColor = useStore((state) => state.selectedColor);
  const setSelectedTool = useStore((state) => state.setSelectedTool);
  const setSelectedColor = useStore((state) => state.setSelectedColor);

  const tools = [
    { name: 'move', icon: CursorArrowRaysIcon, label: 'Move' },
    { name: 'rectangle', icon: RectangleGroupIcon, label: 'Rectangle' },
    { name: 'pencil', icon: PencilIcon, label: 'Pencil' },
    { name: 'circle', icon: CircleIconOutline, label: 'Circle' },
    { name: 'ellipse', icon: CircleIconOutline, label: 'Ellipse' },
    { name: 'triangle', icon: ExclamationTriangleIcon, label: 'Triangle' },
    { name: 'image', icon: PhotoIcon, label: 'Image' },
    { name: 'eraser', icon: BackspaceIcon, label: 'Eraser' },
  ];

  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#800000',
  ];

  return (
    <div className="min-w-[200px] h-full bg-gray-100 p-4 flex flex-col gap-6 overflow-y-auto">
      <div className="tools-section">
        <h3 className="text-sm font-bold mb-3 text-gray-700">Tools</h3>
        <div className="flex flex-col gap-2">
          {tools.map((tool) => (
            <button
              key={tool.name}
              onClick={() => setSelectedTool(tool.name)}
              className={`
                flex items-center gap-3 p-2 rounded-lg w-full m-0
                transition-all duration-200 ease-in-out
                ${selectedTool === tool.name 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <tool.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{tool.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="colors-section">
        <h3 className="text-sm font-bold mb-3 text-gray-700">Colors</h3>
        <div className="grid grid-cols-5 gap-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`
                w-7 h-7 rounded-lg m-0 p-0
                transition-all duration-200 ease-in-out
                ${selectedColor === color 
                  ? 'ring-2 ring-primary-500 ring-offset-2 scale-110' 
                  : 'hover:scale-105'
                }
              `}
              style={{ 
                backgroundColor: color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      <div className="selected-tool mt-auto pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Selected Tool: <span className="font-medium text-gray-900">{
            tools.find(t => t.name === selectedTool)?.label || 'None'
          }</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Selected Color: <span 
            className="inline-block w-4 h-4 rounded-sm align-middle ml-2"
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar; 