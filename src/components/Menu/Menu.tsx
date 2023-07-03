import React, { useState } from 'react';
import './Menu.css';
import { Route, Redirect } from 'react-router-dom';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { settingsOutline, locationOutline, homeOutline,receiptOutline } from 'ionicons/icons';
import Home from './Home';
import Location from './Location';
import Settings from './Settings';
import TripSheet from './TripSheet';
import Profile from './Profile';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Menu1');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/menu/home" component={Home} />
          <Route exact path="/menu/tripsheet" component={TripSheet} />
          <Route exact path="/menu/location" component={Location} />
          <Route exact path="/menu/setting" component={Settings} />
          <Route exact path="/menu/settings/profile" component={Profile} />
          <Route exact path="/menu">
            <Redirect to="/menu/tripsheet" />
            <Redirect to="/menu/location" />
            <Redirect to="/menu/setting" />
            <Redirect to="/menu/settings/profile" />
            <Redirect to="/menu/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton
            tab="Menu1"
            href="/menu/home"
            className={`Menu-Button ${activeTab === 'Menu1' ? 'active' : ''}`}
            onClick={() => handleTabChange('Menu1')}
          >
            <IonIcon className={`Menu-icon ${activeTab === 'Menu1' ? 'active' : ''}`} icon={homeOutline} />
            <div className={`Menu-lable ${activeTab === 'Menu1' ? 'active' : ''}`}>
              <IonLabel>Home</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton
            tab="Menu2"
            href="/menu/tripsheet"
            className={`Menu-Button ${activeTab === 'Menu1' ? 'active' : ''}`}
            onClick={() => handleTabChange('Menu2')}
          >
            <IonIcon className={`Menu-icon ${activeTab === 'Menu1' ? 'active' : ''}`} icon={receiptOutline} />
            <div className={`Menu-lable ${activeTab === 'Menu1' ? 'active' : ''}`}>
              <IonLabel>Trip Sheet</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton
            tab="Menu3"
            href="/menu/location"
            className={`Menu-Button ${activeTab === 'Menu2' ? 'active' : ''}`}
            onClick={() => handleTabChange('Menu3')}
          >
            <IonIcon className={`Menu-icon ${activeTab === 'Menu2' ? 'active' : ''}`} icon={locationOutline} />
            <div className={`Menu-lable ${activeTab === 'Menu2' ? 'active' : ''}`}>
              <IonLabel>Location</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton
            tab="Menu4"
            href="/menu/setting"
            className={`Menu-Button ${activeTab === 'Menu3' ? 'active' : ''}`}
            onClick={() => handleTabChange('Menu4')}
          >
            <IonIcon className={`Menu-icon ${activeTab === 'Menu3' ? 'active' : ''}`} icon={settingsOutline} />
            <div className={`Menu-lable ${activeTab === 'Menu3' ? 'active' : ''}`}>
              <IonLabel>Settings</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
}

export default Menu;
