import React, { useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";

const FormValid = () => {
  let [fullName, setFullname] = useState("");
  let [fullNameErr, setFullnameErr] = useState("");

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");

  let [location, setLocation] = useState("");
  let [locationErr, setLocationErr] = useState("");

  let [budget, setBudget] = useState("");
  let [budgetErr, setBudgetErr] = useState("");

  let [subject, setSubject] = useState("");
  let [subjectErr, setSubjectErr] = useState("");

  let [massage, setMassage] = useState("");
  let [massageErr, setMassageErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) {
      setFullnameErr("full name is required");
    } else if (!email) {
      setEmailErr("email is required");
    } else if (!location) {
      setLocationErr("set your location");
    } else if (!budget) {
      setBudgetErr("set your budget");
    } else if (!subject) {
      setSubjectErr("subject is required");
    } else if (!massage) {
      setMassageErr("place a massage")
    } else {
      console.log("submitted");
    }
  };

  const handleFullname = (e) => {
    setFullname(e.target.value);
    setFullnameErr("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    setLocationErr("");
  };

  const handleBudget = (e) => {
    setBudget(e.target.value);
    setBudgetErr("");
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
    setSubjectErr("");
  };

  const handleMassage = (e) => {
    setMassage(e.target.value);
    setMassageErr("");
  };

  return (
    <div>
      <p className="text-[16px] text-secondary pt-5 pb-10 max-w-sm">
        There are many variations of passages of Lorem Ipsu available. but the
        majority have suffered alte.
      </p>
      <form onSubmit={handleSubmit} className="form flex flex-col gap-2">
        <input
          onChange={handleFullname}
          type="text"
          placeholder="name"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <p>{fullNameErr}</p>
        <input
          onChange={handleEmail}
          type="email"
          placeholder="email"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <p>{emailErr}</p>
        <input
          onChange={handleLocation}
          type="text"
          placeholder="location"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <p>{locationErr}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col">
            <input
              onChange={handleBudget}
              type="number"
              placeholder="budget"
              className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
            />
            <p>{budgetErr}</p>
          </div>
          <div className="flex flex-col">
            <input
              onChange={handleSubject}
              type="text"
              placeholder="subject"
              className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
            />
            <p>{subjectErr}</p>
          </div>
        </div>
        <input
          onChange={handleMassage}
          type="text"
          placeholder="massage"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <p>{massageErr}</p>
        <button type="submit" className="btn_dark mt-8 flex items-center gap-3">
          submit <TiArrowRightOutline />
        </button>
      </form>
    </div>
  );
};

export default FormValid;
