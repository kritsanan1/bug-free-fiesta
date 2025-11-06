# Contributing to Bug Free Fiesta

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bug-free-fiesta.git
   cd bug-free-fiesta
   ```
3. **Install dependencies**:
   ```bash
   yarn install
   ```
4. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### 1. Making Changes

- Write clean, maintainable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

### 2. Code Quality

Before committing, ensure your code passes all checks:

```bash
# Type checking
yarn type-check

# Linting
yarn lint

# Formatting
yarn format

# Build all packages
yarn build
```

### 3. Commit Messages

Use conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```bash
git commit -m "feat(web): add user authentication"
git commit -m "fix(mobile): resolve navigation issue"
```

### 4. Pre-commit Hooks

Husky will automatically run checks before each commit:
- ESLint for code quality
- Prettier for code formatting
- TypeScript type checking

If checks fail, fix the issues before committing.

## 🏗️ Project Structure

```
bug-free-fiesta/
├── mobile/         # Expo mobile app
├── web/           # Next.js web app
└── packages/      # Shared packages
    ├── shared/    # Types, constants, utilities
    ├── ui/        # UI components
    └── utils/     # Utility functions
```

## 📦 Working with Packages

### Adding Dependencies

**To a specific workspace:**
```bash
yarn workspace web add package-name
yarn workspace mobile add package-name
```

**To a shared package:**
```bash
yarn workspace @bug-free-fiesta/shared add package-name
```

**To root (dev dependencies):**
```bash
yarn add -D package-name
```

### Creating a New Package

1. Create package directory:
   ```bash
   mkdir packages/my-package
   ```

2. Create `package.json`:
   ```json
   {
     "name": "@bug-free-fiesta/my-package",
     "version": "1.0.0",
     "private": true,
     "main": "./dist/index.js",
     "types": "./dist/index.d.ts"
   }
   ```

3. Add TypeScript configuration
4. Export from `src/index.ts`
5. Add to other workspaces as needed

## 🧪 Testing

When adding new features:

1. Add tests for new functionality
2. Ensure existing tests pass
3. Aim for good test coverage

```bash
# Run tests
yarn test

# Run tests in specific workspace
yarn workspace web test
```

## 🎨 Code Style

We use:
- **ESLint** for code quality
- **Prettier** for formatting
- **TypeScript** for type safety

### TypeScript Guidelines

- Use explicit types where helpful
- Avoid `any` - use `unknown` instead
- Create interfaces for object shapes
- Export types from shared packages

### React Guidelines

- Use functional components
- Use hooks for state and effects
- Keep components small and focused
- Extract reusable logic into custom hooks

## 📱 Mobile Development

When working on the mobile app:

1. Test on both iOS and Android (if possible)
2. Use Expo components when available
3. Follow React Native best practices
4. Test on different screen sizes

## 🌐 Web Development

When working on the web app:

1. Test in multiple browsers
2. Ensure responsive design
3. Optimize for performance
4. Use Next.js features appropriately

## 🐛 Reporting Bugs

When reporting bugs, include:

1. Description of the issue
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Environment (OS, browser, Node version, etc.)

## ✨ Feature Requests

When requesting features:

1. Describe the feature clearly
2. Explain the use case
3. Provide examples if possible
4. Discuss potential implementation

## 🔍 Pull Request Process

1. **Update documentation** for any changed functionality
2. **Add tests** for new features
3. **Ensure all checks pass**:
   - TypeScript compilation
   - ESLint
   - Prettier
   - Tests
4. **Update the README** if needed
5. **Request review** from maintainers

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Tested on mobile
- [ ] Tested on web

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests
- [ ] All tests pass
```

## 📚 Resources

- [Yarn 4 Documentation](https://yarnpkg.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 💬 Communication

- **GitHub Issues**: Bug reports and feature requests
- **Pull Requests**: Code contributions
- **Discussions**: General questions and ideas

## ⚖️ Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!
