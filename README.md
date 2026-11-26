# TimeTracker

Next.js presentation site for the TimeTracker attendance-management project. Public marketing source only; the private Django application is not included. All interface examples use fictional data.

## Local development

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm test
npm run build
```

Static export: `out/`. GitHub Pages deploys `main` to `times.myoctogone.com`. DNS CNAME points to `edoneapp.github.io`.

The demo calculates same-day durations locally, filters fictional team data and downloads an illustrative CSV. It performs no actual tracking, payroll calculation, HR decision or production login. Overnight shifts are explicitly excluded from this demo. Documented features and proposed extensions are labelled separately.

Contact: Daniel Guedegbe — danielguedegbe10027@gmail.com.
