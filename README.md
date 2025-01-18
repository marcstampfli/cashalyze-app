# Cashalyze - AI-Powered Cashflow Analysis

Cashalyze is a modern web application for comprehensive cashflow analysis, built with:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Shadcn UI

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create `.env.local` file
   - Add required Supabase credentials

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Code Quality

The project uses:
- ESLint for static analysis
- Prettier for code formatting
- Husky for pre-commit hooks
- Lint-staged for staged file checks

Before committing, code is automatically:
1. Linted with ESLint
2. Formatted with Prettier

## Contribution Guidelines

1. Create a new branch for your feature/bugfix
2. Follow the existing code style
3. Write tests for new functionality
4. Ensure all tests pass
5. Update documentation as needed
6. Submit a pull request

## Deployment

The application is deployed on Vercel. The deployment process is automated through CI/CD.

## Technology Stack

- Frontend:
  - Next.js 15 with App Router
  - React 19 with Server Components
  - Tailwind CSS for styling
  - Shadcn UI components

- Backend:
  - Supabase for database and authentication
  - Node.js for server-side logic

- Tools:
  - TypeScript for type safety
  - React Query for data fetching
  - Zustand for state management
