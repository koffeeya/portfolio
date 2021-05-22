<template>
  <div
    class="project"
    :class="id"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <div class="visual-wrapper" :class="[`visual-${id}`]">
      <img
        class="visual images"
        :src="imgSource"
        :class="[`image-${id}`]"
        :alt="title"
      />
      <img
        class="visual gifs hide"
        :src="gifSource"
        :class="[`gif-${id}`]"
        :alt="title"
      />
    </div>

    <div class="details-wrapper" :class="[`details-${id}`]">
      <h2 class="details-text project-title">{{ title }}</h2>
      <p class="details-text project-subtitle">
        <b> {{ date }} &nbsp; | &nbsp; {{ technology }} </b>
      </p>
      <div class="details-text links">
        <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
          VIEW PROJECT
        </a>
        <a
          v-if="writeup"
          :href="writeup"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW WRITEUP
        </a>
      </div>
      <p class="details-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "ProjectCard",
  props: [
    "title",
    "num",
    "id",
    "length",
    "date",
    "description",
    "technology",
    "writeup",
    "link",
  ],
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    imgSource() {
      return `./images/${this.id}.png`;
    },
    gifSource() {
      return `./gifs/${this.id}.gif`;
    },
  },
  methods: {
    onMouseOver() {
      this.hover = true;
      d3.select(`.image-${this.id}`).classed("hide", true);
      d3.select(`.gif-${this.id}`).classed("hide", false);

      const arr = [...Array(this.length + 1).keys()].slice(1);
      const remaining = arr.filter((d) => d != this.num);

      /* d3.select(`${this.id}`)
          .transition()
          .duration(200)
          .style("border", "2px solid var(--accent)"); */

      remaining.map((num) => {
        d3.select(`.project${num}`)
          .transition()
          .duration(200)
          .style("opacity", "0.75");
      });
    },

    onMouseLeave() {
      this.hover = false;
      d3.select(`.image-${this.id}`).classed("hide", false);
      d3.select(`.gif-${this.id}`).classed("hide", true);

      const arr = [...Array(this.length + 1).keys()].slice(1);
      const remaining = arr.filter((d) => d != this.num);

      remaining.map((num) => {
        d3.select(`.project${num}`)
          .transition()
          .duration(200)
          .style("opacity", "1");
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  background-color: var(--accent);
  padding: 10px;
  color: var(--main);
  border: 2px solid var(--accent);
  font-weight: 900;
  margin: 10px 0px;
}

a:hover {
  border: 2px solid var(--main);
  background-color: var(--main);
  color: white;
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  text-align: center;
}

.hide {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}

.project {
  margin: 10px;
  background-color: white;
  border: 2px solid var(--accent);
}

.details-wrapper {
  margin: 5%;
}

.details-text {
  margin: 2%;
}

.project-subtitle {
  margin: 4% 2%;
}

.visual {
  width: 100%;
  margin: 0px auto;
}

@media only screen and (max-width: 1000px) {
  .project {
    grid-template-columns: 1fr;
    margin: 20px 10px;
  }

  .visual-wrapper {
    max-width: 100%;
  }
}
</style>
