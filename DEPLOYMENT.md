# Vercel deployment setup

The GitHub workflow validates every PR and push to main. After validation, main pushes and manual main runs deploy to Vercel. PRs never receive deployment credentials.

## One-time setup (required)

1. In Vercel, open the EXISTING portfolio project. Ensure Settings → Git points to Vishal0023/vishal-portfolio and the production branch is main; ensure the root directory is the repository root.
2. In Vercel account settings, create a deployment token. Do not share it in chat or commit it.
3. Find the Project ID in the project's General settings and the Team ID (organization ID) in the owning team's General settings. Alternatively, run `npx vercel link` locally and read `orgId` and `projectId` in `.vercel/project.json`.
4. GitHub repository → Settings → Secrets and variables → Actions → New repository secret. Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.
5. GitHub → Actions → Portfolio CI → Run workflow → main.

Without these secrets, CI still validates the app but the deploy job explicitly fails with a missing-secret message. A workflow file alone does not authorize Vercel deployment.

## Avoid duplicate deployments

Vercel's native Git integration may already deploy every push independently of GitHub CI. If you use the Actions deployment job as your production gate, turn off automatic Git deployments for this project in Vercel (or disconnect its Git integration after linking the CLI project). Do not do this until the Actions deployment has succeeded. Otherwise, keep native Git integration and remove the deploy job, using Actions for CI only.

## Troubleshooting old content

- Compare the deployed commit SHA in Vercel with the latest main commit.
- Check build logs and confirm you are viewing the production domain, not an old preview URL.
- Confirm the project IDs belong to the existing site, not a second project.
- If GitHub runs do not appear, enable Actions in repository Settings → Actions → General.
- Credentials need access to the correct Vercel account/team.
