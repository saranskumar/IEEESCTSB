import React from 'react';

interface TeamMemberProps {
    name: string;
    role?: string;
    image?: string;
    imageStyle?: React.CSSProperties;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, imageStyle }) => {
    return (
        <div className="col-xl-4 col-md-4">
            <div className="single_team text-center">
                <div className="thumb">
                    <img
                        src={image || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
                        style={imageStyle || { width: '200px', height: '200px', borderRadius: '75px' }}
                        alt={name}
                    />
                </div>
                <h3>{name}</h3>
                {role && <p>{role}</p>}
            </div>
        </div>
    );
};

export default TeamMember;
