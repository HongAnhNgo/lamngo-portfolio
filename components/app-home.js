const Home = {
  data() {
    return {
      componentInHome: true,
    };
  },

  template: `
  <button
        class="btn open-sidebar-btn open-left-sidebar-btn"
        id="open-left-sidebar-btn"
      >
        My Profile
      </button>
      <button
        class="btn open-sidebar-btn open-right-sidebar-btn"
        id="open-right-sidebar-btn"
      >
        My Projects
      </button>
      <div class="layout-container">
        <component-profile :component-in-home="componentInHome"/>
        <component-projects :component-in-home="componentInHome" />
      </div>
  `,
};
