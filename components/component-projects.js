const Projects = {
  props: ["componentInHome", "componentInDetailedProject"],
  data() {
    return {
      projects: projects,
      filteredTags: [],
      searchTerm: "",
      sortOption: "asc",
    };
  },
  computed: {
    getProjectList() {
      let filteredProjects = this.projects.filter((project) => {
        const combinedString =
          project.name +
          " " +
          project.tags.tool.join(" ") +
          " " +
          project.tags.theme.join(" ") +
          " " +
          project.tags.topic.join(" ");

        const matchesSearchTerm = combinedString
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());

        const matchesTags =
          this.filteredTags.length === 0 ||
          this.filteredTags.some(
            (tag) =>
              project.tags.tool.includes(tag) ||
              project.tags.theme.includes(tag) ||
              project.tags.topic.includes(tag)
          );

        return matchesSearchTerm && matchesTags;
      });

      if (this.sortOption === "asc") {
        filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOption === "desc") {
        filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
      }

      return filteredProjects;
    },
  },
  methods: {
    getProjectFirstThreeTags(...tags) {
      return tags.flat().slice(0, 3);
    },
    toggleTag(tag) {
      const index = this.filteredTags.indexOf(tag);
      if (index === -1) {
        this.filteredTags.push(tag);
      } else {
        this.filteredTags.splice(index, 1);
      }
    },
    selectProject(project) {
      if (this.componentInHome) {
        this.$router.push({
          name: "DetailedProject",
          params: { id: project.id },
        });
      } else {
        this.$emit("project-selected", project);
      }
    },
  },
  template: `
  <aside class="sidebar right-sidebar" id="right-sidebar" :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}">
          <div class="sidebar-header">
            <button
              class="btn circle-btn toggle-btn" :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}"
              id="close-right-sidebar-btn"
            >
              <span class="material-symbols-outlined"> arrow_forward </span>
            </button>
            <h1 class="logo sidebar-title">
              My Projects <span class="material-symbols-outlined"> work </span>
            </h1>
          </div>
          <section class="section search-filter-section">
            <div class="search-filter-container">
              <div class="search-container">
                <span class="material-symbols-outlined"> search </span>
                <input
                  type="text"
                  v-model="searchTerm"
                  placeholder="Search for projects"
                  class="search-input"
                  :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}"
                />
              </div>
              <div class="filter-sort-container">
                <details>
                  <summary>
                   
                    <div class="btn circle-btn filter-btn">
                      <span class="material-symbols-outlined">
                        filter_list
                      </span>
                    </div>

                    
                  </summary>
                  <div class="filter-container">
                    <h4>Filter</h4>
                    <div class="filter-item">
                      <p class="filter-type">Tools</p>
                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Power BI')"
                          type="checkbox"
                          name="PoweBI"
                          id="PowerBI"
                          value="Power BI"
                           @change="toggleTag('Power BI')"
                        />
                        <label for="PowerBI"> Power BI</label>
                      </div>

                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('SQL')"
                          type="checkbox"
                          name="SQL"
                          id="SQL"
                          value="SQL"
                          @change="toggleTag('SQL')"
                        />
                        <label for="SQL"> SQL</label>
                      </div>

                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Excel')"
                          type="checkbox"
                          name="Excel"
                          id="Excel"
                          value="Excel"
                          @change="toggleTag('Excel')"
                        />
                        <label for="Excel"> Excel</label>
                      </div>

                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Python')"
                          type="checkbox"
                          name="Python"
                          id="Python"
                          value="Python"
                           @change="toggleTag('Python')"
                        />
                        <label for="Python"> Python</label>
                      </div>
                    </div>

                    <div class="filter-item">
                      <p class="filter-type">Themes</p>
                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Business')"
                          type="checkbox"
                          name="Business"
                          id="Business"
                          value="Business"
                          @change="toggleTag('Business')"
                        />
                        <label for="Business"> Business</label>
                      </div>

                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Technology')"
                          type="checkbox"
                          name="Technology"
                          id="Technology"
                          value="Technology"
                          @change="toggleTag('Technology')"
                        />
                        <label for="Technology"> Technology</label>
                      </div>

                      <div class="filter-choice">
                        <input
                        :checked="this.filteredTags.includes('Sports')"
                          type="checkbox"
                          name="Sports"
                          id="Sports"
                          value="Sports"
                          @change="toggleTag('Sports')"
                        />
                        <label for="Sports"> Sports</label>
                      </div>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <div class="btn circle-btn sort-btn">
                      <span class="material-symbols-outlined"> sort </span>
                    </div>
                  </summary>
                  <div class="sort-container">
                    <h4>Sort</h4>
                    <div class="sort-item">
                      <p class="sort-type">Name</p>
                      <div class="sort-choice">
                        <input
                          type="radio"
                          name="NameASC"
                          id="NameASC"
                          value="asc"
                          v-model="sortOption"
                        />
                        <label for="NameASC"> Name ASC</label>
                      </div>

                      <div class="sort-choice">
                        <input
                          type="radio"
                          name="NameDESC"
                          id="NameDESC"
                          value="desc"
                          v-model="sortOption"
                        />
                        <label for="NameDESC"> Name DESC</label>
                      </div>
                    </div>
                    <!--
                    <div class="sort-item">
                      <p class="sort-type">Date Updated</p>
                      <div class="sort-choice">
                        <input
                          type="checkbox"
                          name="DateASC"
                          id="DateASC"
                          value="Date ASC"
                        />
                        <label for="DateASC">Date ASC</label>
                      </div>

                      <div class="sort-choice">
                        <input
                          type="checkbox"
                          name="DateDESC"
                          id="DateDESC"
                          value="Date DESC"
                        />
                        <label for="DateDESC">Date DESC</label>
                      </div>
                    </div>-->
                  </div>
                </details>
              </div>
            </div>
          </section>
          <section class="section quick-filter-section">
            <h3 class="section-subtitle">Quick Filter</h3>
            <ul class="tag-list">
              <li>
                <button class="btn tag" @click="toggleTag('Power BI')"
        :class="{ active: filteredTags.includes('Power BI') }">Power BI</button>
              </li>
              <li>
                <button class="btn tag" @click="toggleTag('SQL')"
        :class="{ active: filteredTags.includes('SQL') }">SQL</button>
              </li>
              <li>
                <button class="btn tag" @click="toggleTag('Excel')"
        :class="{ active: filteredTags.includes('Excel') }">Excel</button>
              </li>
              <li>
                <button class="btn tag" @click="toggleTag('Python')"
        :class="{ active: filteredTags.includes('Python') }">Python</button>
              </li>
            </ul>
          </section>
          <section class="section section-project-list" :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}">
            <article class="project" v-for="project in getProjectList" :key="project.id"  @click="selectProject(project)">
              <img
                :src= "project.featuredImageUrl"
                :alt="project.name"
                class="project-cover" :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}"
              />

              <h3 class="project-title">{{ project.name }}</h3>
              <ul class="tag-list">
                <li v-for="(tag, index) in this.getProjectFirstThreeTags(project.tags.tool, project.tags.theme, project.tags.topic)" :key="index">
                  <button class="btn tag">{{ tag }}</button>
                </li>
                <!--<li>
                  <button class="btn tag">Sports</button>
                </li>
                <li>
                  <button class="btn tag">Basketball</button>
                </li>-->
              </ul>
            </article>

            
          </section>
        </aside>
  `,
};
