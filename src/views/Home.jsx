import React, { useEffect, useState } from "react";
import { GrCloudDownload } from "react-icons/gr";
import { fetchAppData, fetchTableData } from "../services/apicalls";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";

const Home = () => {
  const [appData, setAppData] = useState();
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);

  const indexOfLastrow = currentPage * rowsPerPage;
  const indexOfFirstrow = indexOfLastrow - rowsPerPage;
  const CurrentPost = tableData?.slice(indexOfFirstrow, indexOfLastrow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchAppData().then((response) => {
      setAppData(response.data);
    });

    fetchTableData("2022-06-01", "2022-07-01").then((response) => {
      console.log("response1::::", response.data.data);
      setTableData(response.data.data);
    });
  }, []);

  return (
    <div className="d-flex flex-column w-100 text-white">
      <div className="m-2 primary-color rounded px-5 py-4 header-card">
        <div className="d-flex align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.activeinstall}
            <small>Active Installed</small>
          </span>
        </div>
        <div className="d-flex  align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.aliveappusers}
            <small>Alive App Users</small>
          </span>
        </div>
        <div className="d-flex  align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.totalInstall}
            <small>Total Installed</small>
          </span>
        </div>
        <div className="d-flex  align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.totaluninstall}
            <small>Total uninstalled</small>
          </span>
        </div>
        <div className="d-flex  align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.alivechurn}
            <small>Alive Churn</small>
          </span>
        </div>
        <div className="d-flex  align-items-center">
          <span className="text-white px-3 dashboard-icon">
            <GrCloudDownload />
          </span>
          <span className="d-flex flex-column">
            {appData?.churn}
            <small>Churn</small>
          </span>
        </div>
      </div>
      <div className="m-2 primary-color rounded p-3 pb-2">
        <div className="main-wrapper d-flex justify-content-between mb-2">
          <span>
          <label htmlFor="entries ">Show</label>&nbsp;&nbsp;
          <select name="entries " id="entry">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
          </span>
          
          <input type="date" />
        </div>
        <div>
          <table>
            <thead>
              <tr className="text-center">
                <th>Date</th>
                <th>Day Installs</th>
                <th>Plateform</th>
                <th>Day Uninstalls</th>
                <th>Plateforms</th>
                <th>Churn Rate</th>
                <th>Churn Plateform</th>
              </tr>
            </thead>
            <tbody>
              {CurrentPost?.map((val, id) => {
                let date = moment(val.created_At).utc().format("Do MMM YY")
                return (
                  <tr className="text-center" key={id}>
                    <td>{date}</td>
                    <td className="text-center">{val.totalinstall}</td>
                    <td className="d-flex flex-column">
                      <span>
                        <AiFillAndroid />
                        <small className="ml-2">{val.android_install}</small>
                      </span>
                      <span>
                        <AiFillApple />
                        <small className="ml-2">{val.ios_install}</small>
                      </span>
                    </td>
                    <td>{val.totaluninstall}</td>
                    <td className="d-flex flex-column">
                      <span>
                        <AiFillAndroid />
                        <small className="ml-2">{val.android_uninstall}</small>
                      </span>
                      <span>
                        <AiFillApple />
                        <small className="ml-2">{val.ios_uninstall}</small>
                      </span>
                    </td>
                    <td>{val.totalchurn}</td>
                    <td className="d-flex flex-column">
                      <span>
                        <AiFillAndroid />
                        <small className="ml-2">{val.android_churn}</small>
                      </span>
                      <span>
                        <AiFillApple />
                        <small className="ml-2">{val.totalchurn}</small>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            rowsPerPage={rowsPerPage}
            totalrows={tableData?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// Pagination

const Pagination = ({ rowsPerPage, totalrows, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalrows / rowsPerPage); i++) {
    console.log("i::::", i);
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul className="pagination m-0">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)} to="#" className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
