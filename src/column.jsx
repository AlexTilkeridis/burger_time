import React from 'react';
import { MDBContainer } from "mdbreact";
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;


const Column = ({ column, tasks }) => {
    return (
        <MDBContainer className="border border-dark mt-4 p-0">
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => {
                    return (
                        <Container
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </Container>
                    )
                }}
            </Droppable>
        </MDBContainer>
    );
}

export default Column;