<template>

  <div class="project" :class='id' @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    
    <div class='visual-wrapper' :class="[`visual-${id}`]">
      <img class='visual images' :src="imgSource" :class="[`image-${id}`]" :alt="title" />
      <img class='visual gifs hide' :src="gifSource" :class="[`gif-${id}`]" :alt="title" />
    </div>

    <div class='details-wrapper' :class="[`details-${id}`]">
      <h2 class='details-text project-title'>{{ title }}</h2>
      <p class='details-text'><b> {{ date }} &nbsp; | &nbsp; {{ technology }} </b></p>
      <div class='details-text links'>
        <a :href="link" target="_blank" rel="noopener noreferrer"> VIEW PROJECT </a>
        <a :href="writeup" target="_blank" rel="noopener noreferrer"> VIEW WRITEUP </a>
      </div>
      <p class='details-text'> {{ description }} </p>
    </div>

    

  </div>

</template>

<script>
import * as d3 from "d3";
export default {
  name: 'ProjectCard',
  props: ['title', 'id', 'date', 'description', 'technology', 'writeup', 'link'],
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    imgSource() {
      return `./images/${this.id}.png`
    },
    gifSource() {
      return `./gifs/${this.id}.gif`
    }
  },
  methods: {

    onMouseOver() {
      this.hover = true;
      d3.select(`.image-${this.id}`).classed('hide', true);
      d3.select(`.gif-${this.id}`).classed('hide', false);
    },

    onMouseLeave() {
      this.hover = false;
      d3.select(`.image-${this.id}`).classed('hide', false)
      d3.select(`.gif-${this.id}`).classed('hide', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  text-decoration: none;
  background-color: var(--main);
  padding: 10px;
  color: white;
  border: 2px solid var(--accent);
  font-weight: 900;
}

a:hover {
  border: 2px solid var(--main);
  background-color: var(--accent);
  color: var(--main);
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  text-align: center;
}

.hide {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}

.project {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: 20px 40px;
}

.details-wrapper {
  margin: 0px 40px;
  
}

.details-text {
  margin: 30px 0px;
}

.visual {
  width: 100%;
  max-width: 400px;
  box-shadow: 5px 5px var(--main);
  margin: 0px auto;
}



@media only screen and (max-width: 1000px) {
  .project {
    grid-template-columns: 1fr;
    margin: 80px 10px;
  }

  .visual-wrapper {
    max-width: 100%;
  }
  
}

</style>
