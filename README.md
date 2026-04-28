# spfxsampleexecutive-dashboard

## Summary

Short summary on functionality and used technologies.

This solution is a SharePoint Framework (SPFx) React Web Part that builds a configurable Executive KPI Dashboard.

It allows users to create multiple KPI cards with dynamic inputs such as Label, Target, Actual, and Unit, and automatically calculates performance using RAG (Red-Amber-Green) status logic.

The dashboard is designed to provide a quick visual representation of business performance metrics.

Key Functionality:

Dynamic KPI card rendering
Real-time percentage calculation
RAG status color indication
Reactive property pane (instant updates)

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.20.0-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

SharePoint Framework (SPFx)
Microsoft 365 tenant
SharePoint Online modern pages

Get your own free development tenant by subscribing to Microsoft 365 developer program

## Prerequisites

> Any special pre-requisites?
Node.js (LTS version recommended)
Yeoman and Gulp
SharePoint Online tenant (Microsoft 365)
SPFx development environment setup
Basic knowledge of React and TypeScript

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**
Open the local workbench:

https://localhost:4321/temp/workbench.html

To test in SharePoint:

Bundle solution: gulp bundle --ship
Package solution: gulp package-solution --ship
Deploy to App Catalog
Add web part to a SharePoint page
> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3


This web part enables building an Executive Dashboard by adding multiple KPI cards on a SharePoint page.

Each KPI card:

Accepts user inputs from property pane
Calculates performance percentage
Displays status using RAG color logic

RAG Logic:

Green → ≥ 100% (On Target)
Amber → 80% – 99% (At Risk)
Red → < 80% (Off Track)

This extension illustrates the following concepts:

React component-based architecture in SPFx
Reactive property pane configuration
Separation of concerns using service layer
Dynamic UI rendering based on business logic
Reusability of web parts (multiple instances on same page)

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
Getting started with SharePoint Framework
Building for Microsoft Teams
Use Microsoft Graph in your solution
Publish SharePoint Framework applications
Microsoft 365 Patterns and Practices