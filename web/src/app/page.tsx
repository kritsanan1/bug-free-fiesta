import { APP_NAME } from '@bug-free-fiesta/shared';
import { Button, Card } from '@bug-free-fiesta/ui';
import { capitalize } from '@bug-free-fiesta/utils';

export default function Home() {
  const welcomeMessage = capitalize('welcome to our monorepo!');

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{APP_NAME}</h1>

        <Card title="Next.js 16 Web Application" className="mb-6">
          <p className="text-gray-700 mb-4">{welcomeMessage}</p>
          <p className="text-gray-600 mb-4">
            This is a modern monorepo structure featuring:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Next.js 16 for web applications</li>
            <li>Expo 54 for mobile applications</li>
            <li>Shared TypeScript packages</li>
            <li>Yarn 4 workspaces</li>
            <li>ESLint & Prettier configuration</li>
            <li>Husky for git hooks</li>
          </ul>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => console.log('Primary clicked')}>
              Get Started
            </Button>
            <Button variant="outline" onClick={() => console.log('Outline clicked')}>
              Learn More
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Shared Packages">
            <p className="text-gray-600">
              Reusable TypeScript packages that can be used across web and mobile apps.
            </p>
          </Card>

          <Card title="Type Safety">
            <p className="text-gray-600">
              Full TypeScript support with shared types and utilities across the monorepo.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
