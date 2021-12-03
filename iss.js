const request = require("request");


 nextISSTimesForMyLocation((callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, nextPasses);
      });
    });
  });
});


module.exports = { nextISSTimesForMyLocation };
