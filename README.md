# sbom-demo

Demo Node.js app for testing the [Microsoft SBOM Tool](https://github.com/microsoft/sbom-tool) with GitHub Actions.

## What this does

The GitHub Actions workflow in `.github/workflows/sbom.yml` runs on every push to `main` and:

1. Installs npm dependencies
2. Runs the Microsoft SBOM tool to generate a Software Bill of Materials in SPDX 2.2 format
3. Uploads the generated `_manifest/manifest.spdx.json` as a workflow artifact

## Running locally

```bash
npm install
npm start
```

## References

- [Microsoft SBOM Tool](https://github.com/microsoft/sbom-tool)
- [Setting up GitHub Actions](https://github.com/microsoft/sbom-tool/blob/main/docs/setting-up-github-actions.md)
- [SPDX specification](https://spdx.dev/specifications/)
