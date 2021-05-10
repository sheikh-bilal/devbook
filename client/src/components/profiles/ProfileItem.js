import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ 
  profile: {
    user: {
      _id,
      name,
      avatar
    },
    company,
    skills,
    location,
    status
  }
}) => {
  return (
    <div className="profile bg-profile shadow-2">
      <img
        className="round-img custom-width"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
      />
      <div>
        <h2>{name}</h2>
        <p>{status} {company && <span> at {company}</span>}</p>
        <p className="mb-2">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
      </div>
      <ul>
        { skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <span>{skill}</span>
              <div className="progress pink">
                <div className="progress-bar">
                  <div className="progress-value">100%</div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
