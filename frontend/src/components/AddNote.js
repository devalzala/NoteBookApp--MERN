import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (note.title == "" || note.title == undefined) {
      toast.error("Enter Title");
    } else if (note.description == "" || note.description == undefined) {
      toast.error("Enter Description");
    } else if (note.tag == "" || note.tag == undefined) {
      toast.error("Enter Tag");
    } else if (note.title.length < 5 || note.description.length < 5) {
      toast.error("Title and Description must be greater than 5 characters!!!");
    } else {
      addNote(note.title, note.description, note.tag);
      setNote({
        title: "",
        description: "",
        tag: "",
      });
      toast.success("Note added successfully")
    }

  };

  const onChange = (e) => {
    // console.log(e.target.value);
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container my-3">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        icon={false}
      />
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>

        <button
          // disabled={note.title.length < 0 || note.description.length < 0}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
