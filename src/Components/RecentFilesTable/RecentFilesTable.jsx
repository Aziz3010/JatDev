// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./RecentFilesTable.css";
import Arrow from "../../Assets/Vectors/upArrow.svg";
import { RecentFileTableData } from "../../Assets/Data/Data";
import FriendsImages from '../FriendsImages/FriendsImages';

const RecentFilesTable = () => {
    // const [recentFilesData, setRecentFilesData] = useState([]);

    return (
        <div className="left recentFiles">
            <div className="top">
                <h3>Recent FIle</h3>
                <Link to={"/viewall"}>View All</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>name <img src={Arrow} alt="Arrow" /></th>
                        <th>size <img src={Arrow} alt="Arrow" /></th>
                        <th>lastmodified <img src={Arrow} alt="Arrow" /></th>
                        <th>members <img src={Arrow} alt="Arrow" /></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        RecentFileTableData.map((file, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="img">
                                        {
                                            typeof file.icon === "string" ?
                                                <img src={file.icon} alt={file.name} />
                                                :
                                                file.icon
                                        }
                                    </div>
                                    <h4>{file.name}</h4>
                                </td>
                                <td>{file.size}</td>
                                <td>{file.lastModified}</td>
                                <td>
                                    <FriendsImages key={index} FriendsOnCall={file.members} />
                                </td>
                                <td>
                                    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7ZM2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14Z" fill="#768396" />
                                    </svg>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecentFilesTable;