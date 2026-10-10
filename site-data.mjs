export const site = {
  title: "Osen Osagie — GRC Portfolio",
  tagline: "Governance, Risk & Compliance Cybersecurity Professional",
  description:
    "Governance, Risk & Compliance portfolio demonstrating policy development, audit support, risk analysis, and resilience planning aligned with ISO/IEC 27001, NIST CSF 2.0, CIS Controls v8.1, and CIS RAM.",
  repository: "https://github.com/hubexia/osen-grc-portfolio",
  repositoryName: "osen-grc-portfolio",
  owner: "Hubexia",
  ownerUrl: "https://github.com/hubexia",
  email: "hello@osenosagie.com",
  github: "https://github.com/osenosagi",
  linkedin: "https://linkedin.com/in/osen-osagie",
  location: "Austin, TX",
};

export const highlights = [
  "Cybersecurity Governance — Built policy inventories, gap analyses, and governance libraries aligned with ISO/IEC 27001, CIS Controls, and NIST CSF.",
  "Internal Cybersecurity Assessment — Mapped controls, reviewed evidence, ranked findings, and produced remediation roadmaps.",
  "Risk & Third-Party Risk — Created risk registers, treatment plans, vendor questionnaires, and monitoring frameworks.",
  "Incident Response & Vulnerability Governance — Developed playbooks, tabletop materials, vulnerability registers, and remediation strategies.",
  "Business Resilience — Completed business impact analysis and connected RTO/RPO targets to recovery strategies.",
];

