import React, { useState } from "react";

type IForm = {
  jobTitle: string;
  jobDescription: string;
  equity: string;
  bonus: string;
  payRate: string;
  salary: string;
  employeeName: string;
};
const CreateOfferForm = () => {
  const [joboffer, setJobOffer] = useState<IForm>({
    jobTitle: "",
    jobDescription: "",
    equity: "",
    bonus: "",
    payRate: "",
    salary: "",
    employeeName: "",
  });

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "job-title":
        setJobOffer((prev) => {
          return { ...prev, jobTitle: e.target.value };
        });
        break;

      case "job-description":
        setJobOffer((prev) => {
          return { ...prev, jobDescription: e.target.value };
        });
        break;

      case "job-equity":
        setJobOffer((prev) => {
          return { ...prev, equity: e.target.value };
        });
        break;
      case "job-bonus":
        setJobOffer((prev) => {
          return { ...prev, bonus: e.target.value };
        });
        break;

      case "job-payRate":
        setJobOffer((prev) => {
          return { ...prev, payRate: e.target.value };
        });
        break;

      case "job-salary":
        setJobOffer((prev) => {
          return { ...prev, salary: e.target.value };
        });
        break;

      case "employee-name":
        setJobOffer((prev) => {
          return { ...prev, employeeName: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  return (
    <form
      className="w-[300px] md:w-[500px] h-[400px] md:h-[500px]"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          name="job-title"
          id="job-title"
          value={joboffer.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-description">Job Description</label>
        <input
          type="text"
          placeholder="Job Description"
          name="job-description"
          id="job-description"
          value={joboffer.jobDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-equity">Equity</label>
        <input
          type="text"
          placeholder="Equity"
          name="job-equity"
          id="job-equity"
          value={joboffer.equity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-bonus">Bonus</label>
        <input
          type="text"
          placeholder="Bonus"
          name="job-bonus"
          value={joboffer.bonus}
          id="job-bonus"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-payRate">Pay Rate</label>
        <input
          type="text"
          placeholder="Pay Rate"
          name="job-payRate"
          id="job-payRate"
          value={joboffer.payRate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-salary">Salary</label>
        <input
          type="text"
          placeholder="Job Salary"
          name="job-salary"
          id="job-salary"
          value={joboffer.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="employee-name" className="block">
          Employee Name
        </label>
        <input
          type="text"
          placeholder="Employee Name"
          name="employee-name"
          id="employee-name"
          value={joboffer.employeeName}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
};

export default CreateOfferForm;
