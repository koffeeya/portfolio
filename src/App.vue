<template>
  <div class="app-wrapper">
    <div class="title-wrapper">
      <div class="title-sticky">
        <div class="maintitle">
          <h1 class="title">KAVYA BEHERAJ</h1>
          <h3 class="subheading">
            Data visualization developer building experiences that get humans
            curious about data.
          </h3>
          <br />
        </div>

        <div class="aboutme">
          <div class="aboutme-header">
            <h2 class="subheading">About Me</h2>
          </div>
          <div class="aboutme-text">
            <p>
              I am a data analyst and front-end developer based in Brooklyn, NY.
              I'm currently building data vizzes in mission-driven spaces and
              pursuing a part-time
              <a
                href="https://www.gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization"
                target="_blank"
                rel="noopener noreferrer"
                >M.S. in Data Analysis & Visualization</a
              >.
              <br />
              <br />
              I have experience in Tableau, D3, Vue, R, and Python, but I'm
              always ready to use (and learn) any tool that’s right for the job.
              Check out my work and connect with me!
              <br />
              <br />
              If I get a free moment, I love listening to podcasts and going for
              long walks in the
              <a
                href="https://www.green-wood.com/"
                target="_blank"
                rel="noopener noreferrer"
                >cemetery / park</a
              >
              near my home.
            </p>
            <br />
            <br />
          </div>
        </div>

        <div class="contactme">
          <h2 class="subheading">Get In Touch</h2>
          <div class="contactme-content">
            <div class="contactme-image">
              <img class="headshotImg" :src="headshotUrl" alt="Kavya Beheraj" />
            </div>
            <div class="icon-wrapper">
              <div class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
                <a
                  href="mailto:kavya.beheraj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;kavya.beheraj@gmail.com</a
                >
              </div>
              <div class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"
                  />
                </svg>
                <a
                  href="https://www.linkedin.com/in/kavyabeheraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;kavyabeheraj</a
                >
              </div>
              <div class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                <a
                  href="https://github.com/koffeeya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;koffeeya</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project-wrapper">
      <ProjectCard
        v-for="proj in data"
        :key="proj.id"
        :title="proj.title"
        :num="proj.num"
        :id="proj.id"
        :date="proj.date"
        :length="data.length"
        :description="proj.description"
        :writeup="proj.writeup"
        :technology="proj.technology"
        :link="proj.link"
      >
      </ProjectCard>
    </div>
  </div>
</template>

<script>
const Papa = require("papaparse");
import ProjectCard from "./components/ProjectCard.vue";
import * as d3 from "d3";

export default {
  name: "App",
  data() {
    return {
      data: null,
      headshotUrl: "./images/headshot.jpg",
      config: {
        apiKey: process.env.VUE_APP_API_KEY,
        spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
        range: process.env.VUE_APP_RANGE,
      },
    };
  },
  methods: {
    getData() {
      const apiKey = this.config.apiKey;
      const spreadsheetId = this.config.spreadsheetId;
      const range = this.config.range;
      const getUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
      const checkConfig = [apiKey, spreadsheetId, range];
      const isUndefined = (element) => element === undefined;

      if (checkConfig.some(isUndefined)) {
        console.log("Config Values Undefined!", this.config);
        Promise.all([d3.csv("./backend_static.csv", d3.autoType)]).then(
          ([data]) => {
            this.data = data;
          }
        );
      } else {
        fetch(getUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const csv = Papa.unparse(data.values, {
              header: true,
              quotes: true,
            });
            const json = Papa.parse(csv, {
              header: true,
              dynamicTyping: true,
            });
            this.data = json.data;
          });
      }
    },
  },
  created() {
    this.getData();
  },
  components: {
    ProjectCard,
  },
};
</script>

<style>
:root {
  /* Colors */
  --main: #001427;
  --accent: rgb(230, 230, 230); /* rgb(230, 230, 230) */
  --pop: #88d9e6;

  /* Fonts */
  --title-font: "Space Grotesk", sans-serif;
  --body-font: "Tinos", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--title-font);
  margin: 0;
  padding: 0;
}

h1 {
  font-family: var(--title-font);
  font-size: 60px;
  line-height: 52px;
  margin: 0;
}

h2 {
  font-size: 32px;
  line-height: 35px;
  margin: 10px 0px;
}

p {
  font-size: 20px;
  margin: 0;
  font-family: var(--body-font);
}

a {
  color: white;
  text-decoration: underline var(--pop);
}

a:hover {
  color: var(--pop);
  text-decoration: none;
}

.headshotImg {
  border-radius: 100px;
  width: 100%;
  max-width: 150px;
  filter: grayscale(100%) contrast(125%);
  margin: auto;
}

.contactme-content {
  display: grid;
  grid-template-columns: 1.05fr 3.1fr;
  column-gap: 15px;
  font-size: 15px;
}

.subheading {
  color: var(--pop);
}

.app-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  background-color: var(--accent);
}

.title-wrapper {
  padding: 35px 45px 45px 25px;
  color: white;
  background-color: var(--main);
}

.title-sticky {
  position: sticky;
  top: 35px;
}

.contact-icon {
  padding: 10px;
  width: fit-content;
}

.contact-icon:hover {
  background-color: var(--accent);
  color: var(--main);
  font-weight: 900;
}

.contact-icon > a {
  color: inherit;
  text-decoration: none;
}

.bi {
  transform: translateY(2px);
}

.project-wrapper {
  display: grid;
  column-gap: 0px;
  row-gap: 0px;
  grid-template-columns: repeat(3, 1fr);
}

.form-wrapper {
  grid-column: 1 / span 2;
  margin: 30px 0px 0px 0px;
}

.form-obj {
  margin: 10px 0px 0px 0px;
}

.form-label {
  font-size: 12px;
  font-family: var(--title-font);
  color: var(--pop);
  border: 2px solid var(--main);
}

input {
  margin: 2px 0px 0px 0px;
  padding: 10px;
  width: 100%;
  border: 2px solid var(--main);
  background-color: lightgray;
  font-family: var(--title-font);
  font-weight: 600;
  font-size: 16px;
}

input:hover {
  border: 2px solid var(--pop);
}

button:hover {
  border: 2px solid var(--pop);
  background-color: var(--main);
  color: var(--pop);
}

button {
  font-family: var(--title-font);
  font-size: 18px;
  width: 105%;
  padding: 10px;
  margin: 15px 0px 0px 0px;
  border: 2px solid var(--main);
  background-color: var(--pop);
  font-weight: 900;
}

@media only screen and (max-width: 1450px) {
  p {
    font-size: 16px;
  }
}

@media only screen and (max-width: 1000px) {
  .project-wrapper {
    display: grid;
    column-gap: 0px;
    row-gap: 0px;
    grid-template-columns: repeat(1, 1fr);
  }

  .app-wrapper {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 500px) {
  .project-wrapper {
    display: grid;
    column-gap: 0px;
    row-gap: 0px;
    grid-template-columns: repeat(1, 1fr);
  }

  .app-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
