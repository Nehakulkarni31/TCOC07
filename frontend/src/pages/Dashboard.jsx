import {
    useEffect,
    useState
} from "react";

import {
    Container,
    Typography
} from "@mui/material";

import NotificationList
from "../components/NotificationList";

import FilterBar
from "../components/FilterBar";

import {
    fetchNotifications
} from "../services/api";

export default function Dashboard() {

    const [notifications,
    setNotifications] = useState([]);

    const [selectedType,
    setSelectedType] =
    useState("All");

    useEffect(() => {

        loadNotifications();

    }, []);

    const loadNotifications = async () => {

    const data =
    await fetchNotifications();

    console.log(data);

    setNotifications(data);
};

    const filteredNotifications =
    selectedType === "All"

    ? notifications

    : notifications.filter(
        (n) =>
        n.Type === selectedType
      );

    return (

        <Container sx={{ mt: 4 }}>

            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                Campus Notifications
            </Typography>

            <FilterBar
                selectedType={
                    selectedType
                }

                setSelectedType={
                    setSelectedType
                }
            />

            <NotificationList
                notifications={
                    filteredNotifications
                }
            />

        </Container>
    );
}