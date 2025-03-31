import { useState, useEffect, ReactNode } from 'react';

interface MasonryGridProps {
  columns?: number;
  gap?: number;
  children: ReactNode[];
}

export const MasonryGrid = ({
  columns = 3,
  gap = 30,
  children,
}: MasonryGridProps) => {
  const [columnCount, setColumnCount] = useState(columns);
  
  // Responsive column count based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(columns);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  // Distribute children into columns
  const distributeChildren = () => {
    const columnItems: ReactNode[][] = Array.from({ length: columnCount }, () => []);
    
    children.forEach((child, index) => {
      const columnIndex = index % columnCount;
      columnItems[columnIndex].push(child);
    });
    
    return columnItems;
  };

  const columnItems = distributeChildren();

  return (
    <div 
      className="w-full grid" 
      style={{ 
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`, 
        gap: `${gap}px` 
      }}
    >
      {columnItems.map((items, columnIndex) => (
        <div key={columnIndex} className="flex flex-col space-y-8">
          {items}
        </div>
      ))}
    </div>
  );
}; 