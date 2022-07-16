import React, {Component} from "react";
import style from "./PhoneBookTable.module.css"
class PhoneBookTable extends Component {
    constructor(props) {
        super(props);
       

        // }
    }
    deleteHandle(e, id){
    document.querySelector("#divDelete").classList.remove("hidden")
    const values =  [...e.target.closest("tr").children].map((td) => {return td.innerText})
    values.splice(values.length - 2, 2 );
    
    this.props.getValuesDelete(values)
    // const newData = this.state.data.filter((obj) => {return  obj.id !== id })
    // this.state.setPhoneObj(newData)
    
}

editHandle(e, id){
    document.querySelector("#divEdit").classList.remove("hidden")
    const values =  [...e.target.closest("tr").children].map((td) => {return td.innerText})
    values.splice(values.length - 2, 2 );
    
    this.props.getValuesEdit(values)
    
    }
    // static getDerivedStateFromProps (newProps, prevState ){
    //     if(newProps !== prevState){

    //         return {
    //             data: newProps.data,
    //             setPhoneObj : newProps.resetPhoneObj,
    //         }
    //     }else{
    //         return null;
    //     }
    // }
    
    render() { 
        
        return ( 
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.cell}>Id</th>

                        <th className={style.cell}>name</th>

                        <th className={style.cell}>family</th>

                        <th className={style.cell}>Email</th>

                        <th className={style.cell} colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.sort((a, b) => {return a.id - b.id}).map((item) => {return (
                        <tr key={item.id}>
                        <td className={style.cell}>{item.id}</td>
                        <td className={style.cell}>{item.name}</td>
                        <td className={style.cell}>{item.family}</td>
                        <td className={style.cell}>{item.email}</td>
                        <td className={style.cell}> <button className={style.btnD} onClick={(e) => {this.deleteHandle(e, item.id)}}>Delete</button></td>
                        <td className={style.cell}> <button className={style.btnE}  onClick={(e) => {this.editHandle(e, item.id)}}>Edit</button></td>

                        </tr>
                    ) })}
                </tbody>
            </table>
         );
    }
}
 
export default PhoneBookTable;