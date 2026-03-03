# Ubuntu Web Components

A modular monorepo containing TypeScript-based React components inspired by Ubuntu UI concepts.

Each package is published independently to npm under the `@ubuntu-web/*` scope.

---

## 📦 Packages

Example structure:

```
packages/
  battery-indicator/
  core/
  dock/
```

Each package:

- Is written in **TypeScript**
- Is a small, focused React component or utility
- Is published independently to npm
- Has its own version

---

## 🏗 Monorepo Setup

This repository uses:

- **npm workspaces**
- **TypeScript**
- **Changesets** for versioning
- **GitHub Actions** for automated publishing

---

## 🚀 Development

Install dependencies from the root:

```bash
npm install
```

Build a specific package:

```bash
npm run build -w @ubuntu-web/battery-indicator
```

Build all packages (if you define a root build script):

```bash
npm run build
```

---

## 🧠 Versioning & Releases

We use **Changesets** to manage versioning and publishing.

This allows:

- Automatic detection of changed packages
- Independent version bumps
- Proper dependency updates between packages
- Automatic publishing via GitHub Actions
- Automatic publishing of newly added packages

---

## ✏️ Creating a Release

After making changes to a package:

```bash
npm run changeset
```

You will be prompted to:

- Select which package changed
- Choose patch / minor / major
- Add a short summary

This creates a file inside `.changeset/`.

Commit it:

```bash
git add .
git commit -m "add changeset"
git push
```

That’s it.

---

## 🤖 Automated Publishing

When changes are pushed to `main`:

1. GitHub Actions runs
2. A Version PR is created (if needed)
3. After merging the Version PR:
   - Only changed packages are published to npm
   - Versions are updated automatically

No manual `npm publish` is required.

---

## ➕ Adding a New Package

1. Create a new folder inside `packages/`
2. Add a valid `package.json` with:
   - `name`
   - `version`
   - `main`
   - `types`
3. Ensure it is included in `workspaces` in root `package.json`
4. Run:

```bash
npm install
```

When you add a changeset for it and push, it will be published automatically.

---

## 🔐 Required GitHub Secrets

To enable publishing, the repository must include:

```
NPM_TOKEN
```

This should be an **Automation Token** from npm.

Path:

GitHub → Settings → Secrets and variables → Actions → New repository secret

---

## 📄 Example Scripts (Root package.json)

```json
{
  "scripts": {
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "changeset publish"
  }
}
```

---

## 📦 Installing a Package

Example:

```bash
npm install @ubuntu-web/battery-indicator
```

---

## 🧩 Philosophy

- Small, composable components
- Independent versioning
- Automated publishing
- Type-safe by default
- Zero manual release steps

---

## 🛠 Tech Stack

- TypeScript
- React
- npm Workspaces
- Changesets
- GitHub Actions

---

## License

MIT