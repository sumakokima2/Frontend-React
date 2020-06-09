import React, {useState} from 'react';
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

const App = props =>{
    const [data,setdata] = useState([{id:0,title:"title1",description:"aaaaaaaaa"},{id:1,title:"title2",description:"bbbbbbb"}]);
    const [selected,setSelected] = useState("");
    const [hieris, sethieris] = useState("list");

    const delate = (num) =>{
        setdata(data.filter(item => item.id !== num));
        sethieris("list");
    }
    const edit = (add) =>{
        const arr = data.slice();
        console.log(add);
        arr[add.id] = add;
        console.log(arr);
        setdata(arr);
        sethieris("list");
    }

    const add = (add) => {
        const arr = data.slice();
        const newarr = [...arr,add];
        newarr.map((ar,index) =>{
            ar.id = index;
        });
        setdata(newarr);
        sethieris("list");
    }
    const changepage = (param,arr) => {
        if(param==='edit'){
            setSelected(arr);
            sethieris(param);
            showpage(param);
        }
        else{
            sethieris(param);
        }
    }
    const showpage = (param,arr) => {
        switch(hieris){
            case 'list' : return(
                <div><Header size='huge' textAlign='center'>To Do List2</Header>
                <Button onClick={() => changepage('add')}>Add</Button><ListArr data={data} delate={delate} changepage={changepage} /></div>
            );
            case 'edit':return <Editer data={selected} edit={edit} changepage={changepage}/>;
            case 'add' :return <Add id ={data.length} add={add} changepage={changepage}/>

        }
    }
    return (<div>{ showpage("list") }</div>
    );
} 

ReactDom.render(
    <App />,
    document.querySelector("#root")
)