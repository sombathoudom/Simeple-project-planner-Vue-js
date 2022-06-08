<template>
  <div class="home">
    <FilterNav @filterData="current = $event" :current="current" />
    <div v:if="projects.length">
      <div v-for="project in filterData" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDeleteProject"
          @complete="handleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("https://62a05917202ceef7086b59b7.mockapi.io/dom/db", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((rs) => {
          this.projects.push(rs);
        });
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDeleteProject(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleCompleted(id) {
      let project = this.projects.find((project) => {
        return project.id === id;
      });
      project.completed = !project.completed;
    },
  },
  computed: {
    filterData() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.completed);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.completed);
      }
      return this.projects;
    },
  },
};
</script>
