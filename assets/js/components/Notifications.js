import React from "react";
import {NotificationManager, NotificationContainer} from 'react-notifications';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        Notifications.createNotification = Notifications.createNotification.bind(this);
    }

    static createNotification(type, title, text, sec) {
        switch (type) {
            case 'info':
                NotificationManager.info(text, title, sec);
                break;
            case 'success':
                NotificationManager.success(text, title, sec);
                break;
            case 'warning':
                NotificationManager.warning(text, title, sec);
                break;
            case 'error':
                NotificationManager.error(text, title, sec);
                break;
        }
    }

    render() {
        return (
            <NotificationContainer/>
        );
    }
}

export default Notifications