const Home = {
  data() {
    return {
      componentInHome: true,
    };
  },

  template: `
      <div class="layout-container">
        <component-profile :component-in-home="componentInHome"/>
        <component-projects :component-in-home="componentInHome" />
      </div>
  `,
};
