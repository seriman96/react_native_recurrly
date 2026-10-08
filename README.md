# Kanu

Kanu is a React Native mobile application built with Expo. The project focuses on providing a clean and modern experience for managing subscriptions and related account information.

## Features

- User sign-up and sign-in
- Onboarding flow for new users
- Subscription management
- Individual subscription details
- Insights and subscription-related information
- User settings
- File-based navigation with Expo Router
- Responsive UI styling with NativeWind

## Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**
- **NativeWind**
- **Tailwind CSS**
- **React Compiler**

## Project Structure

```text
Kanu/
├── app/
│   ├── (auth)/              # Authentication screens
│   ├── (tabs)/              # Main application screens
│   ├── onboarding.tsx       # Onboarding flow
│   └── _layout.tsx          # Root navigation layout
├── global.css               # Global styles
├── metro.config.js          # Metro configuration
├── postcss.config.mjs       # PostCSS configuration
├── nativewind-env.d.ts      # NativeWind TypeScript definitions
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/seriman96/react_native_recurrly.git
cd react_native_recurrly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npx expo start
```

You can then open the application using Expo Go, an Android emulator, an iOS simulator, or a development build.

## Development

The application uses Expo Router for navigation and follows a file-based routing structure. Most application screens and navigation logic are located inside the `app` directory.

When making changes, start the development server and use the available Expo development options to preview the application.

## Status

This project is currently under development. Features and UI components may continue to change as development progresses.

## Author

**Seriman**

GitHub: [@seriman96](https://github.com/seriman96)