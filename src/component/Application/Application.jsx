import React, {Component} from "react";
import PhoneBookTable from "./phoneBookTable/PhoneBookTable";
import Form from "./AddPhone/AddPhone";
import Modal from "./modal/Modal"
import style from "./Application.module.css";
import EditForm from "./EditForm/EditForm"
class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesDelete:[],
            valuesEdit:[],
            showModal:true,
            showPage: "Form" ,
            data: [
                {
                    id:1,
                    name:"ali",
                    family:"nazemy",
                    email:"ali52@gmail.com",

                },
                {
                    id:2,
                    name:"alireza",
                    family:"fatahi",
                    email:"ali22@gmail.com",

                },
                {
                    id:3,
                    name:"aliakbar",
                    family:"salary",
                    email:"ali14@gmail.com",

                },
                {
                    id:5,
                    name:"aliasghar",
                    family:"vajedy",
                    email:"asghar15@gmail.com",

                },
            ]
        }
    }
    showHandle = () =>{
        (this.state.showPage === "Table")?this.setState({showPage: "Form"}):this.setState({showPage:"Table"}) ;
     
    }
    getPhoneObj = (obj) => { 
        this.setState({data:[...this.state.data,obj]});
        
    } 
    resetPhoneObj = (data) => { 
        this.setState({data:data});
        
    } 
    getValuesDelete = (values) => {
        
        this.setState({valuesDelete:values}) 
    }
    getValuesEdit = (values) => {
        
        this.setState({valuesEdit:values}) 
    }
    
    render() { 
        return ( 
            <div>
                <button className={style.btn} onClick={this.showHandle} >{this.state.showPage}</button>
                <EditForm data={this.state.data} values={this.state.valuesEdit} resetPhoneObj={this.resetPhoneObj} />
                <Modal data={this.state.data} values={this.state.valuesDelete} resetPhoneObj={this.resetPhoneObj} />
                { (this.state.showPage === "Form") && <PhoneBookTable data={this.state.data} getValuesDelete={this.getValuesDelete} getValuesEdit={this.getValuesEdit}/>}
                { (this.state.showPage === "Table") && <Form data={this.state.data} getPhoneObj={this.getPhoneObj}/> }
            </div>
         );
    }
}
 
export default Application ;