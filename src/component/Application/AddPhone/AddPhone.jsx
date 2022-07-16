import React, {Component} from "react";
import style from "./AddPhone.module.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        nameError:"",
        familyError:"",
        emailError:"",
           
        }
    }
    creatNewId = (data) => {
        let newId = 1;
        let objId ;
        const dataId = data.map((obj) => {return +obj.id})
         for (let i = 0; i <= data.length; i++) {
           if(dataId.includes(newId)){
             newId++
           }else{
             objId = newId;
             break;
           };
             
         }
         return objId
    }
    validation = (value) => {
        let a = false;
        let b = false;
        let c = false;
        
        if(value[1] === ""){
                
            this.setState({nameError:"Name is empty"})
            
        }else if(value[1].length < 3){
            this.setState({nameError:"Name length is less than 3"})
            
            
        }else{
            this.setState({nameError:""})
            a =true
        }
        if(value[2] === ""){
            
            this.setState({familyError:"Family is empty"})
            
        }else if(value[2].length < 3){
            this.setState({familyError:"Family length is less than 3"})
            
            
        }else{
            this.setState({familyError:""})
            b =true
        }
        if(value[3] === ""){
            
            this.setState({emailError:"Email is empty"})
            
        }else if(!value[3].includes("@", 2) || !value[3].includes(".", 5) ){
            this.setState({emailError:"Email is invalid"})
            
            
        }else{
            
            this.setState({emailError:""})
            c =true
        }
        if(a && b && c){
            return true;

        }else{
            return false;
        }
    }
    submitHandle = (e) => {
        e.preventDefault()
       const newId = this.creatNewId(this.props.data)

        const phoneObj = {id:newId}
        const formData = new FormData(e.target)
        for (const [key, value] of formData.entries()) {
            phoneObj[key] = value
        }
        const valuesPhone = Object.values(phoneObj);
        
        const isValid = this.validation(valuesPhone)
       if(isValid){
           this.props.getPhoneObj(phoneObj)

       }

            
        
    }

    // static getDerivedStateFromProps (newProps, prevState ){
        
    //     return {
    //         setPhoneObj: newProps.getPhoneObj,
    //     data: newProps.data
    //     }
    // }
    render() { 
        return (  
            <form onSubmit={(e) => {this.submitHandle(e)}} className={style.form}>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" placeholder="Name..."/>
                <div>{this.state.nameError}</div>
                
                <label htmlFor="family">Family:</label>   
                <input name="family" type="text" placeholder="Family..."/>
                <div>{this.state.familyError}</div>
                <label htmlFor="email">Email:</label>
                <input name="email" type="text" placeholder="Email..."/>
                <div>{this.state.emailError}</div>
                <button type="submit">Add</button>
                
            </form>
        );
    }
}
 
export default Form;