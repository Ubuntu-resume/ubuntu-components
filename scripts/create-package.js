import fs from "fs"
import path from "path"

const name = process.argv[2]

if (!name) {
  console.error("Provide package name")
  process.exit(1)
}

const templateDir = "templates/react-package"
const targetDir = `packages/${name}`

fs.cpSync(templateDir, targetDir, { recursive: true })

const pkgPath = path.join(targetDir, "package.json")
let pkg = fs.readFileSync(pkgPath, "utf8")

pkg = pkg.replace(/REPLACE_ME/g, name)
fs.writeFileSync(pkgPath, pkg)

console.log(`Created @ubuntu-web/${name}`)
