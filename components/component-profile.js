const Profile = {
  props: ["componentInHome", "componentInDetailedProject", "collapsedState"],
  methods: {
    closeSidebar() {
      this.$emit("closeSidebar");
    },
  },
  template: `
  <aside class="sidebar left-sidebar" :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject, 'collapsed': collapsedState}" id="left-sidebar">
          <div class="sidebar-header">
            <h1 class="logo sidebar-title">
              <span class="material-symbols-outlined"> bubble_chart </span>
              Lam's Portfolio
            </h1>
            <button
              class="btn circle-btn toggle-btn"
              :class="{'component-in-home': componentInHome, 'component-in-detailed-project': componentInDetailedProject}"
              id="close-left-sidebar-btn" @click="closeSidebar"
            >
              <span class="material-symbols-outlined"> arrow_back </span>
            </button>
          </div>
          <section class="section keyword-section">
            <p>
              Keyword
              <span class="keyword-list">
                <span class="keyword">Data Analyst</span>
                <span class="keyword">Business Intelligence Analyst</span>
                <span class="keyword">Sports Analyst</span>
                <span class="keyword">Power BI</span>
                <span class="keyword">SQL</span>
              </span>
            </p>
          </section>

          <section class="section about-me-section">
            <figure>
              <img
                src="images/lam_ngo_profile_gradient.png"
                alt="Tung Lam Ngo's Profile Image"
                class="profile-image"
              />
              <figcaption>
                Tung Lam Ngo <br />
                (Lam) <br />
                <span class="role">Data Analyst</span>
              </figcaption>
            </figure>
            <p class="author-description">
              Aspiring Data Analyst with a strong academic background in Data
              Science, equipped with an analytical mindset and a keen ability to
              identify patterns and key insights from data. Eager to apply my
              skills in data visualization and analysis to contribute
              meaningfully to a dynamic team and grow professionally in the
              field.
            </p>
            <p class="author-work-socials">
              <img src="images/linkedin-brands-solid.svg" alt="linkedin" />
              <img src="images/github-brands-solid.svg" alt="linkedin" />
            </p>
          </section>

          <section class="section contact-section">
            <h3 class="section-subtitle">My Contact</h3>
            <p class="contact">
              <span class="material-symbols-outlined"> mail </span>
              ngotunglam10g3cnn@gmail.com
            </p>
            <p class="contact">
              <span class="material-symbols-outlined"> call </span>
              (+61) 406309505
            </p>
          </section>
          <section class="section cv-section">
            <button class="btn large-btn">
              <span class="material-symbols-outlined"> download </span>
              Download My CV/ Resume
            </button>
          </section>
        </aside>
  `,
};
