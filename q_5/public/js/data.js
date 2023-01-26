var headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA=="
);

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

const getcontries = () => {
  fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      //console.log(result);

      var row = "";
      row += "<option>---Select country----</option>";
      for (var i = 0; i < result.length; i++) {
        row +=
          "<option value=" +
          result[i].name +
          ">" +
          result[i].name +
          "</option>";
        // console.log(result[i].name);
      }
      document.getElementById("country").innerHTML = row;
    })
    .catch((error) => console.log("error", error));
};

var ccode;
var kkk;
const timeanddate = (val) => {
  ccode = val;
  //   alert(ccode);
  fetch(
    `https://timezone.abstractapi.com/v1/current_time/?api_key=1089efabd8e54844810c1883ba1b2b80&location=${ccode}`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      mylatitude.innerHTML = data.latitude;
      mylongitude.innerHTML = data.longitude;
      kkk = mydatetime.innerHTML = data.datetime;
      myrequested_location.innerHTML = data.requested_location;
      mytimezone_location.innerHTML = data.timezone_location;
      mytimezone_name.innerHTML = data.timezone_name;
    })
    .catch((err) => {
      console.log(err);
    });
};

setInterval(setDate, 1000);
