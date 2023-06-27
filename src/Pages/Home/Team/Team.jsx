import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeams(data))
    },[])
    return (
        <div className="container mx-auto">
        <div className="lg:mx-20 my-20">
            <div className="text-center my-10 space-y-5">
                <h2 className="text-2xl font-semibold text-[#ff3811] ">Team</h2>
                <h1 className="text-4xl font-bold">Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br />which don`t look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    teams.map(team => <TeamCard key={ team._id} team={team} />)                      
                }
            </div>
        </div>
    </div>
    );
};

export default Team;