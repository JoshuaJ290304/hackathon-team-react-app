import { useState } from "react";

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

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    });
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

          <form>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Team ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="teamId"
                  value={team.teamId}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="teamName"
                  value={team.teamName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Leader Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="teamLeaderName"
                  value={team.teamLeaderName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Leader Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="leaderEmail"
                  value={team.leaderEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Leader Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="leaderPhone"
                  value={team.leaderPhone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>College Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="collegeName"
                  value={team.collegeName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>No. of Members</label>
                <input
                  type="number"
                  className="form-control"
                  name="numberOfMembers"
                  value={team.numberOfMembers}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="projectTitle"
                  value={team.projectTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Problem Statement Track</label>
                <input
                  type="text"
                  className="form-control"
                  name="problemStatementTrack"
                  value={team.problemStatementTrack}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Technology Stack</label>
                <input
                  type="text"
                  className="form-control"
                  name="technologyStack"
                  value={team.technologyStack}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Mentor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="mentorName"
                  value={team.mentorName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Registration Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="registrationDate"
                  value={team.registrationDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label>Table Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="tableNumber"
                  value={team.tableNumber}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="text-center">

              <button
                type="button"
                className="btn btn-primary me-3"
              >
                Register Team
              </button>

              <button
                type="button"
                className="btn btn-secondary"
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