import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// This code can fetch image from database and show where we want
const [data, setData] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:5000/get_user_image")
    .then((response) => {
      console.log({ response: response });
      setData(response.data.rows[0].user_image);
    })
    .catch((error) => console.log(error));
}, []);

/**
 * This code can showpdf on button click.
 * Taking the data and storing into setViewPdf and this function can be called on button click
 */
const [viewPdf, setViewPdf] = useState([]);
const newPlugin = defaultLayoutPlugin({
  sidebarTabs: (defaultTabs) => [], // Responsible for removing the sidebar of the react-pdf-viewer.dev
});

const showPdf = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setViewPdf(data);
};

// Uploading image file functionalities
const handleFileChange = (event: {
  target: { files: SetStateAction<null>[] };
}) => {
  setFile(event.target.files[0]);
};

<section>
  <button onClick={showPdf}>View PDF</button>
  <div className="pdf-container">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
      {viewPdf && (
        <>
          <Viewer
            fileUrl={`http://localhost:5000/images/` + viewPdf}
            plugins={[newPlugin]}
          />
        </>
      )}
      {!viewPdf && <>No PDF</>}
    </Worker>
  </div>
</section>;

// Can show images fetched from database through axios.get api

<form onSubmit={handleSubmit} encType="multipart/form-data">
  <input type="file" onChange={handleFileChange} />
  <button>Upload</button>
  <br />
  <img src={`http://localhost:5000/images/` + data} alt="" />
</form>;
