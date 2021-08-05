import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
// import { ingredientsImages } from './images';

const Container = styled.div`
    background-color: ${props => (props.isDragging ? 'lightgreen' : '')};
    margin-bottom: -200px;
`;

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        className="border border-light mx-2 p-2"
                    >
                        <img src={task.content} className="img-fluid" alt="" />
                    </Container>
                )
            }}

        </Draggable>
    );
}

export default Task;