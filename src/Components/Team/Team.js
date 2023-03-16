import React from "react";
import team1 from "../../images/team/team-1.jpg";
import team2 from "../../images/team/team-2.jpg";
import team3 from "../../images/team/team-3.jpg";
import TeamCard from "../TeamCard/TeamCard";

const Team = () => {
  const teams = [
    { id: 1, name: "Jimmy Doe", img: team1, role: "Farmer" },
    { id: 2, name: "Marry Doe", img: team2, role: "Farmer" },
    { id: 3, name: "Simon Doe", img: team3, role: "Farmer" },
  ];
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h2 className="fw-bold">
            Our <span className="d-text">Team</span>
          </h2>
          <p className="fw-light pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>
        <div className="row g-4 py-4">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
