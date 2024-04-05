# The Void

Disappearing Twitter. Hyper-local.

For now, database only works on Esti's computer.

## Developing

### First Time

You need to install all dependencies onto your machine. Make sure to use Node version 20.

```bash
nvm use 20
npm install
```

### Running the App

Run the command and then open up the localhost for a hot-reloading preview. For now we connect to the prod database :)

```bash
npm run dev
```

### Deploying

[**Vercel**](https://vercel.com/estherluries-projects/the-void) is the CI/CD platform. It also hosts Postgres. First, we link to the platform. Sign in with Github.

```bash
npm install -g vercel
vercel link
```

After linking, we get the `.env` file that defines our Postgres connection variables.

```bash
vercel env pull .env
```

Finally, to create a production version of the app:

```bash
npm run vercel-build
```

Submit a PR. Deployment is automatically triggered when we push to `main`.
