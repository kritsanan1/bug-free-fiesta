# Quick Setup Guide

This guide will help you get the monorepo up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.0.0 ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))

> **Note**: Yarn is included in this repository, so you don't need to install it separately.

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/kritsanan1/bug-free-fiesta.git
cd bug-free-fiesta
```

### 2. Install Dependencies

The repository uses Yarn 4, which is already included. Simply run:

```bash
yarn install
```

This will install all dependencies for all workspaces (web, mobile, and shared packages).

### 3. Build Shared Packages

Before running the applications, build the shared packages:

```bash
yarn build
```

Or build packages individually:

```bash
yarn workspace @bug-free-fiesta/shared build
yarn workspace @bug-free-fiesta/ui build
yarn workspace @bug-free-fiesta/utils build
```

## Running the Applications

### Web Application (Next.js)

Start the Next.js development server:

```bash
yarn dev:web
```

The web app will be available at [http://localhost:3000](http://localhost:3000)

### Mobile Application (Expo)

Start the Expo development server:

```bash
yarn dev:mobile
```

Then:
- Press `i` for iOS simulator (macOS only)
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your phone

### Run Both Simultaneously

To run both web and mobile apps at the same time:

```bash
yarn dev
```

## Project Structure Overview

```
bug-free-fiesta/
├── mobile/                 # Expo mobile app
│   ├── app/               # App router screens
│   └── assets/            # Images, fonts, etc.
├── web/                   # Next.js web app
│   └── src/app/           # App router pages
└── packages/              # Shared packages
    ├── shared/            # Types, constants
    ├── ui/                # UI components
    └── utils/             # Utility functions
```

## Common Commands

### Development
```bash
yarn dev              # Run both web and mobile
yarn dev:web          # Run web only
yarn dev:mobile       # Run mobile only
```

### Building
```bash
yarn build            # Build all packages
yarn build:web        # Build web app
yarn build:mobile     # Type-check mobile app
```

### Code Quality
```bash
yarn lint             # Lint all workspaces
yarn format           # Format all code
yarn type-check       # Run TypeScript checks
```

### Cleaning
```bash
yarn clean            # Clean all build artifacts
```

## Troubleshooting

### Installation Issues

If you encounter installation issues:

1. Clear Yarn cache:
   ```bash
   yarn cache clean
   ```

2. Remove node_modules and reinstall:
   ```bash
   rm -rf node_modules web/node_modules mobile/node_modules packages/*/node_modules
   yarn install
   ```

### Build Issues

If shared packages aren't working:

1. Rebuild all packages:
   ```bash
   yarn clean
   yarn build
   ```

2. Make sure TypeScript compiled successfully in all shared packages

### Mobile App Issues

If the mobile app won't start:

1. Clear Expo cache:
   ```bash
   yarn workspace mobile start --clear
   ```

2. Check that you're using a compatible Node version (>= 20.0.0)

### Web App Issues

If the web app won't start:

1. Clear Next.js cache:
   ```bash
   yarn workspace web clean
   ```

2. Rebuild:
   ```bash
   yarn workspace web build
   ```

## Next Steps

1. **Explore the Code**: Check out the shared packages in `/packages`
2. **Read the Docs**: See [README.md](README.md) for detailed documentation
3. **Start Building**: Add your own features and components
4. **Contribute**: Check [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines

## Getting Help

- **Issues**: [GitHub Issues](https://github.com/kritsanan1/bug-free-fiesta/issues)
- **Documentation**: See [README.md](README.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## Additional Resources

- [Yarn 4 Documentation](https://yarnpkg.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Happy coding! 🚀
