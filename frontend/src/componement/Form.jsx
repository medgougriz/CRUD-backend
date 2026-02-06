import "./form.css"
import axios from "axios";
function Form() {
    const submit = async (e)=> {
        e.preventDefault();
        const user ={
            name: document.getElementById("name").value, 
            age: document.getElementById("age").value, 
            city: document.getElementById("city").value
        }
        try{
            const res = await axios.post("http://localhost:4000/api/user",user)
            console.log("Response:", res.data);
        }catch(e){
            console.error(e)
        }
    }
        
    return (
        <>
        <div className="formpage">
        <form className="form" onSubmit={submit}>
            <p>create new person</p>
            <input id="name" type="text" placeholder="Name" />
            <input  id="age" type="number" placeholder="Age" />
            <input  id="city" type="text" placeholder="City" />
            <button className="btn" type="submit" >Submit</button>
        </form>
        </div>
        </>
    )
}

export default Form