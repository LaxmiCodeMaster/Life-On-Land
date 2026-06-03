# Life on Land

Modern full-stack wildlife conservation platform inspired by SDG 15.

## Stack

- Next.js + React + TypeScript
- Tailwind CSS + Framer Motion
- Firebase (Auth, Firestore, Storage)
- Recharts analytics
- Leaflet ecosystem map
- OpenAI-powered EcoCopilot AI endpoint

## Features Implemented

- Cinematic landing page with animated stats and wildlife gallery modal
- Animal encyclopedia with search and filters
- Endangered species tracker with charts
- Interactive ecosystem map with color-coded zones
- GPS wildlife tracking simulator with geofence and visitor alerts
- Incident reporting portal with image + geolocation support
- EcoCopilot AI chat + wildlife identification API scaffold
- Auth page with email/password + Google login hooks
- Donation platform, news, blog, student learning hub
- Security middleware headers and API rate-limit metadata

## Setup

1. Install dependencies:
   - `npm install`
2. Copy `.env.example` to `.env.local` and fill values.
3. Run:
   - `npm run dev`

## Notes

- Some modules use simulated data to make the platform runnable without external services.
- Configure Firebase and OpenAI keys for full production behavior.
