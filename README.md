# IEEE SCT SB Website - Next.js Migration

This repository contains the source code for the IEEE Student Branch of Sree Chitra Thirunal College of Engineering (IEEE SCT SB) website, migrated from a static HTML/CSS/JS site to a modern [Next.js](https://nextjs.org/) application.

## Project Overview

The goal of this project was to modernize the existing legacy website while preserving its original design and content. The migration involved converting static HTML pages into React components, setting up a robust routing system using Next.js App Router, and ensuring all legacy assets (CSS, JS, Images) are correctly integrated.

### Key Features

*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Legacy CSS (Bootstrap, FontAwesome, custom styles) integrated via global styles. Tailwind CSS is installed but currently disabled to prevent conflicts with legacy styles.
*   **Components:** Reusable React components for Header, Footer, Team Members, and Photo Carousels.
*   **Routing:** File-system based routing for all pages (Home, About, Contact, Execom, Chapters, Events, etc.).

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   [pnpm](https://pnpm.io/) (Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ieeesbsct-next
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Project Structure

*   `app/`: Contains the application source code.
    *   `layout.tsx`: The root layout including global styles and scripts.
    *   `page.tsx`: The home page.
    *   `components/`: Reusable UI components (Header, Footer, etc.).
    *   `[route]/page.tsx`: Individual pages (e.g., `about/page.tsx`, `contact/page.tsx`).
*   `public/`: Static assets served directly.
    *   `css/`: Legacy stylesheets.
    *   `js/`: Legacy JavaScript files.
    *   `img/`: Images.
    *   `fonts/`: Web fonts.

## Contact

**IEEE SCT Student Branch**
NH 66, CTO Colony, Pappanamcode
Thiruvananthapuram, Kerala 695018

*   **Email:** mailtoieeesctcb@gmail.com
*   **Phone:** +91 8547393808
