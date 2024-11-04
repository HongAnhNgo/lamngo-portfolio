const DetailedProject = {
  props: ["id"],
  data() {
    return {
      selectedProject: null,
      componentInDetailedProject: true,
      leftSidebarCollapsed: false,
      rightSidebarCollapsed: false,
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
    openLeftSidebar() {
      this.leftSidebarCollapsed = false;
    },
    openRightSidebar() {
      this.rightSidebarCollapsed = false;
    },
    closeLeftSidebar() {
      this.leftSidebarCollapsed = true;
    },
    closeRightSidebar() {
      this.rightSidebarCollapsed = true;
    },
  },
  template: `
    <button
          class="btn open-sidebar-btn open-left-sidebar-btn"
          :class="{'component-in-detailed-project': componentInDetailedProject}"
          id="open-left-sidebar-btn" @click="openLeftSidebar"
        >
          My Profile
        </button>
        <button
          class="btn open-sidebar-btn open-right-sidebar-btn"
          :class="{'component-in-detailed-project': componentInDetailedProject}"
          id="open-right-sidebar-btn" @click="openRightSidebar"
        >
          My Projects
        </button>
        <div class="layout-container" :class="{'component-in-detailed-project': componentInDetailedProject}">
          <component-profile :component-in-detailed-project="componentInDetailedProject" :collapsedState="leftSidebarCollapsed" 
        @closeSidebar="closeLeftSidebar"/>
          <component-selected-project :selected-project="selectedProject" :component-in-detailed-project="componentInDetailedProject"/>
          <component-projects @project-selected="updateSelectedProject" :component-in-detailed-project="componentInDetailedProject" :collapsedState="rightSidebarCollapsed" 
        @closeSidebar="closeRightSidebar"/>
        </div>
    `,
};
