<template>
<div class='app-wrapper'>
  <div class='title-wrapper'>
    <div class='title-sticky'>
      <h1 class='title'>KAVYA BEHERAJ</h1>
      <h3 class='subheading'>Designer and developer creating human-centered data experiences that inspire genuine curiosity.</h3>
      <br>
      <br>
      <h2 class='subheading'>ABOUT ME</h2>
      <p>
        I am a full-time data analyst at Community Solutions, and working towards a M.S. in Data Analysis & Visualization at the CUNY Graduate Center.
        <br>
        <br>
        I primarily work in Tableau, D3, Vue, and Python, but I like using (and learning) any tool that’s right for the job. Check out some of my work and reach out anytime to chat!
      </p>
      <br>
        <br>
      <h2 class='subheading'>CONTACT ME</h2>
      <div class='icon-wrapper'>
        <div class='contact-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 12">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg> &nbsp; <a href='mailto:kavya.beheraj@gmail.com' target="_blank" rel="noopener noreferrer">kavya.beheraj@gmail.com</a>
        </div>

        <div class='contact-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"/>
          </svg> &nbsp; <a href='https://www.linkedin.com/in/kavyabeheraj/' target="_blank" rel="noopener noreferrer">kavyabeheraj</a>
        </div>

        <div class='contact-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg> &nbsp; <a href='https://github.com/koffeeya' target="_blank" rel="noopener noreferrer">koffeeya</a>
        </div>
          
      </div>

    </div>
    
  </div>
  <div class='project-wrapper'>
    <ProjectCard v-for="proj in data" :key='proj.id'
    :title='proj.title'
    :id='proj.id'
    :date='proj.date' 
    :description='proj.description'
    :writeup='proj.writeup'
    :technology='proj.technology' 
    :link='proj.link'
    >
    </ProjectCard>
  </div>
</div>
  
</template>

<script>
const Papa = require("papaparse");
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  data() {
    return {
      data: null,
      config: {
        apiKey: process.env.VUE_APP_API_KEY,
        spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
        range: process.env.VUE_APP_RANGE
      },
    }
  },
  methods: {
    getData() {
      const apiKey = this.config.apiKey;
      const spreadsheetId = this.config.spreadsheetId;
      const range = this.config.range;
      const getUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
      const checkConfig = [apiKey, spreadsheetId, range]
      const isUndefined = (element) => element === undefined;
      
      if (checkConfig.some(isUndefined)) {
        console.log("Config Values Undefined!", this.config);
      } else {
          fetch(getUrl).then((response) => {
            return response.json();
          }).then((data) => {
            const csv = Papa.unparse(data.values, {
              header: true,
              quotes: true
            })
            const json = Papa.parse(csv, {
                header: true,
                dynamicTyping: true,
            })
            this.data = json.data;
          })
        }
      }
  },
  created() {
    this.getData();
  },
  components: {
    ProjectCard
  }
}
</script>

<style>
:root {
  /* Colors */
  --main:#001427;
  --accent: rgb(230, 230, 230); /* rgb(230, 230, 230) */
  --pop: #88d9e6;

  /* Fonts */
  --title-font: 'Space Grotesk', sans-serif;
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
  margin: 0;
}

h2 {
  font-size: 40px;
}

p {
  font-size: 18px;
  margin: 0;
}

.subheading {
  color: var(--pop)
}

.app-wrapper {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
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

.contact-icon>a {
  color: inherit;
  text-decoration: none;
}

.project-wrapper {
  display: grid;
  column-gap: 0px;
  row-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
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
