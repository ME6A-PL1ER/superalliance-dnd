import React, { useState } from 'react';
import DraggableElement from './DraggableElement';
import DroppableArea from './DroppableArea';

const Editor: React.FC = () => {
    const [elements, setElements] = useState([
        { id: '1', content: 'Element 1' },
        { id: '2', content: 'Element 2' },
        { id: '3', content: 'Element 3' },
    ]);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
        event.dataTransfer.setData('text/plain', id);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData('text/plain');
        if (draggedElementId) {
            // Logic to handle the drop event
            console.log(`Dropped element with id: ${draggedElementId}`);
            // You can add additional logic here to update the state or UI
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>Drag and Drop Editor</h1>
            <div className="draggable-container">
                {elements.map(element => (
                    <DraggableElement
                        key={element.id}
                        id={element.id}
                        onDragStart={(event) => handleDragStart(event, element.id)} content={''}                    />
                ))}
            </div>
            <DroppableArea onDrop={handleDrop} onDragOver={handleDragOver}>
                <p>Drop here</p>
            </DroppableArea>
        </div>
    );
};

export default Editor;