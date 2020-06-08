import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class Add extends React.Component { 
    constructor(props){
        super(props);
        this.TitleRef = React.createRef();
        this.DescriptionRef = React.createRef();
        this.state={
            title:"",
            description:"",
            id:this.props.id
        }
    }
    
    onChange = (e) =>{
        if(e.target.placeholder==="Title"){
            this.setState({
                title: e.target.value
            });
        }
        else{
            this.setState({
                description: e.target.value    
            }); 
        }
    }

    render(){
        return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Title' value ={this.state.title} onChange={this.onChange} />
            </Form.Group>
            <Form.TextArea label='Detail' placeholder='what should I do?' value= {this.state.description} onChange={this.onChange}/>
            <Button primary onClick={()=>this.props.add(this.state)}>Add</Button>
            <Button secondary onClick={()=>this.props.changepage("list")}>Cancel</Button>
        </Form>
    );
    }
}


export default Add;