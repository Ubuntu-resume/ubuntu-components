# Ubuntu Web Components

![CI](https://github.com/Niskarsh/ubuntu-components/actions/workflows/release.yml/badge.svg)
![npm scope](https://img.shields.io/npm/v/@ubuntu-web/battery-indicator?label=battery-indicator)
![npm downloads](https://img.shields.io/npm/dm/@ubuntu-web/battery-indicator)
![license](https://img.shields.io/github/license/Niskarsh/ubuntu-components)

A modular TypeScript monorepo of small, focused React components inspired by Ubuntu UI concepts.

Each package is independently versioned and published under the `@ubuntu-web/*` scope.

---

## 📦 Packages

| Package | npm |
|----------|------|
| `@ubuntu-web/battery-indicator` | https://www.npmjs.com/package/@ubuntu-web/battery-indicator |

Additional packages will appear here as the ecosystem grows.

---

## 🏗 Architecture

This repository uses:

- **npm workspaces**
- **TypeScript**
- **Changesets** for versioning
- **GitHub Actions** for automated publishing

Each package:

- Lives inside `packages/`
- Has its own `package.json`
- Is versioned independently
- Is published automatically when changed

---

## 🚀 Installation

Example:

```bash
npm install @ubuntu-web/battery-indicator
```

---

## 🧪 Development

Install dependencies:

```bash
npm install
```

Build a specific package:

```bash
npm run build -w @ubuntu-web/battery-indicator
```

---

## 🧠 Versioning & Releases

We use **Changesets** to manage releases.

### Creating a release

After modifying a package:

```bash
npm run changeset
```

Select:
- Package
- patch / minor / major
- Summary

Then:

```bash
git add .
git commit -m "add changeset"
git push
```

---

## 🤖 Automated Publishing

On push to `main`:

1. GitHub Actions runs
2. A Version PR is created (if needed)
3. After merging that PR:
   - Only changed packages are published
   - Versions are updated automatically

No manual `npm publish` is required.

---

## ➕ Adding a New Package

1. Create folder in `packages/`
2. Add valid `package.json`
3. Ensure it’s included in root `workspaces`
4. Run `npm install`
5. Add a changeset
6. Push

It will be published automatically.

---

## 🔐 Required GitHub Secret

The repository must contain:

```
NPM_TOKEN
```

This must be an **npm Automation Token**.

Path:
GitHub → Settings → Secrets → Actions → New repository secret

---

## 📄 Root Scripts

```json
{
  "scripts": {
    "changeset": "changeset",
    "version-packages": "changeset version",
    "publish-packages": "changeset publish"
  }
}
```

---

## 📜 License

MIT