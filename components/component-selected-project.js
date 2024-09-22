const SelectedProject = {
  props: {
    selectedProject: {
      type: Object,
      default: () => null,
    },
    componentInDetailedProject: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    getTags(tags) {
      return [...tags.tool, ...tags.theme, ...tags.topic];
    },
  },
  template: `
  <main class="main-content" v-if="selectedProject" :class="{'component-in-detailed-project': componentInDetailedProject}">
          <section class="section breadcumb-section">
            <div class="breadcumb-container">
              <router-link to="/" class="router-link"><button class="breadcumb-btn light-breadcumb-btn"><span class="material-symbols-outlined"> home </span> Home</button></router-link>
              <button class="breadcumb-btn dark-breadcumb-btn"><span class="material-symbols-outlined"> dashboard </span> {{ selectedProject.name}}</button>
            </div>
          </section>
          <article class="featured-project">
            <div class="dashboard-container">
              <iframe
              :src="selectedProject.visualizationUrl"
              frameborder="0"
              class="project-vis"
            ></iframe>
            </div>
            <h2 class="featured-project-title">{{ selectedProject.name }}</h2>
            <ul class="tag-list">
              <li v-for="(tag, index) in getTags(selectedProject.tags)" :key="index">
                <button class="btn tag">{{ tag }}</button>
              </li>
            </ul>
            <h3 class="featured-project-desc">About This Project</h3>
            <div class="featured-project-desc-content">
              <!-- Project Progress Section -->
              <div v-if="selectedProject.description.projectProgress">
                <h4>Project Progress:</h4>
                <ol>
                  <li v-for="(progress, index) in selectedProject.description.projectProgress" :key="index">
                    <strong>{{ progress.title }}: </strong>
                    <ul>
                      <li v-for="(detail, index) in progress.details" :key="index">{{ detail }}</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <!-- Key Insights Section -->
              <div v-if="selectedProject.description.keyInsights">
                <h4>Key Insights:</h4>
                <ol>
                  <li v-for="(insight, index) in selectedProject.description.keyInsights" :key="index">
                    <strong>{{ insight.insight }}: </strong>
                    <ul>
                      <li v-for="(detail, index) in insight.details" :key="index">{{ detail }}</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </article>
        </main>
  `,
};
