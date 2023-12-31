import React, { useEffect } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonBackButton, IonCardTitle, IonIcon } from '@ionic/react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/react';
import { useHistory } from "react-router-dom";
import { chevronBackOutline } from 'ionicons/icons';

const NewBooking: React.FC = () => {
    const history = useHistory();

    const handleCardClickBooking = () => {
        history.push('/menu/home/viewbooking'); // Replace '/view-booking' with the path of the "View Booking" page
    };
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('auth');
        if (!isAuthenticated) {
            history.replace('/'); // Redirect to the login page if not authenticated
        }
    }, [history]);

    const handleBack = () => {
        history.push("/menu");
    };
    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton className='profile-back-button' onClick={handleBack}>
                            <IonIcon icon={chevronBackOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>New Booking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard onClick={handleCardClickBooking}>
                    <IonCardHeader>
                        <IonCardTitle>Local</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>20/05/2022@08.00</IonCardContent>
                </IonCard>
                <IonCard onClick={handleCardClickBooking}>
                    <IonCardHeader>
                        <IonCardTitle>Transfer</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>20/07/2022@18.30</IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default NewBooking;
