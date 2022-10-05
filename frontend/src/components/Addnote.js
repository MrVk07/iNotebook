import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"



function Addnote(props) {
    const context = useContext(noteContext)
    const { addNote } = context
    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully", "success")
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3">
            <h2>Add Notes</h2>

            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input value={note.title} type="text" className="form-control" id="title" name='title' onChange={onChange} minLength={5} required />
                    <h6 className='mt-1 mb-0' style={{ opacity: "50%" }}>Atleast 5 characters</h6>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input value={note.description} type="text" className="form-control" id="description" name='description' onChange={onChange} minLength={5} required />
                    <h6 className='mt-1 mb-0' style={{ opacity: "50%" }}>Atleast 5 characters</h6>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="row" className="col-sm-2 col-form-label">Tag</label>
                <div className="col-sm-10">
                    <input value={note.tag} type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>
            </div>
            <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default Addnote