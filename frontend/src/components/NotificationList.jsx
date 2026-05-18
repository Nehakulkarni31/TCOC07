import NotificationCard
from "./NotificationCard";

export default function NotificationList({
    notifications
}) {

    return (

        <>
            {
                notifications.map((n) => (

                    <NotificationCard
                        key={n.ID}
                        notification={n}
                    />
                ))
            }
        </>
    );
}