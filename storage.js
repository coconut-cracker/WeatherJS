class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "London";
    this.defaultState = "UK";
    console.log(this);
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state
    };
  }

  setLocationData(city, state) {
    if (document.getElementById("city").value != "") {
      localStorage.setItem("city", city);
    }

    if (document.getElementById("state").value != "") {
      localStorage.setItem("state", state);
    }
  }
}
