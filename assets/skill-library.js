(function () {
  const library = window.MMSKILLS_LIBRARY || {
    stats: {},
    domains: [],
    skills: [],
  };

  const state = {
    domain: "all",
    query: "",
    sort: "complete",
    view: "grid",
  };

  const elements = {
    allSkillCount: document.getElementById("allSkillCount"),
    ubuntuSkillCount: document.getElementById("ubuntuSkillCount"),
    runtimeCardCount: document.getElementById("runtimeCardCount"),
    imageReferenceCount: document.getElementById("imageReferenceCount"),
    summarySkillCount: document.getElementById("summarySkillCount"),
    summaryDomainCount: document.getElementById("summaryDomainCount"),
    summaryStateCount: document.getElementById("summaryStateCount"),
    domainTree: document.getElementById("domainTree"),
    skillSearch: document.getElementById("skillSearch"),
    skillSort: document.getElementById("skillSort"),
    activeDomainLabel: document.getElementById("activeDomainLabel"),
    visibleSkillCount: document.getElementById("visibleSkillCount"),
    skillGrid: document.getElementById("skillGrid"),
    emptyState: document.getElementById("emptyState"),
    dialog: document.getElementById("skillDialog"),
    dialogContent: document.getElementById("skillDialogContent"),
  };

  const byId = new Map(library.skills.map((skill) => [skill.id, skill]));
  const domains = [...library.domains].sort((a, b) => a.label.localeCompare(b.label));

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatNumber(value) {
    return Number(value || 0).toLocaleString("en-US");
  }

  function setText(element, value) {
    if (element) {
      element.textContent = value;
    }
  }

  function renderSummary() {
    setText(elements.allSkillCount, formatNumber(library.stats.skillCount));
    setText(elements.ubuntuSkillCount, formatNumber(library.stats.skillCount));
    setText(elements.runtimeCardCount, formatNumber(library.stats.runtimeCardCount));
    setText(elements.imageReferenceCount, formatNumber(library.stats.imageCount));
    setText(elements.summarySkillCount, formatNumber(library.stats.skillCount));
    setText(elements.summaryDomainCount, formatNumber(library.stats.domainCount));
    setText(elements.summaryStateCount, formatNumber(library.stats.stateCardCount));
  }

  function renderDomainTree() {
    elements.domainTree.innerHTML = domains
      .map(
        (domain) => `
          <button class="tree-row" type="button" data-domain="${escapeHtml(domain.id)}">
            <span>${escapeHtml(domain.label)}</span>
            <strong>${formatNumber(domain.count)}</strong>
          </button>
        `
      )
      .join("");
  }

  function searchableText(skill) {
    return [
      skill.name,
      skill.description,
      skill.domainLabel,
      skill.sourcePath,
      ...(skill.tags || []),
    ]
      .join(" ")
      .toLowerCase();
  }

  function visibleSkills() {
    const query = state.query.trim().toLowerCase();
    let skills = library.skills.filter((skill) => {
      const domainMatch = state.domain === "all" || skill.domain === state.domain;
      const queryMatch = !query || searchableText(skill).includes(query);
      return domainMatch && queryMatch;
    });

    skills = skills.sort((a, b) => {
      if (state.sort === "name") {
        return a.name.localeCompare(b.name);
      }
      if (state.sort === "visual") {
        return b.imageCount - a.imageCount || a.name.localeCompare(b.name);
      }
      if (state.sort === "runtime") {
        return b.runtimeCardCount - a.runtimeCardCount || a.name.localeCompare(b.name);
      }
      return b.completenessScore - a.completenessScore || a.name.localeCompare(b.name);
    });

    return skills;
  }

  function thumbnailHtml(skill) {
    if (skill.thumbnail) {
      return `
        <div class="skill-thumb">
          <img src="${escapeHtml(skill.thumbnail)}" alt="${escapeHtml(skill.name)} preview" loading="lazy" />
        </div>
      `;
    }
    return '<div class="skill-thumb thumb-empty">No preview</div>';
  }

  function renderTags(skill) {
    return (skill.tags || [])
      .slice(0, 4)
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
  }

  function cardHtml(skill) {
    return `
      <article class="skill-card">
        ${thumbnailHtml(skill)}
        <div class="skill-body">
          <div class="skill-domain">
            <span>${escapeHtml(skill.domainLabel)}</span>
            <span>${escapeHtml(skill.platform)}</span>
          </div>
          <h2>${escapeHtml(skill.name)}</h2>
          <p>${escapeHtml(skill.description)}</p>
          <div class="skill-meta" aria-label="Skill assets">
            <div>
              <strong>${formatNumber(skill.runtimeCardCount)}</strong>
              <span>Runtime</span>
            </div>
            <div>
              <strong>${formatNumber(skill.stateCardCount)}</strong>
              <span>State</span>
            </div>
            <div>
              <strong>${formatNumber(skill.imageCount)}</strong>
              <span>Images</span>
            </div>
          </div>
          <div class="skill-tags">${renderTags(skill)}</div>
          <div class="skill-actions">
            <button type="button" data-open-skill="${escapeHtml(skill.id)}">Details</button>
            <button type="button" data-copy-path="${escapeHtml(skill.id)}">Copy path</button>
          </div>
        </div>
      </article>
    `;
  }

  function updateActiveButtons() {
    document.querySelectorAll("[data-domain]").forEach((button) => {
      button.classList.toggle("active", button.dataset.domain === state.domain);
    });
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === state.view);
    });
  }

  function updateFilterLabel(count) {
    const domain = domains.find((item) => item.id === state.domain);
    setText(elements.activeDomainLabel, domain ? domain.label : "All Ubuntu domains");
    setText(elements.visibleSkillCount, `${formatNumber(count)} skills`);
  }

  function renderSkills() {
    const skills = visibleSkills();
    elements.skillGrid.classList.toggle("is-list", state.view === "list");
    elements.skillGrid.innerHTML = skills.map(cardHtml).join("");
    elements.emptyState.hidden = skills.length > 0;
    updateFilterLabel(skills.length);
    updateActiveButtons();
  }

  function listHtml(items) {
    if (!items || !items.length) {
      return "<p>No extracted notes for this field.</p>";
    }
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function openSkill(skillId) {
    const skill = byId.get(skillId);
    if (!skill) {
      return;
    }
    const thumb = skill.thumbnail
      ? `<img src="${escapeHtml(skill.thumbnail)}" alt="${escapeHtml(skill.name)} preview" />`
      : '<div class="dialog-thumb-empty">No preview</div>';

    elements.dialogContent.innerHTML = `
      <div class="dialog-layout">
        ${thumb}
        <div class="dialog-copy">
          <p class="library-kicker">${escapeHtml(skill.domainLabel)} / ${escapeHtml(skill.platform)}</p>
          <h2>${escapeHtml(skill.name)}</h2>
          <p>${escapeHtml(skill.description)}</p>
          <div class="dialog-path">${escapeHtml(skill.sourcePath)}</div>
          <div class="dialog-stats">
            <div>
              <strong>${formatNumber(skill.runtimeCardCount)}</strong>
              <span>Runtime cards</span>
            </div>
            <div>
              <strong>${formatNumber(skill.stateCardCount)}</strong>
              <span>State cards</span>
            </div>
            <div>
              <strong>${formatNumber(skill.imageCount)}</strong>
              <span>Images</span>
            </div>
          </div>
          <section class="dialog-section">
            <h3>Applicability</h3>
            ${listHtml(skill.applicability)}
          </section>
          <section class="dialog-section">
            <h3>Failure modes</h3>
            ${listHtml(skill.failureModes)}
          </section>
        </div>
      </div>
    `;

    if (typeof elements.dialog.showModal === "function") {
      elements.dialog.showModal();
    } else {
      elements.dialog.setAttribute("open", "open");
    }
  }

  function copySkillPath(skillId, button) {
    const skill = byId.get(skillId);
    if (!skill) {
      return;
    }
    const write = navigator.clipboard && navigator.clipboard.writeText
      ? navigator.clipboard.writeText(skill.sourcePath)
      : Promise.reject(new Error("Clipboard unavailable"));
    write
      .then(() => {
        const previous = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = previous;
        }, 1200);
      })
      .catch(() => {
        button.textContent = skill.sourcePath;
      });
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const domainButton = event.target.closest("[data-domain]");
      if (domainButton) {
        state.domain = domainButton.dataset.domain || "all";
        renderSkills();
        return;
      }

      const viewButton = event.target.closest("[data-view]");
      if (viewButton) {
        state.view = viewButton.dataset.view || "grid";
        renderSkills();
        return;
      }

      const openButton = event.target.closest("[data-open-skill]");
      if (openButton) {
        openSkill(openButton.dataset.openSkill);
        return;
      }

      const copyButton = event.target.closest("[data-copy-path]");
      if (copyButton) {
        copySkillPath(copyButton.dataset.copyPath, copyButton);
      }
    });

    elements.skillSearch.addEventListener("input", (event) => {
      state.query = event.target.value;
      renderSkills();
    });

    elements.skillSort.addEventListener("change", (event) => {
      state.sort = event.target.value;
      renderSkills();
    });
  }

  renderSummary();
  renderDomainTree();
  bindEvents();
  renderSkills();
})();
