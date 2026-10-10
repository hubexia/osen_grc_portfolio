import { mkdir, writeFile } from "node:fs/promises";
import { highlights, projects, site } from "../site-data.mjs";

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const stripHtml = (value) => String(value).replace(/<[^>]+>/g, "");

const markdownCell = (value) =>
  stripHtml(value).replaceAll("|", "\\|").replace(/\s+/g, " ").trim();

const sentenceCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const footer = (assetPrefix = "") => `
  <footer class="site-footer">
    <span class="site-footer-owner">
      <a href="${site.repository}">${site.repositoryName}</a> is maintained by
      <a href="${site.ownerUrl}">${site.owner}</a>.
    </span>
    <span class="site-footer-credits">This site is published with <a href="https://pages.github.com/">GitHub Pages</a>.</span>
  </footer>`;

const shell = ({ title, content, assetPrefix = "", heroTitle = site.title }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#159957">
  <meta name="description" content="${escape(site.description)}">
  <title>${escape(title)}</title>
  <link rel="stylesheet" href="${assetPrefix}assets/css/style.css">
</head>
<body>
  <a id="skip-to-content" href="#content">Skip to the content.</a>
  <header class="page-header" role="banner">
    <h1 class="project-name">${heroTitle}</h1>
    <h2 class="project-tagline">${site.description}</h2>
    <a href="${site.repository}" class="btn">View on GitHub</a>
  </header>
  <main id="content" class="main-content" role="main">
${content}
${footer(assetPrefix)}
  </main>
</body>
</html>`;

const homeSections = projects
  .map(
    (project) => `
    <section class="portfolio-section">
      <h2>${project.title}</h2>
      <p>${project.description}<br>
      ➡️ <a href="./${project.slug}/">${project.linkLabel}</a></p>
    </section>`,
  )
  .join("\n");

const home = shell({
  title: `${site.title} | ${site.tagline}`,
  content: `    <h1>${site.title}</h1>
    <p><strong>${site.tagline}</strong></p>
    <p>Welcome to my Governance, Risk, and Compliance (GRC) portfolio.<br>
    This collection demonstrates policy development, control assessment, documentation, and risk-based planning aligned to <strong>ISO/IEC 27001, CIS Controls v8.1, NIST CSF 2.0, and CIS RAM.</strong></p>
    <hr>
    <h2>Portfolio Highlights (October 2026)</h2>
    <ul>
      ${highlights.map((item) => `<li>${item}</li>`).join("\n      ")}
    </ul>
    <hr>
${homeSections}
    <section class="portfolio-section">
      <h2>About Osen Osagie</h2>
      <p><strong>Governance, Risk &amp; Compliance Cybersecurity Professional</strong><br>
      Expertise: policy development, internal audit support, risk assessment, vendor risk, incident response, vulnerability governance, framework mapping, and business continuity.<br>
      📧 <a href="mailto:${site.email}">${site.email}</a><br>
      🔗 <a href="${site.github}">GitHub</a> | <a href="${site.linkedin}">LinkedIn</a><br>
      📍 ${site.location}</p>
    </section>
    <blockquote>
      <p><em>This portfolio demonstrates practical GRC documentation, control mapping, risk communication, and operational resilience planning.</em></p>
    </blockquote>`,
});

await writeFile(new URL("../index.html", import.meta.url), home);

for (const project of projects) {
  const directory = new URL(`../${project.slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  const rows = project.artifacts
    .map(
      ([file, description]) => `<tr>
          <td><a href="${site.repository}/blob/main/${project.slug}/${file}">${file}</a></td>
          <td>${description}</td>
        </tr>`,
    )
    .join("\n        ");
  const detail = shell({
    title: `${project.title} | ${site.title}`,
    assetPrefix: "../",
    heroTitle: `${project.icon} ${project.title}`,
    content: `    <h1>${project.icon} ${project.title}</h1>
    <p>${project.intro}</p>

    <h2>Project Overview</h2>
    <table>
      <tbody>
        <tr><th>Objective</th><td>${project.objective}</td></tr>
        <tr><th>Frameworks</th><td>${project.frameworks}</td></tr>
        <tr><th>Skills</th><td>${project.skills}</td></tr>
        <tr><th>Evidence</th><td>${project.artifacts.length} public-safe portfolio artifacts</td></tr>
      </tbody>
    </table>

    <h2>Project Workflow</h2>
    <ol>
      ${project.process.map((step) => `<li>${step}</li>`).join("\n      ")}
    </ol>

    <h2>Portfolio Artifacts</h2>
    <table>
      <thead>
        <tr><th>File</th><th>Description</th></tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <h2>Review Notes</h2>
    <p>The documents in this folder are public-safe portfolio samples created to demonstrate the project method, evidence structure, and expected deliverables. They contain no confidential client data.</p>
    <p>📁 <a href="${site.repository}/tree/main/${project.slug}">Review this project folder on GitHub</a></p>
    <hr>
    <p>🔙 <a href="../">Return to Home</a></p>`,
  });
  await writeFile(new URL("index.html", directory), detail);

  const projectReadme = `# ${project.icon} ${project.title}

[View the published project page](${site.pages}${project.slug}/) · [Return to the portfolio overview](../README.md)

${stripHtml(project.intro)}

## Project overview

| Area | Details |
| --- | --- |
| Objective | ${markdownCell(project.objective)} |
| Frameworks referenced | ${markdownCell(project.frameworks)} |
| Skills demonstrated | ${markdownCell(project.skills)} |
| Evidence package | ${project.artifacts.length} public-safe portfolio artifacts |

## Project workflow

${project.process.map((step, index) => `${index + 1}. ${stripHtml(step)}`).join("\n")}

## Portfolio artifacts

| File | Description |
| --- | --- |
${project.artifacts.map(([file, description]) => `| [${file}](./${file}) | ${markdownCell(description)} |`).join("\n")}

## What this demonstrates

${project.skills.split(", ").map((skill) => `- ${sentenceCase(skill)}`).join("\n")}

## Evidence note

These documents are public-safe portfolio samples. They demonstrate the project method, evidence structure, and expected deliverables without exposing confidential client or employer information.

---

[View the live portfolio](${site.pages}) · [View the repository](${site.repository})
`;
  await writeFile(new URL("README.md", directory), projectReadme);
}

const readmeOverviewRows = projects
  .map(
    (project) =>
      `| [${project.title}](${site.repository}/tree/main/${project.slug}) | ${markdownCell(project.description)} |`,
  )
  .join("\n");

const rootReadme = `# ${site.title}

**${site.tagline}**

Welcome to my Governance, Risk, and Compliance (GRC) portfolio.<br>
This repository showcases applied policy development, internal assessment, risk management, third-party oversight, incident readiness, security awareness, vulnerability remediation, framework mapping, and business continuity work.

The projects are aligned with **ISO/IEC 27001**, **CIS Controls v8.1**, **NIST Cybersecurity Framework 2.0**, **CIS RAM**, and selected **HIPAA** and **PCI DSS** requirements.

---

## Overview

Each folder represents a distinct GRC project, assessment, policy set, or supporting evidence package used to demonstrate practical cybersecurity governance and risk-management skills.

| Section | Description |
| --- | --- |
${readmeOverviewRows}

---

## Framework Alignment

| Framework | Reference |
| --- | --- |
| **ISO/IEC 27001** | Governance, policy lifecycle, control assessment, supplier risk, and continual improvement |
| **CIS Controls v8.1** | Safeguard review, control prioritization, vulnerability management, and implementation planning |
| **NIST Cybersecurity Framework 2.0** | Govern, Identify, Protect, Detect, Respond, and Recover functions |
| **CIS RAM** | Risk scenario development, likelihood and impact analysis, and treatment planning |
| **HIPAA and PCI DSS** | Selected security and privacy requirements used in policy gap analysis |

---

## Tools & Platforms Demonstrated

- **Governance frameworks** — ISO/IEC 27001, CIS Controls v8.1, NIST CSF 2.0, and CIS RAM
- **Documentation formats** — Markdown policies, assessment reports, playbooks, and CSV working registers
- **Portfolio publishing** — GitHub, GitHub Actions, and GitHub Pages
- **GRC methods** — Gap analysis, control mapping, evidence review, risk scoring, remediation planning, and exercise facilitation

---

## About Osen Osagie

**Governance, Risk & Compliance Cybersecurity Professional**

**Location:** ${site.location}

- Experienced in policy development, internal audit support, cybersecurity risk assessment, and third-party risk management.
- Skilled in incident response planning, vulnerability governance, framework mapping, security awareness, and business continuity.
- Focused on translating control requirements and technical findings into clear, actionable business documentation.

📧 [${site.email}](mailto:${site.email})<br>
🔗 [GitHub](${site.github}) • [LinkedIn](${site.linkedin})<br>
🌐 Live Site: [${site.pages}](${site.pages})

---

### 🏁 License

Licensed under the [MIT License](LICENSE).<br>
© 2026 Osen Osagie — All Rights Reserved.

> *This repository serves as a professional demonstration of practical GRC documentation, control mapping, risk communication, and operational resilience planning.*
`;

await writeFile(new URL("../README.md", import.meta.url), rootReadme);

console.log(`Built ${projects.length + 1} portfolio pages and ${projects.length + 1} repository READMEs.`);

