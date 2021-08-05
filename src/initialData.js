import bread_up from './images/bread_up.png';
import cheese from './images/cheese.png';
import burger from './images/burger.png';
import bread_down from './images/bread_down.png';

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: bread_up },
        'task-2': { id: 'task-2', content: cheese },
        'task-3': { id: 'task-3', content: burger },
        'task-4': { id: 'task-4', content: bread_down },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Burger',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
}

export default initialData;