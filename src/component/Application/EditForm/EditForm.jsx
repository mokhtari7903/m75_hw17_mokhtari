import React, {Component} from "react";
import "./EditForm.css";
import style  from "./EditForm.module.css";
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.isChangeValue = true;
        this.state = {
            nameError:"",
            familyError:"",
            emailError: ""
        }
    }
        
    validation = (obj) => {
       let isvalid ={
        name:false,
        family:false,
        email:false,
       }
        for (const k in obj) {
         let error = ""
          let errorName = `${k}Error`;

         if(obj[k] === "" ){ 
           error = `${k} is empty`;

        }else if(obj[k].length < 3){
            error = `${k} length is less than 3`
        }else{
            error ="" 
            isvalid[k] =true; 
        }
        if(k === "email" && ( !obj[k].includes("@", 2) || !obj[k].includes(".", 5)) ){
            isvalid[k] = false;
            error = "Email is invalid";
        }   
            
        this.setState({[errorName]:error})
    }
    
    const isVal = (obj) => {

        let tempValid = true;
        for (const k in obj) {
            
            if(!obj[k]){
                tempValid = false;
                break;
            }
        }
        return tempValid
    }

    return isVal(isvalid)
        // if(obj.name === ""){
            
        // }else{
        //     this.setState({nameError:""})
        //     a =true
        // }
        // if(value[2] === ""){
            
        //     this.setState({familyError:"Family is empty"})
        
        // }else if(value[2].length < 3){
        //     this.setState({familyError:"Family length is less than 3"})
            
            
        // }else{
        //     this.setState({familyError:""})
        //     b =true
        // }
        // if(value[3] === ""){
            
        //     this.setState({emailError:"Email is empty"})
            
        // }else if(!value[3].includes("@", 2) || !value[3].includes(".", 5) ){
        //     this.setState({emailError:"Email is invalid"})
            
            
        // }else{
            
        //     this.setState({emailError:""})
        //     c =true
        // }
    }     
    cancleHandle = () => {
        this.isChangeValue = true;
        document.querySelector("#divEdit").classList.add("hidden");
        this.setState( {
            nameError:"",
            familyError:"",
            emailError: ""
        })

    }
    editHandle = () => {
        
        const inputs =[...document.querySelectorAll("#formEdit input")];
        const phoneObj = {}

       inputs.forEach((input) => {phoneObj[input.name] = input.value});
       const newData = this.props.data.map((obj) => {
        return +obj.id === +phoneObj.id? phoneObj:obj;
       })
       const isValid = this.validation(phoneObj);
       if(isValid){
           
           document.querySelector("#divEdit").classList.add("hidden");
            this.props.resetPhoneObj(newData);
        }else{
            this.isChangeValue = false;
        }
       console.log("run edit");
    }
    componentWillUpdate(){

    }
    
    componentDidUpdate(){
        if(this.isChangeValue){
            const inputs =[...document.querySelectorAll("#formEdit input")];
           inputs.forEach((input, i) => {input.value = this.props.values[i]}); 

        }
    }
   
    render() { 
       
        return (
            <div id="divEdit" className={`${style.modalBg} hidden`}>

            <form onSubmit={(e) => {e.preventDefault()}} id="formEdit" className={style.formEdit}>
                <label htmlFor="id">Id:</label>
                <input name="id" type="text" disabled />
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" />
                <span>{this.state.nameError}</span>
                
                
                <label htmlFor="family">Family:</label>   
                <input name="family" type="text"  />
                <span>{this.state.familyError}</span>
                
                <label htmlFor="email">Email:</label>
                <input name="email" type="text"  />
                <span>{this.state.emailError}</span>
                <div>
                <button className={style.btnC} onClick={this.cancleHandle}>Cancle</button>
                <button className={style.btnE} onClick={this.editHandle}> Edit </button>

                </div>
                
            </form>
            </div> 
         );
    }
}
 
export default EditForm;