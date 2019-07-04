import React from 'react';
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

class LinksListFiltersImpl extends React.Component {
  componentWillUnmount() {
    //this.tracker.stop();
  }
  render() {
    return (
      <div>
        <label className="checkbox">
          <input className="checkbox__box" type="checkbox" checked={!this.props.showVisible} onChange={(e) => {
            Session.set('showVisible', !e.target.checked);
          }}/>
          show hidden links
        </label>
      </div>
    );
  }
}

export default LinksListFilters = withTracker(({}) => {
  const showVisible = Session.get('showVisible');

  return { showVisible: showVisible }
})(LinksListFiltersImpl);
