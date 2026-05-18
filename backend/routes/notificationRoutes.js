const express = require("express");

const router = express.Router();

const { fetchNotifications } = require("../services/notificationService");

const { getTopNotifications } = require("../utils/priorityQueue");

const { Log } = require("../middleware/loggerMiddleware");

router.get("/", async (req, res) => {
  try {
    await Log("backend", "info", "route", "Fetching top notifications");

    const notifications = await fetchNotifications();

    const topNotifications = getTopNotifications(notifications, 10);

    res.status(200).json({
      success: true,

      total: topNotifications.length,

      data: topNotifications,
    });
  } catch (error) {
    await Log("backend", "error", "route", error.message);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
});

module.exports = router;
