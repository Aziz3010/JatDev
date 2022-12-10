import React from 'react';
import "./Folders.css";

const Folders = ({ FolderDetails }) => {
    return (
        <div className="folderBox">
            <div className="top">
                {FolderDetails?.folderIcon}
                <div className="subFolders">
                    {
                        FolderDetails?.folderSubFolder?.length > 0 ?
                            FolderDetails?.folderSubFolder.map((fol, index) => (
                                <div key={index} className="sf" style={{ backgroundColor: `${fol.color}` }}>{fol.name}</div>
                            ))
                            : null
                    }
                </div>
            </div>
            <h3>{FolderDetails?.folderName}</h3>
            <p>{FolderDetails?.folderFilesCount} files</p>
        </div>
    )
}

export default Folders;