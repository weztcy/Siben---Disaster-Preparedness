# Siben - Disaster Preparedness

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](#)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2-764ABC?style=flat&logo=redux&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=nodedotjs&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat&logo=express&logoColor=white)](#)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat&logo=mysql&logoColor=white)](#)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37-52B0E7?style=flat&logo=sequelize&logoColor=white)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

![Siben - Disaster Preparedness Banner](./screenshots/banner.png)

**SIBEN** (*Siaga Bencana*) is a full-stack disaster preparedness, emergency mitigation, and public safety web platform engineered to elevate crisis awareness and provide centralized disaster incident intelligence across Indonesia. Positioned along the Pacific Ring of Fire, Indonesia regularly faces severe seismic, volcanic, and hydrometeorological phenomena. SIBEN addresses the acute need for accessible, structured safety protocols and real-time situational data by synthesizing three-phase disaster preparedness workflows, live weather telemetry directly from official meteorological sources, curated emergency news broadcasts, and a full-lifecycle CRUD incident registry.

Traditional disaster response workflows often suffer from fragmented communication channels, outdated static mitigation guidelines, and isolated data siloes. SIBEN solves this by unifying educational emergency preparedness with operational telemetry. Citizens can navigate structured mitigation playbooks for ten distinct natural hazard categories—covering pre-disaster mitigation (*Pra-Bencana*), active response protocols (*Saat Terjadi Bencana*), and post-disaster recovery (*Pascabencana*)—while accessing offcanvas drawer guides detailing seismic scales, meteorological causes, and survival strategies. Simultaneously, the platform bridges real-time awareness through live weather forecasts for Semarang via the Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Open API and empowers municipal disaster management teams with a database-backed incident tracking system.

---

## Features

- **Multi-Hazard Mitigation Directory (10 Disaster Categories)**: Comprehensive emergency manuals and response playbooks for ten natural disaster types—Earthquakes (*Gempa Bumi*), Tsunamis (*Tsunami*), Volcanic Eruptions (*Gunung Meletus*), Floods (*Banjir*), Landslides (*Tanah Longsor*), Tropical Cyclones (*Angin Topan*), Droughts (*Kekeringan*), Wildfires (*Kebakaran Hutan*), Heatwaves (*Gelombang Panas*), and Severe Thunderstorms (*Badai Petir*).
- **Three-Phase Emergency Lifecycle Architecture**: Each hazard guide standardizes actionable protocols across three critical emergency operational phases: Pre-Disaster Mitigation & Preparation (*Pra-Bencana*), Real-Time Crisis Evacuation & Response (*Saat Terjadi Bencana*), and Post-Disaster Recovery & Rehabilitation (*Pascabencana*).
- **Interactive Offcanvas Safety Drawers**: Dynamic sliding drawer panels providing instant contextual deep dives into root causes, scientific measurement scales (e.g., Richter and Moment Magnitude Mw), and categorized safety tips without leaving the active navigation flow.
- **Incident Data Management & CRUD Engine**: Full-lifecycle disaster incident tracking system powered by an Express REST API and Sequelize ORM connected to MySQL, allowing users to record, review, update, and delete verified disaster events across Indonesian provinces and regencies with detailed attributes (date, administrative area, incident address, event type, causal explanation, and casualty figures).
- **Client-Side Pagination & Density Controls**: Dynamic table pagination supporting user-configurable viewing densities (5, 10, 20, or 50 records per page) with synchronous state updating and navigation controls.
- **Real-Time BMKG Meteorological Telemetry**: Backend API proxy integration with the official Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Open API for Semarang Tengah (`adm4=33.74.01.1001`), delivering multi-interval hourly forecasts, humidity levels, dual-unit temperature readouts (°C and °F), official meteorological condition icons, and an embedded interactive Google Map of the BMKG Semarang Maritime Station.
- **Curated Emergency News Aggregation**: Synchronized disaster news stream aggregating recent articles, field reports, and survival equipment guides with direct external source linking.
- **Predictable Global State Architecture**: Asynchronous state management implemented via Redux and Redux Thunk, ensuring clean separation between remote API data retrieval, loading indicators, error handling, and component render cycles.
- **Immersive Multi-Media User Interface**: Modern dark-themed user interface styled with Bootstrap 5 and React-Bootstrap, enhanced by looping high-definition background videos, modal dialogs, and smooth carousel transitions.

---

## Preview & Demo

The application interface is demonstrated across emergency preparedness, telemetry, and administrative management workflows:

![SIBEN Homepage and Navigation Portals](./screenshots/Siben%20-%20Disaster%20Preparedness%201.png)
*Homepage & Navigation Portals: High-impact hero section with looping atmospheric video backdrop, quick-access navigation cards linking to Mitigation, Incident Data, Emergency News, and Weather Forecasts, complete with modal informational overviews.*

![SIBEN Disaster Mitigation Directory](./screenshots/Siben%20-%20Disaster%20Preparedness%202.png)
*Disaster Mitigation Hub: Photographic directory layout displaying ten distinct natural disaster categories, linking directly to dedicated hazard guides and actionable emergency checklists.*

![SIBEN Sub-Penanganan and Offcanvas Safety Guide](./screenshots/Siben%20-%20Disaster%20Preparedness%203.png)
*Hazard Deep Dive & Offcanvas Drawer: Dedicated thunderstorm preparedness interface featuring interactive option buttons (Causes, Structure, Types, Impact, and Tips) that open an offcanvas reading drawer alongside visual mitigation graphics.*

![SIBEN Disaster Incident Records Table](./screenshots/Siben%20-%20Disaster%20Preparedness%204.png)
*Disaster Incident Records Table: Incident tracking system featuring modal-driven data creation, configurable pagination density (10 items per page), multi-column incident records, and inline Edit/Delete management actions.*

![SIBEN Live Weather Forecast](./screenshots/Siben%20-%20Disaster%20Preparedness%205.png)
*Meteorological Telemetry: Real-time weather cards powered by the BMKG Open API, presenting hourly condition forecasts, dual temperature displays (°C / °F), humidity percentages, and official weather condition icons.*

---

## Tech Stack

### Core Architecture
- **Frontend Framework**: React 18.3.1 (Single-Page Application)
- **Routing**: React Router DOM 6.24.1 (Declarative client-side routing)
- **State Management**: Redux 5.0.1, React-Redux 9.1.2, and Redux Thunk (`@reduxjs/toolkit` 2.2.6)
- **Styling & Components**: Bootstrap 5.3.3 & React-Bootstrap 2.10.4
- **Backend Runtime & Framework**: Node.js 18+ with Express 4.19.2
- **Database & Object-Relational Mapping (ORM)**: MySQL 8.x with Sequelize 6.37.3 & `mysql2` 3.10.2
- **HTTP Client**: Axios 1.7.2
- **External Integration**: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) Public Weather API

