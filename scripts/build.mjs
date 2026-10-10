import { mkdir, writeFile } from "node:fs/promises";
import { highlights, projects, site } from "../site-data.mjs";

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

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
    <p><strong>Objective:</strong> ${project.objective}</p>

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

    <p><strong>Frameworks Referenced:</strong> ${project.frameworks}<br>
    <strong>Skills Demonstrated:</strong> ${project.skills}</p>
    <hr>
    <p>🔙 <a href="../">Return to Home</a></p>`,
  });
  await writeFile(new URL("index.html", directory), detail);
}

console.log(`Built ${projects.length + 1} portfolio pages.`);

