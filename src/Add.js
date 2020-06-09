import React,{useState} from 'react';
import { Form, Button } from 'semantic-ui-react';

const Add = props =>{
    const [Title,setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const onChange = (e) =>{
        if(e.target.placeholder==="Title"){
            setTitle(e.target.value);
        }
        else{
            setDescription(e.target.value);
        }
    }
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Title' value ={Title} onChange={onChange} />
            </Form.Group>
            <Form.TextArea label='Detail' placeholder='what should I do?' value= {Description} onChange={onChange}/>
            <Button primary onClick={()=>props.add({'title':Title,'description':Description,'id':""})}>Add</Button>
            <Button secondary onClick={()=>props.changepage("list")}>Cancel</Button>
        </Form>
    );

}

export default Add;