### Tooling & Infrastructure
- **Process Orchestration**: Concurrently 8.2.2 (Parallel backend and frontend execution)
- **Database Migration & Seeding**: Sequelize CLI 6.6.2
- **Build Tooling**: React Scripts 5.0.1 (Webpack & Babel)
- **Testing Utility**: React Testing Library (`@testing-library/react` 13.4.0) & Jest Dom

---

## Prerequisites

Before configuring and executing the project locally, verify that the following runtime environments and services are installed:

- **Node.js**: Version 18.x or higher (LTS recommended)
- **npm**: Version 9.x or higher
- **MySQL Server**: Version 8.0 or higher (or MariaDB 10.5+) running locally on default port `3306`

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/weztcy/Siben---Disaster-Preparedness.git
   cd "Siben---Disaster-Preparedness"
   ```

2. **Install all dependencies:**
   The repository includes automated scripts to install root, backend, and frontend dependencies:
   ```bash
   npm run install:all
   ```
   *Alternatively, install dependencies manually in each directory:*
   ```bash
   # Root orchestration dependencies
   npm install

   # Backend dependencies
   npm run install:backend

   # Frontend dependencies (requires --legacy-peer-deps for React 18 / React-Bootstrap compatibility)
   npm run install:frontend
   ```

3. **Configure the MySQL Database:**
   Start your local MySQL service and create the target database:
   ```sql
   CREATE DATABASE databencana;
   ```
   *Note: Database connection parameters are specified in `backend/config/config.json`. The default configuration connects to `127.0.0.1:3306` using username `root` with no password.*

4. **Execute Database Migrations and Seed Data:**
   Navigate into the backend directory to apply the database schema migration and populate historical disaster records spanning 2000 to 2024:
   ```bash
   cd backend
   npx sequelize-cli db:migrate
   node seed_disasters.js
   cd ..
   ```

---

## Environment Variables

The frontend application utilizes an environment configuration file located at `frontend/.env`:

| Variable Name | Description | Default / Example Value | Required |
| :--- | :--- | :--- | :--- |
| `REACT_APP_API_URL` | Base URL of the backend Express REST API service | `http://localhost:5000` | Yes |

*The backend defaults to port `5000` via internal configuration (`backend/server.js`). If running in an alternative environment, ensure the port matches the frontend API base URL.*

