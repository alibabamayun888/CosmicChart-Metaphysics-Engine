# CosmicChart | Chinese Metaphysics Chart Engine

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md) | [Project Website](https://alibabamayun888.github.io/CosmicChart-Metaphysics-Engine/en/)

**CosmicChart Metaphysics Engine** is a web project for the digital study and visualization of Chinese metaphysics charts. The current online repository contains HTML, JavaScript, Layui resources, and chart-related pages. Its product screenshots show manual chart input, Bazi relationship visualization, Qi Zheng Si Yu configuration, Five Elements trends, and chart history.

The documentation is organized around Four Pillars of Destiny (Bazi), Qimen Dunjia, Qi Zheng Si Yu, Zi Wei Dou Shu, Da Liu Ren, and Shen Sha. This README describes only content supported by the current repository or screenshots. If Java/Spring Boot, Vue, MySQL, or API services are published later, their source and verified setup instructions should be added at the same time.

## Contents

- [Overview](#overview)
- [Metaphysics Modules](#metaphysics-modules)
- [Current Technology](#current-technology)
- [Product Interfaces](#product-interfaces)
- [Screenshots](#screenshots)
- [Repository Structure](#repository-structure)
- [Usage and Limitations](#usage-and-limitations)
- [Data and Privacy](#data-and-privacy)
- [FAQ](#faq)
- [Disclaimer](#disclaimer)
- [License](#license)

## Overview

CosmicChart turns traditional chart inputs, calculated relationships, and visual output into a web-based research interface. The screenshots show birth and transit times, calendar settings, time zones, longitude and latitude, planet or point selection, Bazi relationships, and Five Elements trends.

| Capability | Currently visible |
| --- | --- |
| Chart input | Name, sex, birth time, transit time, calendar, time zone, and coordinates |
| Bazi relationships | Year, month, day, hour, luck-pillar, and transit relationships |
| Relationship graph | Visual links for punishment, clash, combination, and harm |
| Qi Zheng Si Yu | Planet and point selection with time and location settings |
| Five Elements trends | Trend chart over a selected period |
| Chart history | Interfaces for saving, loading, and managing records |

## Metaphysics Modules

### Four Pillars of Destiny (Bazi)

The interface is organized around year, month, day, and hour pillars, Ten Gods, hidden stems, luck cycles, annual transits, and the relationships among branches and stems.

### Qimen Dunjia

The repository root contains [`qimen.html`](qimen.html). Treat that page and its referenced scripts as authoritative for the currently implemented scope.

### Qi Zheng Si Yu

The screenshots show a configuration page for the Seven Governors and Four Remaining Bodies, including time, time zone, coordinates, and selectable celestial points.

### Zi Wei Dou Shu, Da Liu Ren, and Shen Sha

These systems appear in the existing positioning and navigation. Claims of complete algorithms should be backed by source entry points, example input and output, tests, and references.

### Digital-Asset Cycle Research

The previous README describes experimental use of traditional ephemeris concepts for digital-asset cycles. This is suitable only for cultural or academic exploration and must not promise prices, returns, or trading timing.

## Current Technology

- Static HTML: `qimen.html`, `mail-login.html`
- JavaScript resources: `js/`
- Layui UI resources: `layui/`
- Project material: `doc/`
- GitHub Pages and screenshots: `docs/`

The previous README describes Vue3, Spring Boot, Java 17, MySQL, Redis, and REST APIs. The current root does not show `frontend/`, `backend/`, `sql/`, or server build files, so this version does not provide unverified installation commands.

## Product Interfaces

- **Manual chart editor:** person, time, calendar, time zone, and geographic inputs.
- **Bazi relationship graph:** visualizes punishment, clash, combination, and harm.
- **Qi Zheng Si Yu settings:** celestial points, date, transit, time zone, and coordinates.
- **Five Elements and history:** trend visualization and saved chart records.

## Screenshots

### Manual Chart Editor

![CosmicChart manual Bazi chart editor](docs/assets/Screenshots/001.png)

### Bazi Relationship Graph

![CosmicChart Bazi relationship visualization](docs/assets/Screenshots/002.png)

### Qi Zheng Si Yu Configuration

![CosmicChart Qi Zheng Si Yu chart settings](docs/assets/Screenshots/003.png)

### Five Elements Trends and History

![CosmicChart Five Elements trend and chart history](docs/assets/Screenshots/004.png)

## Repository Structure

```text
CosmicChart-Metaphysics-Engine/
├── doc/
├── docs/
│   ├── index.html
│   ├── en/index.html
│   ├── zh-TW/index.html
│   └── assets/Screenshots/
├── js/
├── layui/
├── mail-login.html
├── qimen.html
└── README.md
```

## Usage and Limitations

The current repository is primarily static web content and should be previewed through a local HTTP server. Before release, document supported browsers, real entry pages, algorithm sources, tests, and known limitations. Any server implementation should include real build files, configuration templates, and database migrations.

## Data and Privacy

Names, dates and times of birth, locations, and chart histories may be personal data. A deployment should collect only necessary information, explain its purpose and retention, protect it in transit and at rest, and provide access, correction, and deletion mechanisms.

## FAQ

### What is CosmicChart?

It is a web-based Chinese metaphysics chart and visualization project. The current repository exposes HTML, JavaScript, Layui resources, and product screens related to Bazi, Qi Zheng Si Yu, and trend analysis.

### Does the repository include a complete Java backend and Vue frontend?

The current online root does not show `backend/` or `frontend/`, so a complete service stack cannot be confirmed from this revision.

### Can chart results be used for professional decisions?

No. Metaphysics results are cultural and entertainment-oriented research and must not replace medical, legal, financial, investment, psychological, or other professional advice.

## Disclaimer

This project is for traditional-culture digitization, software development, and academic exchange. Charts, forecasts, ephemeris interpretations, and digital-asset cycle content are for cultural exploration and entertainment only. They are not professional or investment advice and do not guarantee accuracy or outcomes.

## License

The current repository root does not show a standard `LICENSE` file. This README therefore makes no MIT or other license claim. The copyright owner should add the complete chosen license before distribution.

## Contact

| Channel | Address |
| --- | --- |
| Email | <ttpoker40@gmail.com> |
| Telegram | [@alibabama401](https://t.me/alibabama401) |
| Issues | [CosmicChart GitHub Issues](https://github.com/alibabamayun888/CosmicChart-Metaphysics-Engine/issues) |
