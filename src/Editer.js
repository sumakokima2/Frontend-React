import React,{useState} from 'react';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'


// <Editer data={this.state.data}  edit={this.edit} />

const Editer = (props) => {
    const [Title,setTitle] = useState(props.data.title);
    const [Description,setDescription] = useState(props.data.description);

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
            <Button primary onClick={()=>props.edit({'title':Title,'description':Description,'id':props.data.id})}>Edit</Button>
            <Button secondary onClick={()=>props.changepage("list")}>Cancel</Button>
        </Form>
    );
}

export default Editer;