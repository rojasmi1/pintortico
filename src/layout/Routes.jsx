import React from 'react';
import DefaultLayout from 'layout/DefaultLayout';
import HomeContainer from 'containers/HomeContainer';
import GalleryContainer from 'containers/GalleryContainer';
import EventsContainer from 'containers/EventsContainer';
import ContactContainer from 'containers/ContactContainer';
import { Switch } from 'react-router-dom';

const Routes = ({ store }) => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={HomeContainer} title="Home" />
      <DefaultLayout
        exact
        component={GalleryContainer}
        path="/gallery"
        title="Gallery"
      />
      <DefaultLayout
        exact
        component={EventsContainer}
        path="/events"
        title="Events"
      />
      <DefaultLayout
        exact
        path="/contact"
        component={ContactContainer}
        title="Contact"
      />
    </Switch>
  );
};

export default Routes;
