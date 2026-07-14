import { useState } from "react";
import axios from "axios";

const AddTeam = () => {

  const [team, setTeam] = useState({
    teamId: "",
    teamName: "",
    teamLeaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    numberOfMembers: "",
    projectTitle: "",
    problemStatementTrack: "",
    technologyStack: "",
    mentorName: "",
    registrationDate: "",
    tableNumber: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3000/add-team",
        team
      );

      setMessage(response.data.message);

      setTeam({
        teamId: "",
        teamName: "",
        teamLeaderName: "",
        leaderEmail: "",
        leaderPhone: "",
        collegeName: "",
        numberOfMembers: "",
        projectTitle: "",
        problemStatementTrack: "",
        technologyStack: "",
        mentorName: "",
        registrationDate: "",
        tableNumber: ""
      });

    } catch (error) {

      console.log(error);

      setMessage("Failed to Register Team");

    }

  };

  const handleReset = () => {

    setTeam({
      teamId: "",
      teamName: "",
      teamLeaderName: "",
      leaderEmail: "",
      leaderPhone: "",
      collegeName: "",
      numberOfMembers: "",
      projectTitle: "",
      problemStatementTrack: "",
      technologyStack: "",
      mentorName: "",
      registrationDate: "",
      tableNumber: ""
    });

    setMessage("");

  };

  return (

    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="text-center">
            Hackathon Team Registration
          </h3>
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="row">

              {[
                ["Team ID","teamId","text"],
                ["Team Name","teamName","text"],
                ["Leader Name","teamLeaderName","text"],
                ["Leader Email","leaderEmail","email"],
                ["Leader Phone","leaderPhone","text"],
                ["College Name","collegeName","text"],
                ["No. of Members","numberOfMembers","number"],
                ["Project Title","projectTitle","text"],
                ["Problem Statement Track","problemStatementTrack","text"],
                ["Technology Stack","technologyStack","text"],
                ["Mentor Name","mentorName","text"],
                ["Registration Date","registrationDate","date"],
                ["Table Number","tableNumber","text"]
              ].map(([label,name,type]) => (

                <div
                  className={
                    name==="tableNumber"
                    ? "col-md-12 mb-3"
                    : "col-md-6 mb-3"
                  }
                  key={name}
                >

                  <label className="form-label">
                    {label}
                  </label>

                  <input
                    type={type}
                    className="form-control"
                    name={name}
                    value={team[name]}
                    onChange={handleChange}
                    required
                  />

                </div>

              ))}

            </div>

            <div className="text-center">

              <button
                className="btn btn-primary me-3"
                type="submit"
              >
                Register Team
              </button>

              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );

};

export default AddTeam;