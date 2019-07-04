import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

class LinksListImpl extends React.Component {
  componentWillUnmount() {
    //this.linksTracker.stop();
  }
  renderLinksListItems() {
    if (this.props.links.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No links found!</p>
        </div>
      );
    } else {
      return this.props.links.map((link) => {
        const shortUrl = Meteor.absoluteUrl(link._id);
        return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    );
  }
};

export default LinksList = withTracker(({}) => {
  const linksHandle = Meteor.subscribe('links');
  const links = Links.find({
    visible: Session.get('showVisible')
  }, {}).fetch();

  return {links: links, linksHandle}
})(LinksListImpl);
