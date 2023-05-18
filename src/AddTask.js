
import { useContext } from 'react'
import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {TaskContent} from './context/usecontext'

const AddTask = () => {

    const {dispatch} = useContext(TaskContent)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addTask = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_TASK',payload:{title,description}})
        setTitle('');
        setDescription('');
        
    }

    return (
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Title" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Description" value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <div className="flex-container">
                <Col md={3} >
                    <Button variant="primary" type="submit" onClick={addTask}>
                        Add Task
                    </Button>
                </Col>
            </div>
        </Row>
    )
}

export default AddTask