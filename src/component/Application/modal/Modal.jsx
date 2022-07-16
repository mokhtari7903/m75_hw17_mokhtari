import React, {Component} from "react";
import style from "./Modal.module.css";
import "./Modal.css"
class Modal extends Component {
    constructor(props) {
        super(props);
       
    }
    cancleHandle = () => {
        document.querySelector("#divDelete").classList.add("hidden")
    }
    deleteHandle = () => {
        
        const id = this.props.values[0]
        document.querySelector("#divDelete").classList.add("hidden");
        const newData = this.props.data.filter((obj) => {return  +obj.id !== +id })
        this.props.resetPhoneObj(newData)
    }

// static getDerivedStateFromProps (newProps, prevState ){

//     if(newProps !== prevState){

//         return {
//             data:newProps.data,
//             values: newProps.values,
//             setPhoneObj : newProps.resetPhoneObj,
//         }
//     }else{
//         return null;
//     }
// }



   
    render() { 
        
        return (
            <div id="divDelete" className={`${style.modalBg} hidden`}>

            <form onSubmit={(e) => {e.preventDefault()}} id="formDelete" className={style.formDelete}>
                <label htmlFor="id">Id:</label>
                <input name="id" type="text" value={this.props.values[0]} disabled/>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" value={this.props.values[1]} disabled/>
                
                
                <label htmlFor="family">Family:</label>   
                <input name="family" type="text"  value={this.props.values[2]} disabled/>
                
                <label htmlFor="email">Email:</label>
                <input name="email" type="text"  value={this.props.values[3]} disabled/>
                <div>
                <button className={style.btnC} onClick={this.cancleHandle}>Cancle</button>
                <button className={style.btnD} onClick={() => {this.deleteHandle()}}>Delete</button>

                </div>
                
            </form>
            </div> 
         );
    }
}
 
export default Modal;