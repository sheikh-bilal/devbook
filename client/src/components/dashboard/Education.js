import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        { edu.to === null ? (
          'Now'
        ) : (
          <Moment format = 'YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button 
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'>Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="mc">Education Credentials</h2>
      <table className="table custom-border br-1">
        <thead>
          <tr>
            <th>Institute</th>
            <th className="hide-sm text-center">Degree</th>
            <th className="hide-sm text-center">Years</th>
            <th className="hide-sm text-center">Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
