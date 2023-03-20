const canaryDelay = (peninsulaHour) => {
    return new Promise((resolve, reject) => {
      const canaryHour = peninsulaHour;
      if (typeof peninsulaHour !== "number") {
        reject("El parámetro esperado es una hora del día");
      }
      if (peninsulaHour > 24 || peninsulaHour < 1) {
        reject("La hora debe estar entre la 1h y las 24h");
      }
      if (peninsulaHour) {
        setTimeout(() => {
          resolve(canaryHour);
        }, 1000);
      } else {
        reject("Error");
      }
    });
  };
  
  module.exports = { canaryDelay };
  