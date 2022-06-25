# React Weather App

This project was done just for fun. Its coded in Javascript using the framework [React](https://reactjs.org/). Using the node modules [Axios](https://axios-http.com/docs/intro) and [dotenv](https://www.npmjs.com/package/dotenv). We are also using a API from [OpenWeatherMap](https://openweathermap.org/)

## Installation

First you have to choose where to place the repo. This can be on a new folder or existing folder.

clone the repo onto your computer using git. You will need to do the following on the terminal.

```bash
git clone https://github.com/syn-127/ReactWeather.git
```

This will clone the repository to your computer on the folder you selected.


After downloading the repo you will need to move to the Repo folder entering this onto your terminal.

```bash
cd ReactWeather
```

Then we will need to install node and the dependancies by doing the following(you will need to have node installed on your system).

```bash
node install
```

Once that is done and setup you need to do one last thing which is setting up the enviroment variables.

In the root directory of the repo (inside ReactWeather) you need to create a file called [.env]

Within this file you need add our API. The variable name is [REACT_APP_WEATHERAPI] so it will look like this

```
REACT_APP_WEATHERAPI=YOURAPIKEY
```

### Generating your API Key

I used the API from Open Weather Map. They have a free API to use as well as paid versions. I used the [OneCall-3.0](https://openweathermap.org/api/one-call-3) version. Since it has more than enough for what I needed.

You can generate your own key by signing up to [OpenWeatherMap](https://home.openweathermap.org/users/sign_in). Once Logged in you need to go to the page [APIKEYS](https://home.openweathermap.org/api_keys). If you can't see the API key, go back to the One Call 3.0 page and subscribe to the API.

You will need this for the application to get the weather data.

#### Starting the Application

Like most react apps if you want to start the application locally you just need to fun the script

```bash
npm start
```

This should open a new page in your browser with the application running. If not open your browser and open [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.