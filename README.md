<p align="center">
<img src="https://github.com/Deb77/BabyAndMe/blob/main/client/src/Images/Baby.png" alt="Logo" width="80" height="80">
  <h3 align="center">Baby&Me</h3>

  <p align="center">
    An incentive for breastfeeding women
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Through this project we aim to solve 3 major problems faced by breastfeeding women:
### Problems:

### Solutions:


### What we aim to achieve:
* To provide necessary infrastructure which are private, safe and clean, for mothers to breastfeed their infants in public places.
* To increase awareness with regards to donation of breastmilk and it’s subsequent use as donated breast milk for little ones.
* To aid in donation of breastmilk to Comprehensive Lactation Management Centres with the help of National Health Mission guidelines.  

### Built With

* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [MongoDb](https://www.mongodb.com/3)
* [React](https://reactjs.org/docs/release-channels.html)

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get API keys for GoogleMapsAPI, SendgridAPI, MONGODB
2. Clone the repo
   ```sh
   git clone https://github.com/Deb77/BabyAndMe.git
   ```
3. Make a .env file in the backend which has the same keys as the .env example file
   Make a file "MAP_KEY.js" in this directory client/src/Components/Utils add and export the follwing variable:
   ```sh
   export const GOOGLE_API_KEY= '';
   ```

5. Installing and running the frontend 
   ```sh
   cd client
   npm install
   npm start
   ```
4. Installing and running the backend
   ```sh
   cd backend
   virtualenv venv

   for Windows:
   source venv/Scripts/activate

   for Linux:
   source venv/bin/activate

   pip install -r requirements.txt

   python app.py
   ```

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

