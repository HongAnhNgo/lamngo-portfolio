const DetailedProject = {
  props: ["id"],
  data() {
    return {
      selectedProject: null,
      componentInDetailedProject: true,
    };
  },
  mounted() {
    if (projects && projects.length) {
      this.selectedProject = projects[this.id - 1];
    }
  },
  methods: {
    updateSelectedProject(project) {
      this.selectedProject = project;
    },
  },
  template: `
    <button
          class="btn open-sidebar-btn open-left-sidebar-btn"
          :class="{'component-in-detailed-project': componentInDetailedProject}"
          id="open-left-sidebar-btn"
        >
          My Profile
        </button>
        <button
          class="btn open-sidebar-btn open-right-sidebar-btn"
          :class="{'component-in-detailed-project': componentInDetailedProject}"
          id="open-right-sidebar-btn"
        >
          My Projects
        </button>
        <div class="layout-container" :class="{'component-in-detailed-project': componentInDetailedProject}">
          <component-profile :component-in-detailed-project="componentInDetailedProject"/>
          <component-selected-project :selected-project="selectedProject" :component-in-detailed-project="componentInDetailedProject"/>
          <component-projects @project-selected="updateSelectedProject" :component-in-detailed-project="componentInDetailedProject"/>
        </div>
    `,
};
