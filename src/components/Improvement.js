import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ImprovementDataService from "../services/ImprovementService";

const Improvement = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialImprovementState = {
    id: null,
    parentImprovement: "",
    improvementTitle: "",
    due: "",
    description: "",
    primaryBenefitType: "",
    service: "",
    serviceOption: "",
    impactedApplication: "",
    impactedBusiness: "",
    impactedGOC: "",
    impactedRegion: "",
    stage: "",
    status: "",
    statusNote: "",
    owner: "",
    improvementCategory: "",
    automationTechnology: "",
    requestedAmount: "",
    committedAmount: "",
    spentAmount: "",
    secondaryOwner: "",
    vendor: "",
    baselineValue: "",
    expectedImprovement: "",
    actualImprovement: "",
    projectedCurrentYearIncementalCost: null,
    projectedOngoingAnnualCost: null,
    projectedCurrentYearTicketsAutomated: null,
    projectedAnnualTicketsAutomated: null,
    projectedCurrentYearTicketsEliminated: null,
    projectedAnnualTicketsEliminated: null,
    projectedCurrentYearEffortHoursSaved: null,
    projectedAnnualEffortHoursSaved: null,
    projectedCurrentYearP1P2TicketsEliminated: null,
    projectedAnnualP1P2TicketsEliminated: null,
    otherCurrentYearCostSavings: null,
    otherAnnualYearCostSavings: null,
  };
  const [currentImprovement, setCurrentImprovement] = useState(initialImprovementState);
  const [message, setMessage] = useState("");

  const getTutorial = id => {
    ImprovementDataService.get(id)
      .then(response => {
        setCurrentImprovement(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentImprovement({ ...currentImprovement, [name]: value });
  };

  // const updatePublished = status => {
  //   var data = {
  //     id: currentImprovement.id,
  //     title: currentImprovement.title,
  //     description: currentImprovement.description,
  //     published: status
  //   };

  //   ImprovementDataService.update(currentImprovement.id, data)
  //     .then(response => {
  //       setCurrentImprovement({ ...currentImprovement, published: status });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const updateImprovement = () => {
    ImprovementDataService.update(currentImprovement.id, currentImprovement)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
        navigate("/improvements");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    ImprovementDataService.remove(currentImprovement.id)
      .then(response => {
        console.log(response.data);
        navigate("/improvements");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentImprovement ? (
        <div className="edit-form">
          <h4>Improvement</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="improvementTitle"
                value={currentImprovement.improvementTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentImprovement.description}
                onChange={handleInputChange}
              />
            </div>

            {/* <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentImprovement.published ? "Published" : "Pending"}
            </div> */}
          </form>

          {/* {currentImprovement.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )} */}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateImprovement}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Improvement...</p>
        </div>
      )}
    </div>
  );
};

export default Improvement;
