
import { useContext } from 'react'
import { Row, Table, Button } from 'react-bootstrap'
import {TaskContent} from './context/usecontext'


const TaskList = () => {

    
    const { state, dispatch } = useContext(TaskContent);

    const { tasksList } = state;

    return (<Row>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   tasksList && tasksList.map((task, index) => {
                        console.log(task)
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>
                                    <Button>Edit</Button>
                                    {/* <Button onClick={(e) => deleteTask(e,id)}>Delete</Button> */}
                                </td>
                            </tr>)
                    })

                }
            </tbody>
        </Table>
    </Row>)
}

export default TaskList