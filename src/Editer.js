import React from 'react';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'


// <Editer data={this.state.data}  edit={this.edit} />

class Editer extends React.Component { 
    constructor(props){
        super(props);
        this.TitleRef = React.createRef();
        this.DescriptionRef = React.createRef();
        this.state={
            title:this.props.data.title,
            description:this.props.data.description,
            id:this.props.data.id
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
console.log(this.state);
        return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Title' value ={this.state.title} onChange={this.onChange} />
            </Form.Group>
            <Form.TextArea label='Detail' placeholder='what should I do?' value= {this.state.description} onChange={this.onChange}/>
            <Button primary onClick={()=>this.props.edit(this.state)}>Edit</Button>
            <Button secondary onClick={()=>this.props.changepage("list")}>Cancel</Button>
        </Form>
    );
    }
}


export default Editer;