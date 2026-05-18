const weights = {
  Placement: 5,
  Internship: 4,
  Event: 3,
  Result: 2,
  Other: 1,
};
function calculatePriority(notification) {
  const weight = weights[notification.type] || 0;

  const recency = new Date(notification.Timestamp).getTime();

  return weight * 10000000000000 + recency;
}

function getTopNotifications(notifications, topN) {
  return notifications
    .map((notification) => ({
      ...notification,
      priority: calculatePriority(notification),
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, topN);
}

module.exports = {
  getTopNotifications,
};
