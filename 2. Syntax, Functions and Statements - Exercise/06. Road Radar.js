function radar(speed, area) {
  if (area === `motorway`) {
    let motorLimit = 130;
    if (speed <= motorLimit) {
      console.log(`Driving ${speed} km/h in a ${motorLimit} zone`);
    } else {
      let motorStatus = ``;
      let difference = speed - motorLimit;
      difference <= 20
        ? (motorStatus = `speeding`)
        : difference > 20 && difference <= 40
        ? (motorStatus = `excessive speeding`)
        : difference > 40
        ? (motorStatus = `reckless driving`)
        : (motorStatus = `error`);
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${motorLimit} - ${motorStatus} `
      );
    }
  } else if (area === `interstate`) {
    let interstateLimit = 90;
    if (speed <= interstateLimit) {
      console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
    } else {
      let interstateStatus = ``;
      let difference = speed - interstateLimit;
      difference <= 20
        ? (interstateStatus = `speeding`)
        : difference > 20 && difference <= 40
        ? (interstateStatus = `excessive speeding`)
        : difference > 40
        ? (interstateStatus = `reckless driving`)
        : (interstateStatus = `error`);
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${interstateStatus} `
      );
    }
  } else if (area === `city`) {
    let cityLimit = 50;
    if (speed <= cityLimit) {
      console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
    } else {
      let cityStatus = ``;
      let difference = speed - cityLimit;
      difference <= 20
        ? (cityStatus = `speeding`)
        : difference > 20 && difference <= 40
        ? (cityStatus = `excessive speeding`)
        : difference > 40
        ? (cityStatus = `reckless driving`)
        : (cityStatus = `error`);
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${cityStatus} `
      );
    }
  } else if (area === `residential`) {
    let residentialLimit = 20;
    if (speed <= residentialLimit) {
      console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
    } else {
      let residentialStatus = ``;
      let difference = speed - residentialLimit;
      difference <= 20
        ? (residentialStatus = `speeding`)
        : difference > 20 && difference <= 40
        ? (residentialStatus = `excessive speeding`)
        : difference > 40
        ? (residentialStatus = `reckless driving`)
        : (residentialStatus = `error`);
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${residentialStatus} `
      );
    }
  }
}

radar(40, "city");
radar(21, "residential");
radar(120, "interstate");
radar(200, "motorway");
