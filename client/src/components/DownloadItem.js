import "./DownloadItem.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//Components
import DownloadModal from "../components/DownloadModal";


const DownloadItem = () => {
    const [ modal, setModal ] = useState(false);
    const [ clickTimer, setClickTimer ] = useState(false);

    async function downloadFile2() {
        axios({
            url: `/uploads/pdf-content.png`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
        
            // create "a" HTLM element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', `pdf-content.png`); //or any other extension
            link.download = `/uploads/pdf-content.png`
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    } 
    return (
        <div className = "downloaditem">
            <div className="downloaditem-image">
                <img src={`/images/pdf-icon.png`} alt={"pdf-file"} />
            </div>
           <div className="downloaditem-btn-container">
                <div>
                    <button onClick={() => {downloadFile2(); setModal(true); setClickTimer(true)}} className="btn-download">
                        <i className='fa-solid fa-download'></i>Download
                    </button>
                    <DownloadModal 
                        key={"item.product"}
                        item={"item"}
                        visible={modal}
                        setVisible={setModal}
                        timer={clickTimer}
                    />
                </div>
            </div>
        </div>
    );
};


export default DownloadItem;