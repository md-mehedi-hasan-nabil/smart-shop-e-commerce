import React from 'react';

const TeamCard = ({team}) => {
    const {name, img, role} = team;
    return (
        <>
           <div className="col-md-6 col-lg-4">
                <div className="card border border-0 shadow">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h4>{name}</h4>
                        <p>{role}</p>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default TeamCard;