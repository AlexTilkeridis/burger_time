import './App.css';
import { useState } from 'react';
import initialData from './initialData';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [state, setState] = useState(initialData)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }

    setState(newState);
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map(taskId => state.tasks[taskId])

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  )
}

export default App;
