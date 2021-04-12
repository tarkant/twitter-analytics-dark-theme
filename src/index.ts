import "./scss/style.scss";

export class App {
  constructor() {
    console.info("Dark mode is on 🌑, if you encounter any issues, report them here");
    console.info("https://github.com/tarkant/greasemonkey-webpack-typescript-boilerplate/issues");
  }
}

const scriptInstance = new App();
