PokeReact is a React application built with TypeScript, Redux Toolkit, and RTK Query to fetch and display a list of Pokemon from the PokeAPI. Users can click on a Pokemon to view detailed information. This project follows best practices for modularity, scalability, and maintainability.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [API References](#api-references)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **React**: 18.x
- **TypeScript**: 4.x
- **Redux Toolkit**: 1.8.x
- **RTK Query**: Integrated with Redux Toolkit for data fetching and caching
- **Redux Persist**: 6.x for persisting the selected Pokemon data
- **Axios**: 0.21.x for HTTP requests
- **Jest**: 27.x and **React Testing Library**: 12.x for unit and integration testing

## Project Structure

```
├── src
│   ├── app
│   │   └── store.ts                    # Redux store configuration
│   ├── components
│   │   ├── pokemonList
│   │   │   ├── PokemonList.tsx         # Pokemon list component
│   │   │   └── style.css               # Pokemon list styles
│   │   └── pokemonDetail
│   │       ├── PokemonDetail.tsx       # Pokemon detail component
│   │       └── style.css               # Pokemon detail styles
│   ├── features
│   │   └── pokemon
│   │       ├── pokemonApi.ts           # RTK Query API slice
│   │       ├── pokemonSlice.ts         # Redux slice
│   │       └── types.ts                # Type definitions for Pokemon data
│   ├── tests
│   │   ├── PokemonList.test.tsx        # Unit test for PokemonList component
│   │   └── PokemonDetail.test.tsx      # Unit test for PokemonDetail component
│   ├── App.tsx                         # Main App component
│   ├── index.tsx                       # Application entry point
│   └── App.css                         # Basic styling for UI layout
└── ...
```

## Features

- Display a list of Pokemon with their names and images.
- Click on a Pokemon to view details (name, height, weight, types).
- Persistent state using `redux-persist` to retain the selected Pokemon even after refreshing the page.
- Error and loading handling for API requests.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MianAfzaalZahoor99/poke-react.git
   cd poke-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application locally, use:

```bash
npm start
```

This command will start the app in development mode on `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory with the following environment variable:

```plaintext
REACT_APP_API_BASE_URL=https://pokeapi.co/api/v2
```

This will allow you to configure the base URL of the API easily.

## Testing

This project uses **Jest** and **React Testing Library** for unit testing. To run tests, use:

```bash
npm test
```

The test coverage is designed to meet at least 60%, covering both components (`PokemonList` and `PokemonDetail`) with scenarios for loading, error handling, and basic rendering.

### Test Files

- `PokemonList.test.tsx`: Tests the `PokemonList` component for loading state, error state, and rendering of Pokemon items.
- `PokemonDetail.test.tsx`: Tests the `PokemonDetail` component to display selected Pokemon details and handles loading and error states.

## API References

This project uses the [PokeAPI](https://pokeapi.co/) to fetch data:

- **GET /pokemon?limit=10**: Fetches a list of Pokemon.
- **GET /pokemon/{name}**: Fetches details for a specific Pokemon.

Example API endpoints:

- List of Pokemon: `https://pokeapi.co/api/v2/pokemon?limit=10`
- Pokemon Details: `https://pokeapi.co/api/v2/pokemon/charizard`

## Folder Structure

This project is structured to ensure clean code separation and modularity:

- **src/app**: Contains the Redux store configuration.
- **src/components**: Holds React components, including `PokemonList` and `PokemonDetail`.
- **src/features/pokemon**: Contains Redux slices, RTK Query API, and types specific to the Pokemon feature.
- **src/tests**: Contains all the test files for components.
- **src/index.tsx**: Entry point for the application.
- **src/App.tsx**: Main component to render the layout.

## WebView
<img width="1442" alt="Screenshot 2024-11-01 at 5 39 43 PM" src="https://github.com/user-attachments/assets/f9810795-7b62-4399-b351-8503590ea4bc">

## MobileView
<img width="354" alt="Screenshot 2024-11-01 at 5 40 50 PM" src="https://github.com/user-attachments/assets/ec6fd797-5c70-4d4e-9a4b-9a2024f2a09f">
<img width="355" alt="Screenshot 2024-11-01 at 5 41 01 PM" src="https://github.com/user-attachments/assets/b3660462-a616-403d-9d84-88f3d27772b8">


