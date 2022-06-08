<template>
  <div class="project" :class="{ completed: project.completed }">
    <div class="actions">
      <h3 @click="handleShowDetail" style="display: flex">
        {{ project.title }}
        <span class="material-icons down"> {{ this.icon }} </span>
      </h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
        <span class="material-icons" @click="deleteProject"> delete </span
        ><span class="material-icons check" @click="completeProject">
          done
        </span>
      </div>
    </div>
    <div v-if="showDescription" class="description">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      showDescription: false,
      url:
        "https://62a05917202ceef7086b59b7.mockapi.io/dom/db" + this.project.id, //it's from props
      icon: "expand_more",
      toogle: 1,
    };
  },
  methods: {
    handleShowDetail() {
      if (this.toogle % 2 == 0) {
        this.icon = "expand_more";
      } else {
        this.icon = "expand_less";
      }
      this.showDescription = !this.showDescription;
      this.toogle++;
    },
    deleteProject() {
      fetch(this.url, {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.error(err));
    },
    completeProject() {
      fetch(this.url, {
        method: "PUT",
        header: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ completed: !this.project.completed }),
      })
        .then(() => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
<style scoped>
.project {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.actions .icons span {
  margin: 4px 0px;
  color: rgb(158, 155, 155);
  cursor: pointer;
}
.actions span:hover {
  color: rgb(92, 89, 89);
}
.project.completed {
  border-left: 4px solid #55ee09;
}
.project.completed .check {
  color: #55ee09;
}
</style>