export const projects = [
  {
    slug: "01_cybersecurity_governance",
    icon: "📚",
    title: "Cybersecurity Governance",
    linkLabel: "View Governance Project",
    description:
      "Policy development and review covering inventory, gap analysis, drafting, peer review, and delivery aligned with <strong>ISO/IEC 27001, CIS Controls v8.1, NIST CSF 2.0, HIPAA, and PCI DSS.</strong>",
    intro:
      "This project demonstrates a repeatable policy lifecycle for researching requirements, assessing the current state, closing documentation gaps, and delivering an organized governance library.",
    objective:
      "Develop, review, and align cybersecurity policies and standards with organizational requirements, compliance obligations, and industry best practices.",
    frameworks: "ISO/IEC 27001 Annex A, CIS Controls v8.1, NIST CSF 2.0, HIPAA, PCI DSS",
    skills: "Policy lifecycle management, gap analysis, technical writing, stakeholder review, governance accountability",
    process: [
      "Researched baseline and industry-specific policy requirements.",
      "Created a policy inventory with ownership, purpose, and review dates.",
      "Identified missing, outdated, and redundant documentation.",
      "Drafted and updated policies for MFA, vendor onboarding, and compliance expectations.",
      "Incorporated peer and stakeholder feedback before final delivery.",
    ],
    artifacts: [
      ["policy_inventory.csv", "Sample inventory for policy ownership, purpose, status, and review cadence."],
      ["policy_gap_analysis.md", "Gap analysis with prioritized remediation recommendations."],
      ["policy_governance_library.md", "Governance library index for baseline and compliance-specific policies."],
    ],
  },
  {
    slug: "02_internal_cybersecurity_assessment",
    icon: "🔎",
    title: "Internal Cybersecurity Assessment",
    linkLabel: "View Assessment Project",
    description:
      "An audit-style assessment covering scoping, framework mapping, evidence review, control testing, gap identification, risk ranking, and remediation planning.",
    intro:
      "This project demonstrates how security evidence and control expectations are translated into clear findings, business impact, ownership, and actionable remediation.",
    objective:
      "Conduct a comprehensive cybersecurity assessment using ISO/IEC 27001, CIS Controls v8.1, and NIST CSF 2.0, then communicate security gaps and recommendations.",
    frameworks: "ISO/IEC 27001, CIS Controls v8.1, NIST CSF 2.0",
    skills: "Audit scoping, evidence collection, control testing, risk ranking, remediation planning, executive reporting",
    process: [
      "Defined systems, business processes, and assessment boundaries.",
      "Cross-mapped frameworks to reduce duplicate testing.",
      "Reviewed policies, procedures, configurations, diagrams, and vulnerability evidence.",
      "Tested control design and operating effectiveness.",
      "Ranked findings and prepared an executive summary with technical detail.",
    ],
    artifacts: [
      ["assessment_report.md", "Sample internal cybersecurity assessment report."],
      ["control_mapping.csv", "Unified mapping across ISO 27001, CIS Controls, and NIST CSF."],
      ["remediation_plan.csv", "Prioritized action plan with owner, target, and status fields."],
    ],
  },
  {
    slug: "03_risk_assessment",
    icon: "📊",
    title: "Risk Assessment (CIS RAM)",
    linkLabel: "View Risk Assessment",
    description:
      "A structured assessment of assets, threats, vulnerabilities, likelihood, impact, and treatment options using <strong>CIS RAM.</strong>",
    intro:
      "This project demonstrates a business-focused risk method that converts risk scenarios into consistent ratings, treatment decisions, and accountable follow-up.",
    objective:
      "Conduct a structured cybersecurity risk assessment covering asset identification, threat analysis, vulnerability review, scoring, and treatment planning.",
    frameworks: "CIS RAM, NIST CSF risk concepts",
    skills: "Asset inventory, threat modeling, risk scoring, risk register development, treatment planning, risk communication",
    process: [
      "Identified critical data, systems, and business processes.",
      "Documented relevant threat events and control weaknesses.",
      "Scored likelihood and impact using a consistent rubric.",
      "Recorded risks with owners and target dates.",
      "Selected mitigation, transfer, acceptance, or avoidance treatments.",
    ],
    artifacts: [
      ["risk_register.csv", "Sample risk register with scoring, ownership, and treatment decisions."],
      ["risk_treatment_plan.md", "Treatment approach and prioritization rubric."],
    ],
  },
  {
    slug: "04_third_party_risk",
    icon: "🤝",
    title: "Third-Party Risk Assessment",
    linkLabel: "View Third-Party Risk Project",
    description:
      "Vendor due diligence covering questionnaire design, documentation review, risk scoring, contractual controls, remediation requests, and ongoing monitoring.",
    intro:
      "This project demonstrates a repeatable third-party risk workflow from initial criticality screening through onboarding decisions and continuous monitoring.",
    objective:
      "Evaluate third-party vendors and suppliers for cybersecurity risk, control maturity, and onboarding readiness.",
    frameworks: "ISO/IEC 27001, NIST CSF 2.0, SOC reporting concepts",
    skills: "Vendor risk management, security questionnaires, evidence review, vendor scoring, supply-chain security, monitoring",
    process: [
      "Identified services, data access, integrations, and business criticality.",
      "Developed a risk-based security questionnaire.",
      "Reviewed SOC reports, certifications, policies, and supporting evidence.",
      "Classified vendors as low, medium, or high risk.",
      "Recommended contractual controls, remediation, and monitoring cadence.",
    ],
    artifacts: [
      ["vendor_security_questionnaire.md", "Risk-based supplier security questionnaire."],
      ["vendor_rating_matrix.csv", "Vendor criticality and residual-risk scoring matrix."],
      ["onboarding_monitoring_framework.md", "Onboarding gates and recurring monitoring workflow."],
    ],
  },
  {
    slug: "05_incident_response",
    icon: "🚨",
    title: "Incident Response Program",
    linkLabel: "View Incident Response Project",
    description:
      "An incident response capability with policy, phishing, ransomware, and insider-threat playbooks, tabletop facilitation, and lessons learned.",
    intro:
      "This project demonstrates how roles, escalation, communications, scenario playbooks, and after-action improvement fit together in a practical response program.",
    objective:
      "Develop an incident response capability and validate its workflow through a tabletop exercise.",
    frameworks: "NIST incident response lifecycle, organizational crisis-management practices",
    skills: "Incident planning, playbook development, tabletop facilitation, crisis coordination, documentation, lessons learned",
    process: [
      "Defined response roles, severity levels, notification paths, and evidence handling.",
      "Created phishing, ransomware, and insider-threat playbooks.",
      "Designed and facilitated a scenario-based tabletop exercise.",
      "Captured decisions, gaps, and communication issues.",
      "Converted lessons learned into assigned improvement actions.",
    ],
    artifacts: [
      ["incident_response_plan.md", "Core response plan with phases, roles, and escalation."],
      ["phishing_playbook.md", "Phishing triage and containment playbook."],
      ["ransomware_playbook.md", "Ransomware containment and recovery playbook."],
      ["after_action_report.md", "Sample tabletop findings and improvement tracker."],
    ],
  },
  {
    slug: "06_security_awareness",
    icon: "🎓",
    title: "Cybersecurity Awareness Training",
    linkLabel: "View Awareness Project",
    description:
      "A human-centered awareness program built from needs assessment, presentations, posters, quizzes, delivery planning, and learning evaluation.",
    intro:
      "This project demonstrates how common security risks can be translated into clear training, measurable learning objectives, and practical user actions.",
    objective:
      "Improve organizational security awareness through structured training materials, facilitated sessions, and learning evaluation.",
    frameworks: "Security-awareness good practices, organizational policy requirements",
    skills: "Needs assessment, training design, facilitation, public speaking, quiz design, outcome evaluation",
    process: [
      "Assessed audience needs and common human-risk scenarios.",
      "Defined measurable learning objectives.",
      "Developed presentations, posters, and knowledge checks.",
      "Planned delivery for new hires and recurring annual training.",
      "Evaluated results and identified reinforcement topics.",
    ],
    artifacts: [
      ["training_plan.md", "Awareness curriculum, audience, cadence, and delivery plan."],
      ["awareness_quiz.md", "Scenario-based knowledge check with answer key."],
      ["evaluation_summary.md", "Sample training evaluation and improvement notes."],
    ],
  },
  {
    slug: "07_vulnerability_assessment",
    icon: "🛡️",
    title: "Vulnerability Assessment & Remediation",
    linkLabel: "View Vulnerability Project",
    description:
      "A remediation-governance workflow for reviewing penetration-test findings, categorizing severity, assigning action, and tracking closure.",
    intro:
      "This project demonstrates how technical findings are translated into prioritized remediation work, accountable owners, validation evidence, and risk decisions.",
    objective:
      "Review vulnerability findings and prioritize remediation activities according to severity, exposure, and operational impact.",
    frameworks: "Risk-based vulnerability management and secure-configuration practices",
    skills: "Penetration-test review, vulnerability prioritization, patch planning, hardening, segmentation, remediation tracking",
    process: [
      "Reviewed penetration-test and vulnerability-scan findings.",
      "Validated affected assets, exposure, and business context.",
      "Categorized findings as critical, high, medium, or low.",
      "Defined patching, configuration, and segmentation actions.",
      "Tracked remediation and validation through closure.",
    ],
    artifacts: [
      ["vulnerability_register.csv", "Sample findings register with severity, owner, and due date."],
      ["remediation_plan.md", "Remediation strategy and validation workflow."],
    ],
  },
  {
    slug: "08_framework_mapping",
    icon: "🧭",
    title: "Framework Review & Mapping",
    linkLabel: "View Framework Mapping",
    description:
      "A comparative review of <strong>ISO/IEC 27001, CIS Controls v8.1, and NIST CSF 2.0</strong> with a cross-mapped control matrix and adoption recommendations.",
    intro:
      "This project demonstrates how overlapping security frameworks can be normalized into a practical control view without losing framework-specific intent.",
    objective:
      "Compare major cybersecurity frameworks and recommend adoption strategies that fit governance, risk, and assurance needs.",
    frameworks: "ISO/IEC 27001, CIS Controls v8.1, NIST CSF 2.0",
    skills: "Framework analysis, control mapping, requirement normalization, governance strategy, implementation planning",
    process: [
      "Reviewed the purpose, structure, and intended use of each framework.",
      "Identified common control themes and unique requirements.",
      "Built a crosswalk for governance, protection, detection, response, and recovery.",
      "Documented gaps and sources of duplicate effort.",
      "Prepared adoption recommendations based on organizational needs.",
    ],
    artifacts: [
      ["control_mapping_matrix.csv", "Sample crosswalk across ISO 27001, CIS Controls, and NIST CSF."],
      ["framework_recommendation_report.md", "Framework selection and phased-adoption guidance."],
    ],
  },
  {
    slug: "09_business_continuity",
    icon: "🔄",
    title: "Business Continuity & Disaster Recovery",
    linkLabel: "View BC/DR Project",
    description:
      "Business impact analysis, recovery priorities, RTO/RPO targets, backup and alternate-site strategies, and testing recommendations.",
    intro:
      "This project demonstrates how critical business services, technology dependencies, recovery targets, and exercise plans are connected in a usable resilience program.",
    objective:
      "Develop business continuity and disaster recovery capabilities aligned to critical operations and agreed recovery expectations.",
    frameworks: "Business impact analysis and operational-resilience practices",
    skills: "BIA, RTO/RPO definition, recovery strategy, backup planning, exercise design, business alignment",
    process: [
      "Identified critical business functions, dependencies, and disruption impacts.",
      "Established recovery time and recovery point objectives.",
      "Evaluated backup, alternate-site, and cloud-recovery options.",
      "Documented activation, communication, recovery, and return-to-normal steps.",
      "Recommended tabletop exercises and recovery simulations.",
    ],
    artifacts: [
      ["business_impact_analysis.csv", "Sample BIA with service priorities, impacts, RTO, and RPO."],
      ["bcdr_plan.md", "Continuity and disaster recovery plan."],
      ["exercise_plan.md", "Tabletop and recovery-simulation schedule."],
    ],
  },
];

