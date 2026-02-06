import "./btn.css"
import Form from "./form"
import { useState } from "react"
function BtnCreate() {
    const [form, setForm] = useState(false);
  return (
    <>
    <button className="btn" onClick={() => setForm(true)}>Create</button>
    {form && <Form />}
    </>
  )
}

export default BtnCreate