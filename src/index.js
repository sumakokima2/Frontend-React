import React from 'react';
import ReactDom from 'react-dom';
import { List } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import Add from　'./Add';
import Editer from './Editer';

const ListItem = ({data,delate,changepage}) =>{
    return (
         
    <List.Item>
      <List.Icon onClick={()=>delate(data.id)} name='check circle outline' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{data.title}</List.Header>
        <List.Description as='a'>{data.description}</List.Description>
      </List.Content>
      <List.Icon onClick={()=>changepage('edit',data)} name='edit' size='large' verticalAlign='middle' />
    </List.Item>
    );

}

const ListArr = ({data,delate,changepage}) =>{
    console.log(data);
    const array = data.map((data) =>{
        return (
            <ListItem key = {data.id} data = {data} delate = {delate} changepage = {changepage}/>
            );
    });
    return (
        <List divided relaxed>
        {array}
        </List>
        );
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[{id:0,title:"title1",description:"aaaaaaaaa"},{id:1,title:"title2",description:"bbbbbbb"}],
            selected:"",
            hieris:"list"
        }
    }

    delate = (num) =>{
        const newarr = this.state.data.filter(item => item.id !== num);
        this.setState({ data:newarr, hieris:"list"});
    }

    edit = (data) => {
        const arr = this.state.data;
        arr[data.id] = data;
        console.log(data);

        this.setState({
            data:arr,
            hieris:"list"
        });
    }

    add = (data) => {
        const arr = this.state.data.slice();
        const newarr = [...arr,data];
        newarr.map((data,index) =>{
            data.id = index;
        });
        this.setState({ data:newarr, hieris:"list"});
    }

    changepage = (param,data) => {
        if(param==='edit'){
            this.setState({
                hieris:param,
                selected:data
            });
            this.showpage(param);
        }
        else{
            this.setState({hieris:param});
        }
    }

    showpage(param,data){
        switch(this.state.hieris){
            case 'list' : return(
                <div><Header size='huge' textAlign='center'>To Do List</Header>
                <Button onClick={() => this.changepage('add')}>Add</Button><ListArr data={this.state.data} delate={this.delate} changepage={this.changepage} /></div>
            );
            case 'edit':return <Editer data={this.state.selected} edit={this.edit} changepage={this.changepage}/>;
            case 'add' :return <Add id ={this.state.data.length} add={this.add} changepage={this.changepage}/>

        }
    }

    render(){
        return (<div>{ this.showpage("list") }</div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
)