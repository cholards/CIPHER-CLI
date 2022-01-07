  // Foursquare API Info
  const clientId = '4234MORLB1HHENIDTTQOVIDC1J0ESHUHTITGHLXBJSZEEWUZ';
  const clientSecret = 'QWYDIIEUC3QBYX0VFRQEPOEO0MLXQRAIUTQMOPJ4SRWORXNJ';
  const url = 'https://api.foursquare.com/v2/venues/explore?near=';

  // OpenWeather Info
  const openWeatherKey = '739280c1fe0b258dd6d96ee94fbb2569';
  const weatherUrl = 'api.openweathermap.org/data/2.5/weather';

  // Page Elements
  const $input = $('#city');
  const $submit = $('#button');
  const $destination = $('#destination');
  const $container = $('.container');
  const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
  const $weatherDiv = $("#weather1");
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  //date function 
  function yyyymmdd(dateIn) {
      var yyyy = dateIn.getFullYear();
      var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
      var dd = dateIn.getDate();
      return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }

  var today = new Date();
  const f2day = yyyymmdd(today);


  // Add AJAX functions here:
  const getVenues = async() => {
      const city = $input.val();
      // const urlToFetch = ${url} + ${$input} + 'limit=10&' + ${clientSecret} + '/v2&' + ${f2day}

      const urlToFetch = `${url}london&limit=10&client_id=${clientId}&ll=51.5,0&client_secret=${clientSecret}&v=${f2day}`

      try {
          const response = await fetch(urlToFetch)
          if (response) {
              //console.log(response)
              const jsonResponse = await response.json()
              console.log(jsonResponse)
              const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
              console.log(venues)
              return venues;
          }
      } catch (error) {
          console.log(error)
      }

  }
  const getForecast = async() => {

      const urlToFetch = `${weatherUrl}?q=${input.val()}&APPID=${openWeatherKey}`
      try {
          const response = await fetch(urlToFetch)
          if (response.ok) {
              const jsonResponse = response.json()
              console.log(jsonResponse)
              return jsonResponse
          }

      } catch (error) {

      }
  }

  // Render functions
  const renderVenues = (venues) => {
      $venueDivs.forEach(($venue, index) => {
          // Add your code here:
          const venue = venue[index]
          const venueIcon = venue.categories[0].icon;
          let venueContent = '';
          $venue.append(venueContent);
      });
      $destination.append(`<h2>${venues[0].location.city}</h2>`);

      const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

      // let venueContent = createVenueHTML(venue.name, venue.location venueImgSrc)
      // $venue.append(venueContent);

  }

  const renderForecast = (day) => {
      // Add your code here:

      let weatherContent = '';
      $weatherDiv.append(weatherContent);
  }

  const executeSearch = () => {
      $venueDivs.forEach(venue => venue.empty());
      $weatherDiv.empty();
      $destination.empty();
      $container.css("visibility", "visible");
      getVenues().then(venues => {
          return renderVenues(venues)
      })
      getForecast()
      return false;
  }

  const renderForecast = (day) => {
      const weatherContent = createWeatherHTML(day);
      $weatherDiv.append(weatherContent);
  };

  $submit.click(executeSearch)