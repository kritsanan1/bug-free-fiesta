# Bug Free Fiesta - Modern Monorepo

A modern monorepo featuring Expo 54 mobile app, Next.js 16 web app, and shared TypeScript packages, managed with Yarn 4 workspaces.

## 🏗️ Project Structure

```
bug-free-fiesta/
├── mobile/                    # Expo 54 mobile application
│   ├── app/                   # App router screens
│   ├── assets/                # Mobile assets (images, fonts)
│   └── package.json
├── web/                       # Next.js 16 web application
│   ├── src/                   # Source code
│   │   └── app/              # App router pages
│   └── package.json
├── packages/                  # Shared packages
│   ├── shared/               # Shared types, constants, utilities
│   ├── ui/                   # Shared UI components
│   └── utils/                # Utility functions
├── .yarn/                    # Yarn 4 configuration
│   └── releases/             # Yarn binary
├── package.json              # Root package.json with workspaces
├── tsconfig.json             # Root TypeScript configuration
├── .prettierrc.json          # Prettier configuration
└── eslint.config.mjs         # ESLint configuration
```

## 🚀 Features

- **Yarn 4 Workspaces**: Modern package management with Yarn 4
- **Expo 54**: Latest Expo SDK for mobile development with new architecture
- **Next.js 16**: Latest Next.js for web development
- **TypeScript**: Full type safety across all packages
- **Shared Packages**: Reusable code across mobile and web
- **ESLint & Prettier**: Consistent code formatting
- **Husky**: Git hooks for quality control
- **Concurrently**: Run multiple dev servers simultaneously

## 📦 Packages

### @bug-free-fiesta/shared
Core shared code including:
- TypeScript types and interfaces
- Constants and configuration
- Common utilities

### @bug-free-fiesta/ui
Reusable UI components:
- Button component with variants
- Card component
- TypeScript types for all components

### @bug-free-fiesta/utils
Utility functions:
- String manipulation (capitalize, slugify, camelToKebab, etc.)
- Array operations (unique, chunk, groupBy, shuffle)
- Validation helpers (email, URL, phone number)

## 🛠️ Setup

### Prerequisites

- Node.js >= 20.0.0
- Yarn >= 4.0.0 (included in the repository)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kritsanan1/bug-free-fiesta.git
cd bug-free-fiesta
```

2. Install dependencies:
```bash
yarn install
```

3. Build shared packages:
```bash
yarn build
```

## 🏃 Development

### Run both mobile and web dev servers:
```bash
yarn dev
```

### Run individual applications:

**Web (Next.js):**
```bash
yarn dev:web
# or
yarn workspace web dev
```

**Mobile (Expo):**
```bash
yarn dev:mobile
# or
yarn workspace mobile dev
```

### Other commands:

**Build all packages:**
```bash
yarn build
```

**Run linting:**
```bash
yarn lint
```

**Format code:**
```bash
yarn format
```

**Type checking:**
```bash
yarn type-check
```

**Clean all build artifacts:**
```bash
yarn clean
```

## 📱 Mobile Development

The mobile app is built with Expo 54 and includes:
- Expo Router for navigation
- New Architecture enabled
- Shared packages integration
- TypeScript support

### Running on different platforms:

**iOS:**
```bash
yarn workspace mobile ios
```

**Android:**
```bash
yarn workspace mobile android
```

**Web:**
```bash
yarn workspace mobile web
```

## 🌐 Web Development

The web app is built with Next.js 16 and includes:
- App Router
- Tailwind CSS for styling
- Shared packages integration
- TypeScript support

### Production build:
```bash
yarn workspace web build
yarn workspace web start
```

## 🔧 Workspace Commands

Yarn 4 provides powerful workspace commands:

**Run command in all workspaces:**
```bash
yarn workspaces foreach run <command>
```

**Run command in specific workspace:**
```bash
yarn workspace <workspace-name> <command>
```

**List all workspaces:**
```bash
yarn workspaces list
```

## 📝 Adding New Packages

To add a new shared package:

1. Create a new directory in `packages/`:
```bash
mkdir packages/new-package
```

2. Create `package.json`:
```json
{
  "name": "@bug-free-fiesta/new-package",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

3. Add TypeScript configuration
4. Install in other workspaces:
```bash
yarn workspace web add @bug-free-fiesta/new-package@workspace:*
```

## 🧪 Testing

Each package and application can have its own tests:

```bash
# Run all tests
yarn test

# Run tests in specific workspace
yarn workspace <name> test
```

## 🎨 Code Quality

### Linting
ESLint is configured at the root level with TypeScript and React support:
```bash
yarn lint
```

### Formatting
Prettier is configured for consistent code style:
```bash
# Check formatting
yarn format:check

# Fix formatting
yarn format
```

### Git Hooks
Husky is configured to run checks before commits:
- Lint staged files
- Type checking
- Format checking

## 🔐 Environment Variables

### Web (.env.local):
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Mobile:
Use `app.config.js` or `expo-constants` for environment-specific configuration.

## 📚 Documentation

- [Yarn 4 Documentation](https://yarnpkg.com/)
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Expo 54 Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Create a new branch from `main`
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Expo team for the mobile framework
- Next.js team for the web framework
- Yarn team for the package manager
- All contributors and supporters

## 🐛 Issues

If you encounter any issues, please report them on the [GitHub Issues](https://github.com/kritsanan1/bug-free-fiesta/issues) page.

## 📧 Contact

For questions or support, please open an issue or reach out to the maintainers.

---

Built with ❤️ using Yarn 4 Workspaces, Expo 54, and Next.js 16
