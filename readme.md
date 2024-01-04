# Micro-Frontend Project with React and Next.js

## Overview

This project demonstrates the implementation of a micro-frontend architecture using React and Next.js. It's based on a tutorial by [Harsh Patel on DEV Community](https://dev.to/logrocket/micro-frontend-with-react-and-nextjs-n6h). The project is structured into three separate Next.js applications, showcasing module federation and component sharing.

## Prerequisites

- Node.js (version specified in the tutorial)
- Next.js v10.2 or later

## Setup

1. Clone the repository.
2. Navigate to each micro-frontend directory (`fe1`, `fe2`, `fe3`).
3. Run `bun install` to install dependencies.

## Running the Project

1. Start each micro-frontend separately using `bun run dev`.
2. Access the applications on their respective ports as configured.

## Structure

- `fe1`: Contains a Header component.
- `fe2`: Exposes a common utility function.
- `fe3`: Consumes components and functions from `fe1` and `fe2`.

## Key Concepts Demonstrated

- Module Federation in Webpack 5.
- Component sharing across different micro-frontends.
- Dynamic code loading in a micro-frontend architecture.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues for any bugs or feature enhancements.

## License

MIT License. See [license](license) for details.

## Acknowledgements

Thanks to Harsh Patel and the DEV Community for the [original tutorial](https://dev.to/logrocket/micro-frontend-with-react-and-nextjs-n6h).
