import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';


const Dashboard = ({ 
  getCurrentProfile,
  deleteAccount, 
  auth: { user }, 
  profile: {profile, loading } 
}) => {

  useEffect(()=>{
    getCurrentProfile();
  }, []);

  return( 
    loading && profile === null ? <Spinner /> : <Fragment>
      <h1 class="large text-primary">
        Dashboard
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome {user && user.name}</p>
      {
        profile != null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience}/>
            <Education education={profile.education}/>
            <div class="my-2">
              <button class="btn btn-danger" onClick={()=> {deleteAccount()}}>
                <i class="fas fa-user-minus mr-1"></i>Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, kindly add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )
      }
    </Fragment>
  );

}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps ,{ getCurrentProfile, deleteAccount })(Dashboard)
