(function () {
  const caseList = document.getElementById("caseList");
  const basePath = "assets/case-studies";
  const variantOrder = [
    ["no_skills", "No Skills"],
    ["text_only", "Text-only"],
    ["multimodal_v9", "MMSkills"],
  ];

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function variantVideo(caseItem, key, label) {
    const variant = caseItem.variants[key];
    if (!variant) {
      return "";
    }
    const folder = `${basePath}/${caseItem.id}`;
    const videoPath = `${folder}/${variant.clip_file}`;
    const posterPath = videoPath.replace(/\.mp4$/, ".jpg");
    return `
      <figure class="case-video-card">
        <video controls preload="metadata" playsinline poster="${escapeHtml(posterPath)}">
          <source src="${escapeHtml(videoPath)}" type="video/mp4" />
        </video>
        <figcaption>
          <div class="case-video-title">
            <strong>${escapeHtml(label)}</strong>
            <span class="case-score">score ${escapeHtml(variant.score)}</span>
          </div>
          <p>${escapeHtml(variant.caption)}</p>
        </figcaption>
      </figure>
    `;
  }

  function skillUsage(caseItem) {
    const multimodal = caseItem.variants.multimodal_v9 || {};
    const skills = multimodal.consulted_skill_names || multimodal.loaded_skill_names || [];
    if (!skills.length) {
      return "";
    }
    return `
      <div class="case-skill-row">
        <strong>Consulted MMSkills:</strong>
        ${skills.map((skill) => `<code>${escapeHtml(skill)}</code>`).join("")}
      </div>
    `;
  }

  function caseHtml(caseItem) {
    return `
      <article class="case-study" id="${escapeHtml(caseItem.id)}">
        <header class="case-study-header">
          <p class="case-meta">
            <span>${escapeHtml(caseItem.model)}</span>
            <span>${escapeHtml(caseItem.app)}</span>
            <span>${escapeHtml(caseItem.task_id)}</span>
          </p>
          <h2>${escapeHtml(caseItem.title)}</h2>
          <p class="case-instruction"><strong>Task:</strong> ${escapeHtml(caseItem.instruction)}</p>
          <p class="case-rationale"><strong>Why selected:</strong> ${escapeHtml(caseItem.why_selected)}</p>
        </header>
        <div class="case-video-grid">
          ${variantOrder.map(([key, label]) => variantVideo(caseItem, key, label)).join("")}
        </div>
        ${skillUsage(caseItem)}
      </article>
    `;
  }

  fetch(`${basePath}/manifest.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((manifest) => {
      caseList.innerHTML = manifest.cases.map(caseHtml).join("");
    })
    .catch((error) => {
      caseList.innerHTML = `
        <div class="case-error">
          Case-study metadata could not be loaded: ${escapeHtml(error.message)}
        </div>
      `;
    });
})();
