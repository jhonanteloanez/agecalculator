# Age Calculator Application

## Overview

This is a React-based age calculator application that allows users to calculate their exact age in various time units (years, months, days, hours, minutes, seconds). The application features real-time age updates, timezone detection, and birthday countdown functionality. It appears to be built with modern React patterns using TypeScript and includes a clean UI with calendar selection and live updates.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better development experience
- **State Management**: React hooks (useState, useEffect) for local component state
- **Date Handling**: date-fns library for robust date calculations and formatting
- **UI Components**: Custom UI component library with shadcn/ui patterns including:
  - Calendar component for date selection
  - Card components for content organization
  - Popover components for date picker interactions
  - Button components for user actions
- **Icons**: Lucide React for consistent iconography
- **Styling**: Likely uses CSS modules or Tailwind CSS (based on className patterns)

### Key Features
- **Real-time Age Calculation**: Live updates every second when birth date is selected
- **Timezone Awareness**: Automatic detection of user's timezone with offset display
- **Multiple Time Units**: Calculates age in years, months, days, hours, minutes, and seconds
- **Birthday Countdown**: Shows days until next birthday
- **Interactive Date Selection**: Calendar popup for easy date picking

### Component Structure
- Modular component architecture with reusable UI elements
- TypeScript interfaces for type safety (AgeResult interface)
- Custom utility functions for styling (cn function)

## External Dependencies

### Core Libraries
- **React**: Frontend framework
- **date-fns**: Date manipulation and formatting library
- **Lucide React**: Icon library
- **TypeScript**: Type checking and development tooling

### UI Components
- **shadcn/ui**: Component library providing Calendar, Button, Card, and Popover components
- Custom utility library for styling functions

### Browser APIs
- **Intl.DateTimeFormat**: For timezone detection
- **Date API**: For time calculations and live updates

Note: This analysis is based on a partial code snippet. A complete repository analysis would require access to package.json, additional components, configuration files, and the full project structure.