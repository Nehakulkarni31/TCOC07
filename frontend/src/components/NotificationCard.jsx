import {
    Card,
    CardContent,
    Typography,
    Chip
} from "@mui/material";

export default function NotificationCard({
    notification
}) {

    return (

        <Card sx={{ mb: 2 }}>

            <CardContent>

                <Chip
                    label={notification.Type}
                    color={
                        notification.Type ===
                        "Placement"

                        ? "success"

                        : notification.Type ===
                          "Result"

                        ? "primary"

                        : "warning"
                    }
                />

                <Typography
                    variant="h6"
                    sx={{ mt: 1 }}
                >
                    {notification.Message}
                </Typography>

                <Typography
                    variant="body2"
                >
                    {notification.Timestamp}
                </Typography>

            </CardContent>

        </Card>
    );
}