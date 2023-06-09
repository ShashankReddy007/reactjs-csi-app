import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImprovementDataService from "../services/ImprovementService";

const AddImprovement = () => {
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

  let navigate = useNavigate();

  const initialImprovementState = {
    id: null,
    parentImprovement: "",
    improvementTitle: "",
    due: new Date(""),
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
    projectedCurrentYearIncementalCost: "",
    projectedOngoingAnnualCost: "",
    projectedCurrentYearTicketsAutomated: "",
    projectedAnnualTicketsAutomated: "",
    projectedCurrentYearTicketsEliminated: "",
    projectedAnnualTicketsEliminated: "",
    projectedCurrentYearEffortHoursSaved: "",
    projectedAnnualEffortHoursSaved: "",
    projectedCurrentYearP1P2TicketsEliminated: "",
    projectedAnnualP1P2TicketsEliminated: "",
    otherCurrentYearCostSavings: "",
    otherAnnualYearCostSavings: "",
  };
  // const initialImprovementState = {
  //   id: null,
  //   title: "",
  //   description: "",
  //   published: false
  // };
  const [improvement, setImprovement] = useState(initialImprovementState);
  const [improvements, setImprovements] = useState([]);
  //const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveImprovements();
  }, []);

  const retrieveImprovements = () => {
    ImprovementDataService.getAll()
      .then((response) => {
        setImprovements(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setImprovement({ ...improvement, [name]: value });
  };

  const saveImprovement = () => {
    var data = {
      parentImprovement: improvement.parentImprovement,
      improvementTitle: improvement.improvementTitle,
      due: improvement.due,
      description: improvement.description,
      primaryBenefitType: improvement.primaryBenefitType,
      service: improvement.service,
      serviceOption: improvement.serviceOption,
      impactedApplication: improvement.impactedApplication,
      impactedBusiness: improvement.impactedBusiness,
      impactedGOC: improvement.impactedGOC,
      impactedRegion: improvement.impactedRegion,
      stage: improvement.stage,
      status: improvement.status,
      statusNote: improvement.statusNote,
      owner: improvement.owner,
      improvementCategory: improvement.improvementCategory,
      automationTechnology: improvement.automationTechnology,
      requestedAmount: improvement.requestedAmount,
      committedAmount: improvement.committedAmount,
      spentAmount: improvement.spentAmount,
      secondaryOwner: improvement.secondaryOwner,
      vendor: improvement.vendor,
      baselineValue: improvement.baselineValue,
      expectedImprovement: improvement.expectedImprovement,
      actualImprovement: improvement.actualImprovement,
      projectedCurrentYearIncementalCost:
        improvement.projectedCurrentYearIncementalCost,
      projectedOngoingAnnualCost: improvement.projectedOngoingAnnualCost,
      projectedCurrentYearTicketsAutomated:
        improvement.projectedCurrentYearTicketsAutomated,
      projectedAnnualTicketsAutomated:
        improvement.projectedAnnualTicketsAutomated,
      projectedCurrentYearTicketsEliminated:
        improvement.projectedCurrentYearTicketsEliminated,
      projectedAnnualTicketsEliminated:
        improvement.projectedAnnualTicketsEliminated,
      projectedCurrentYearEffortHoursSaved:
        improvement.projectedCurrentYearEffortHoursSaved,
      projectedAnnualEffortHoursSaved:
        improvement.projectedAnnualEffortHoursSaved,
      projectedCurrentYearP1P2TicketsEliminated:
        improvement.projectedCurrentYearP1P2TicketsEliminated,
      projectedAnnualP1P2TicketsEliminated:
        improvement.projectedAnnualP1P2TicketsEliminated,
      otherCurrentYearCostSavings: improvement.otherCurrentYearCostSavings,
      otherAnnualYearCostSavings: improvement.otherAnnualYearCostSavings,
    };

    ImprovementDataService.create(data)
      .then((response) => {
        setImprovement({
          id: response.data.id,
          parentImprovement: response.data.parentImprovement,
          improvementTitle: response.data.improvementTitle,
          due: response.data.due,
          description: response.data.description,
          primaryBenefitType: response.data.primaryBenefitType,
          service: response.data.service,
          serviceOption: response.data.serviceOption,
          impactedApplication: response.data.impactedApplication,
          impactedBusiness: response.data.impactedBusiness,
          impactedGOC: response.data.impactedGOC,
          impactedRegion: response.data.impactedRegion,
          stage: response.data.stage,
          status: response.data.status,
          statusNote: response.data.statusNote,
          owner: response.data.owner,
          improvementCategory: response.data.improvementCategory,
          automationTechnology: response.data.automationTechnology,
          requestedAmount: response.data.requestedAmount,
          committedAmount: response.data.committedAmount,
          spentAmount: response.data.spentAmount,
          secondaryOwner: response.data.secondaryOwner,
          vendor: response.data.vendor,
          baselineValue: response.data.baselineValue,
          expectedImprovement: response.data.expectedImprovement,
          actualImprovement: response.data.actualImprovement,
          projectedCurrentYearIncementalCost:
            response.data.projectedCurrentYearIncementalCost,
          projectedOngoingAnnualCost: response.data.projectedOngoingAnnualCost,
          projectedCurrentYearTicketsAutomated:
            response.data.projectedCurrentYearTicketsAutomated,
          projectedAnnualTicketsAutomated:
            response.data.projectedAnnualTicketsAutomated,
          projectedCurrentYearTicketsEliminated:
            response.data.projectedCurrentYearTicketsEliminated,
          projectedAnnualTicketsEliminated:
            response.data.projectedAnnualTicketsEliminated,
          projectedCurrentYearEffortHoursSaved:
            response.data.projectedCurrentYearEffortHoursSaved,
          projectedAnnualEffortHoursSaved:
            response.data.projectedAnnualEffortHoursSaved,
          projectedCurrentYearP1P2TicketsEliminated:
            response.data.projectedCurrentYearP1P2TicketsEliminated,
          projectedAnnualP1P2TicketsEliminated:
            response.data.projectedAnnualP1P2TicketsEliminated,
          otherCurrentYearCostSavings:
            response.data.otherCurrentYearCostSavings,
          otherAnnualYearCostSavings: response.data.otherAnnualYearCostSavings,
        });
        //setSubmitted(true);
        console.log(response.data);
        navigate("/improvements");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const newTutorial = () => {
  //   setImprovement(initialImprovementState);
  //   //setSubmitted(false);
  // };

  return (
    <div className="submit-form">
      {/* <div className="form-group">
        <label htmlFor="parentImprovement">Parent Improvement</label>
        <input
          type="text"
          className="form-control"
          id="parentImprovement"
          required
          value={improvement.parentImprovement}
          onChange={handleInputChange}
          name="parentImprovement"
        />
      </div> */}

      <div className="form-group">
        <label htmlFor="parentImprovement">Parent Improvement</label>
        <select
          onChange={handleInputChange}
          className="form-control"
          name="parentImprovement"
          value={improvement.parentImprovement}
          id="parentImprovement"
          required
          placeholder="Please choose one option"
        >
          {/* <option>Please choose one option</option> */}
          {improvements.map((eachItem, index) => {
            return <option key={index}>{eachItem.parentImprovement}</option>;
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="improvementTitle">Improvement Title</label>
        <input
          type="text"
          className="form-control"
          id="improvementTitle"
          required
          value={improvement.improvementTitle}
          onChange={handleInputChange}
          name="improvementTitle"
        />
      </div>

      <div className="form-group">
        <label htmlFor="due">Due</label>
        <input
          type="date"
          className="form-control"
          id="due"
          required
          value={improvement.due}
          onChange={handleInputChange}
          name="due"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          required
          value={improvement.description}
          onChange={handleInputChange}
          name="description"
        />
      </div>

      <div className="form-group">
        <label htmlFor="primaryBenefitType">Primary Benefit Type</label>
        <input
          type="text"
          className="form-control"
          id="primaryBenefitType"
          required
          value={improvement.primaryBenefitType}
          onChange={handleInputChange}
          name="primaryBenefitType"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service</label>
        <input
          type="text"
          className="form-control"
          id="service"
          required
          value={improvement.service}
          onChange={handleInputChange}
          name="service"
        />
      </div>

      <div className="form-group">
        <label htmlFor="serviceOption">Service Option</label>
        <input
          type="text"
          className="form-control"
          id="serviceOption"
          required
          value={improvement.serviceOption}
          onChange={handleInputChange}
          name="serviceOption"
        />
      </div>

      <div className="form-group">
        <label htmlFor="impactedApplication">Impacted Application</label>
        <input
          type="text"
          className="form-control"
          id="impactedApplication"
          required
          value={improvement.impactedApplication}
          onChange={handleInputChange}
          name="impactedApplication"
        />
      </div>

      <div className="form-group">
        <label htmlFor="impactedBusiness">Impacted Business</label>
        <input
          type="text"
          className="form-control"
          id="impactedBusiness"
          required
          value={improvement.impactedBusiness}
          onChange={handleInputChange}
          name="impactedBusiness"
        />
      </div>

      <div className="form-group">
        <label htmlFor="impactedGOC">Impacted GOC</label>
        <input
          type="text"
          className="form-control"
          id="impactedGOC"
          required
          value={improvement.impactedGOC}
          onChange={handleInputChange}
          name="impactedGOC"
        />
      </div>

      <div className="form-group">
        <label htmlFor="impactedRegion">Impacted Region</label>
        <input
          type="text"
          className="form-control"
          id="impactedRegion"
          required
          value={improvement.impactedRegion}
          onChange={handleInputChange}
          name="impactedRegion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="stage">Stage</label>
        <input
          type="text"
          className="form-control"
          id="stage"
          required
          value={improvement.stage}
          onChange={handleInputChange}
          name="stage"
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="status">Status</label>
        <input
          type="text"
          className="form-control"
          id="status"
          required
          value={improvement.status}
          onChange={handleInputChange}
          name="status"
        />
      </div> */}
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          onChange={handleInputChange}
          className="form-control"
          name="status"
          value={improvement.status}
          id="status"
          required
        >
          <option>Please choose one option</option>
          {statusOptions.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="statusNote">Status Note</label>
        <textarea
          className="form-control"
          id="statusNote"
          required
          value={improvement.statusNote}
          onChange={handleInputChange}
          name="statusNote"
        />
      </div>

      <div className="form-group">
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          className="form-control"
          id="owner"
          required
          value={improvement.owner}
          onChange={handleInputChange}
          name="owner"
        />
      </div>

      <div className="form-group">
        <label htmlFor="improvementCategory">Improvement Category</label>
        <input
          type="text"
          className="form-control"
          id="improvementCategory"
          required
          value={improvement.improvementCategory}
          onChange={handleInputChange}
          name="improvementCategory"
        />
      </div>

      <div className="form-group">
        <label htmlFor="automationTechnology">Automation Technology</label>
        <input
          type="text"
          className="form-control"
          id="automationTechnology"
          required
          value={improvement.automationTechnology}
          onChange={handleInputChange}
          name="automationTechnology"
        />
      </div>

      <div className="form-group">
        <label htmlFor="requestedAmount">Requested Amount</label>
        <input
          type="text"
          className="form-control"
          id="requestedAmount"
          required
          value={improvement.requestedAmount}
          onChange={handleInputChange}
          name="requestedAmount"
        />
      </div>

      <div className="form-group">
        <label htmlFor="committedAmount">Committed Amount</label>
        <input
          type="text"
          className="form-control"
          id="committedAmount"
          required
          value={improvement.committedAmount}
          onChange={handleInputChange}
          name="committedAmount"
        />
      </div>

      <div className="form-group">
        <label htmlFor="spentAmount">Spent Amount</label>
        <input
          type="text"
          className="form-control"
          id="spentAmount"
          required
          value={improvement.spentAmount}
          onChange={handleInputChange}
          name="spentAmount"
        />
      </div>

      <div className="form-group">
        <label htmlFor="secondaryOwner">Secondary Owner</label>
        <input
          type="text"
          className="form-control"
          id="secondaryOwner"
          required
          value={improvement.secondaryOwner}
          onChange={handleInputChange}
          name="secondaryOwner"
        />
      </div>

      <div className="form-group">
        <label htmlFor="vendor">Vendor</label>
        <input
          type="text"
          className="form-control"
          id="vendor"
          required
          value={improvement.vendor}
          onChange={handleInputChange}
          name="vendor"
        />
      </div>

      <div className="form-group">
        <label htmlFor="baselineValue">Baseline Value</label>
        <input
          type="text"
          className="form-control"
          id="baselineValue"
          required
          value={improvement.baselineValue}
          onChange={handleInputChange}
          name="baselineValue"
        />
      </div>

      <div className="form-group">
        <label htmlFor="expectedImprovement">Expected Improvement</label>
        <input
          type="text"
          className="form-control"
          id="expectedImprovement"
          required
          value={improvement.expectedImprovement}
          onChange={handleInputChange}
          name="expectedImprovement"
        />
      </div>

      <div className="form-group">
        <label htmlFor="actualImprovement">Actual Improvement</label>
        <input
          type="text"
          className="form-control"
          id="actualImprovement"
          required
          value={improvement.actualImprovement}
          onChange={handleInputChange}
          name="actualImprovement"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedCurrentYearIncementalCost">
          Projected Current Year Incremental Cost
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedCurrentYearIncementalCost"
          required
          value={improvement.projectedCurrentYearIncementalCost}
          onChange={handleInputChange}
          name="projectedCurrentYearIncementalCost"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedOngoingAnnualCost">
          Projected Ongoing Annual Cost
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedOngoingAnnualCost"
          required
          value={improvement.projectedOngoingAnnualCost}
          onChange={handleInputChange}
          name="projectedOngoingAnnualCost"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedCurrentYearTicketsAutomated">
          Projected Current Year Tickets Automated
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedCurrentYearTicketsAutomated"
          required
          value={improvement.projectedCurrentYearTicketsAutomated}
          onChange={handleInputChange}
          name="projectedCurrentYearTicketsAutomated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedAnnualTicketsAutomated">
          Projected Annual Tickets Automated
        </label>
        <input
          type="number"
          className="form-control"
          id="projectedAnnualTicketsAutomated"
          required
          value={improvement.projectedAnnualTicketsAutomated}
          onChange={handleInputChange}
          name="projectedAnnualTicketsAutomated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedCurrentYearTicketsEliminated">
          Projected Current Year Tickets Eliminated
        </label>
        <input
          type="number"
          className="form-control"
          id="projectedCurrentYearTicketsEliminated"
          required
          value={improvement.projectedCurrentYearTicketsEliminated}
          onChange={handleInputChange}
          name="projectedCurrentYearTicketsEliminated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedAnnualTicketsEliminated">
          Projected Annual Tickets Eliminated
        </label>
        <input
          type="number"
          className="form-control"
          id="projectedAnnualTicketsEliminated"
          required
          value={improvement.projectedAnnualTicketsEliminated}
          onChange={handleInputChange}
          name="projectedAnnualTicketsEliminated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedCurrentYearEffortHoursSaved">
          Projected Current Year Effort Hours Saved
        </label>
        <input
          type="number"
          className="form-control"
          id="projectedCurrentYearEffortHoursSaved"
          required
          value={improvement.projectedCurrentYearEffortHoursSaved}
          onChange={handleInputChange}
          name="projectedCurrentYearEffortHoursSaved"
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectedAnnualEffortHoursSaved">
          Projected Annual Effort Hours Saved
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedAnnualEffortHoursSaved"
          required
          value={improvement.projectedAnnualEffortHoursSaved}
          onChange={handleInputChange}
          name="projectedAnnualEffortHoursSaved"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedCurrentYearP1P2TicketsEliminated">
          Projected Current Year P1P2 Tickets Eliminated
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedCurrentYearP1P2TicketsEliminated"
          required
          value={improvement.projectedCurrentYearP1P2TicketsEliminated}
          onChange={handleInputChange}
          name="projectedCurrentYearP1P2TicketsEliminated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectedAnnualP1P2TicketsEliminated">
          Projected Annual P1P2 Tickets Eliminated
        </label>
        <input
          type="text"
          className="form-control"
          id="projectedAnnualP1P2TicketsEliminated"
          required
          value={improvement.projectedAnnualP1P2TicketsEliminated}
          onChange={handleInputChange}
          name="projectedAnnualP1P2TicketsEliminated"
        />
      </div>

      <div className="form-group">
        <label htmlFor="otherCurrentYearCostSavings">
          Other Current Year Cost Savings
        </label>
        <input
          type="text"
          className="form-control"
          id="otherCurrentYearCostSavings"
          required
          value={improvement.otherCurrentYearCostSavings}
          onChange={handleInputChange}
          name="otherCurrentYearCostSavings"
        />
      </div>

      <div className="form-group">
        <label htmlFor="otherAnnualYearCostSavings">
          Other Annual Year Cost Savings
        </label>
        <input
          type="text"
          className="form-control"
          id="otherAnnualYearCostSavings"
          required
          value={improvement.otherAnnualYearCostSavings}
          onChange={handleInputChange}
          name="otherAnnualYearCostSavings"
        />
      </div>

      <button onClick={saveImprovement} className="btn btn-success">
        Submit
      </button>
    </div>
  );
};

export default AddImprovement;
