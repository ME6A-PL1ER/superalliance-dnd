import React from 'react';

interface DroppableAreaProps {
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ onDrop, children }) => {
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            onDrop={onDrop}
            onDragOver={handleDragOver}
            style={{
                border: '2px dashed #ccc',
                padding: '20px',
                minHeight: '200px',
                position: 'relative',
            }}
        >
            {children}
        </div>
    );
};

export default DroppableArea;