---

## Usage / Running the Project

1. **Start both backend and frontend concurrently:**
   From the repository root directory, execute:
   ```bash
   npm start
   ```
   This command invokes `concurrently` to launch the Express backend and React frontend concurrently in a single terminal.

2. **Access the application:**
   - **Frontend Application**: [http://localhost:3000](http://localhost:3000)
   - **Backend REST API**: [http://localhost:5000](http://localhost:5000)

3. **Running services independently (optional):**
   If preferred, run each service in separate terminal windows:
   ```bash
   # Terminal 1 - Backend API Server
   npm run server

   # Terminal 2 - Frontend Development Server
   npm run client
   ```

---

## Available Scripts / Commands

The project root manifest exposes coordinated scripts for workspace management:

- `npm start`: Starts both Express API server and React frontend concurrently using `concurrently`.
- `npm run server`: Launches the backend Express server on `http://localhost:5000` (`node server.js`).
- `npm run client`: Launches the frontend development server on `http://localhost:3000` (`react-scripts start`).
- `npm run install:backend`: Executes `npm install` within the `backend` directory.
- `npm run install:frontend`: Executes `npm install --legacy-peer-deps` within the `frontend` directory.
- `npm run install:all`: Simultaneously triggers dependency installation for both `backend` and `frontend`.

### Frontend Direct Scripts (`frontend/package.json`)
- `npm run build`: Compiles production-optimized static assets into `frontend/build`.
- `npm test`: Runs the test suite in interactive watch mode using Jest and React Testing Library.

---

## API Reference / Documentation

The Express backend exposes RESTful endpoints supporting disaster record CRUD, news feeds, and live weather proxying:

### Disaster Records Endpoints (`/disasters`)

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/disasters` | Retrieve all disaster incident records ordered descending by date | None |
| `GET` | `/disasters/:id` | Retrieve details of a specific disaster record by primary ID | None |
| `POST` | `/disasters` | Create a new disaster incident record | `DisasterInput` (JSON) |
| `PUT` | `/disasters/:id` | Update an existing disaster record by ID | `DisasterInput` (JSON) |
| `DELETE` | `/disasters/:id` | Delete a specific disaster record by ID | None |

#### Disaster Input Schema (`POST` / `PUT`)
```json
{
  "tanggal_bencana": "2024-07-08T08:30:00.000Z",
  "provinsi": "Jawa Barat",
  "kota_kabupaten": "Bogor",
  "alamat_lokasi": "Kec. Sukaraja, RT 02/05",
  "bencana_alam": "Tanah Longsor",
  "penjelasan_penyebab": "Hujan dengan intensitas tinggi menyebabkan tebing penahan tanah longsor menimpa rumah warga.",
  "korban_jiwa": 0
}
```

### News Endpoints (`/news`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/news` | Retrieve curated disaster news articles and educational guides |
| `GET` | `/news/:id` | Retrieve single news article metadata by ID |

### Weather Proxy Endpoint (`/weather`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/weather` | Fetches, flattens, and normalizes hourly weather forecast data from the BMKG Open API for Semarang Tengah (`adm4=33.74.01.1001`), returning temperatures (°C / °F), humidity, and icon URLs. |

---

## Testing

The frontend test suite is configured with Jest and React Testing Library:

1. **Run frontend tests:**
   ```bash
   cd frontend
   npm test -- --watchAll=false
   ```
   *Or from the root directory:*
   ```bash
   npm test --prefix frontend -- --watchAll=false
   ```

The test runner verifies component rendering, snapshot consistency, and DOM accessibility for core modules.

---

## Build & Deployment

### Production Build
To create an optimized production bundle of the React frontend:

```bash
cd frontend
npm run build
```
This generates compiled, minified JavaScript, CSS, and media bundles in the `frontend/build` folder, ready for serving via Nginx, Caddy, or static cloud hosting platforms.

### Production Backend Execution
Ensure production database credentials are configured in `backend/config/config.json` under the `production` key, set `NODE_ENV=production`, and start the service:

```bash
cd backend
node server.js
```

---

## License

Please see the [LICENSE](./LICENSE) file for the terms and conditions governing the use, modification, and distribution of this project.

## Author & Contact

**Yohanes Dimas Pratama**

- GitHub: [github.com/weztcy](https://github.com/weztcy)
- Portfolio: [dimaspratama.vercel.app](https://dimaspratama.vercel.app)
- LinkedIn: [linkedin.com/in/yohanes-dimas](https://www.linkedin.com/in/yohanes-dimas)

