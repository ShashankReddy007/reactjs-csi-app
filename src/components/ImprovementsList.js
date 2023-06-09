import React, { useState, useEffect } from "react";
import ImprovementDataService from "../services/ImprovementService";
import StatusButton from "../components/StatusButton";
import { Link } from "react-router-dom";

const ImprovementsList = () => {
  const statusOptions = [
    "Idea",
    "In Progress On Target",
    "In Progress At Risk",
    "Not Started",
    "On Hold",
    "Complete",
    "Results Validated",
    "Archived",
    "Delete",
  ];

  const [improvements, setImprovements] = useState([]);
  const [parentImprovements, setparentImprovements] = useState([]);
  const [currentImprovement, setCurrentImprovement] = useState(null);
  const [statusLength, setstatusLength] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchStatus, setSearchStatus] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveImprovements();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchStatus = (e) => {
    const searchStatus = e.target.value;
    setSearchStatus(searchStatus);
  };

  const retrieveImprovements = () => {
    ImprovementDataService.getAll()
      .then((response) => {
        setImprovements(response.data);
        setstatusLength(response.data.length);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //this can be removed too
  const refreshList = () => {
    retrieveImprovements();
    setCurrentImprovement(null);
    setCurrentIndex(-1);
  };

  // const setActiveImprovement = (improvement, index) => {
  //   setCurrentImprovement(improvement);
  //   setCurrentIndex(index);
  // };

  // const removeAllTutorials = () => {
  //   ImprovementDataService.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const findByTitle = () => {
    ImprovementDataService.findByTitle(searchTitle)
      .then((response) => {
        setImprovements(response.data);
        setstatusLength(response.data.length);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByStatus = () => {
    ImprovementDataService.findByStatus(searchStatus)
      .then((response) => {
        setImprovements(response.data);
        setstatusLength(response.data.length);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByStatusCustom = (statusName) => {
    ImprovementDataService.findByStatus(statusName)
      .then((response) => {
        setImprovements(response.data);
        setstatusLength(response.data.length);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by status"
            value={searchStatus}
            onChange={onChangeSearchStatus}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByStatus}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div>
          {/* <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => findByStatusCustom("Idea")}
          >
            Idea status
          </button> */}

          {/* For using improvements array itself to create status options
           {improvements.map((eachItem, index) => (
            <StatusButton
              eachItem={eachItem}
              findByStatusCustom={findByStatusCustom}
              key={index}
            />
          ))} */}
          {statusOptions.map((eachItem, index) => (
            <StatusButton
              eachItem={eachItem}
              findByStatusCustom={findByStatusCustom}
              key={index}
            />
          ))}
        </div>
        <h4>Improvements List</h4>
        <p>title count: {statusLength}</p>

        <ul className="list-group">
          {improvements &&
            improvements.map((improvement, index) => (
              <li key={index}>
                {/* <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveImprovement(improvement, index)}
                  key={index}
                >
                  {improvement.title}
                </li> */}
                <Link to={"/improvements/" + improvement.id}>
                  Title: {improvement.improvementTitle}
                </Link>
                <p>status: {improvement.status}</p>
                <p>parentImprovement: {improvement.parentImprovement}</p>
                {improvements
                  .filter(
                    (improvementItem) =>
                      improvementItem.improvementTitle ===
                      improvement.parentImprovement
                  )

                  .map((filteredImprovement, index) => (
                    <Link
                      to={"/improvements/" + filteredImprovement.id}
                      key={index}
                    >
                      <p>
                        parentImprovement:{" "}
                        {filteredImprovement.improvementTitle}
                      </p>
                    </Link>
                  ))}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImprovementsList;
