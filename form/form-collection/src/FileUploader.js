import { useState, useRef } from "react";
import TextField from './TextField';
import LargerTextfield from './LargerTextfield';

const FileUploader = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // );
  };

  const handleOpenModal = (file) => {
    setCurrentFile(file);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentFile(null);
    setModalIsOpen(false);
  };

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx} className="file-box" onClick={() => handleOpenModal(file)}>
              {file.name}
            </li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
        {modalIsOpen && (
          <div className="modal">
            
            <h1>{currentFile.name}</h1>
            <div className="modal-field-container">
               
                    <TextField title="Designer" placeholder="Value" />
                    <TextField title="Designer" placeholder="Value" />
                    <TextField title="Designer" placeholder="Value" />
            </div>
            <div className="modal-actions">
            <LargerTextfield title="Designer" placeholder="Value" />
                </div>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h3>Drag Files Here</h3>

        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />

        <button onClick={() => inputRef.current.click()}>Select Files</button>
      </div>
    </>
  );
};

export default FileUploader;
