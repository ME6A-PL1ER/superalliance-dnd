import React from 'react';

interface DraggableElementProps {
    id: string;
    content: string;
    onDragStart: (event: React.DragEvent<HTMLDivElement>, id: string) => void;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ id, content, onDragStart }) => {
    return (
        <div
            draggable
            onDragStart={(event) => onDragStart(event, id)}
            className="draggable-element"
        >
            {content}
        </div>
    );
};

export default DraggableElement;