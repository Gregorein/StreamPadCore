import fs from "fs"
import path from "path"
import { rollup } from "rollup"
import createRollupConfig from "../rollup.config.js"
import archiver from "archiver"

const controlsDir = path.resolve("src/controls")
const distDir = path.resolve("dist")

async function zipFiles(controlName) {
  const output = fs.createWriteStream(path.join(distDir, `${controlName}.zip`))
  const archive = archiver('zip', { zlib: { level: 9 } })

  output.on('close', function () {
    console.log(`${archive.pointer()} total bytes`)
    console.log(`Created zip: ${controlName}.zip`)
  })

  archive.on('error', function (err) {
    throw err
  })

  // Append files from the control's dist folder
  archive.directory(path.join(distDir, 'controls', controlName), false)
  archive.pipe(output)

  await archive.finalize()
}

// Function to build a specific control
async function buildControl(controlName) {
  const controlPath = path.join(controlsDir, controlName)
  const outputFile = path.join(distDir, `${controlName}.js`)

  // Check if the control directory exists
  if (!fs.existsSync(controlPath)) {
    console.error(`Control "${controlName}" not found in ${controlsDir}`)
    return
  }

  // Create and bundle the control
  const config = createRollupConfig(controlPath, outputFile)
  const bundle = await rollup(config)

  await bundle.write(config.output)
  console.log(`Built control: ${controlName}`)

  // Zip the output files
  await zipFiles(controlName)
}

// Function to build all controls
async function buildAllControls() {
  const controlNames = fs.readdirSync(controlsDir).filter(file =>
    fs.statSync(path.join(controlsDir, file)).isDirectory()
  )

  for (const controlName of controlNames) {
    await buildControl(controlName)
  }
}

// Main script execution
async function main() {
  const controlToBuild = process.argv[2] // Control name passed as an argument

  if (controlToBuild) {
    await buildControl(controlToBuild)
  } else {
    console.log("No control name provided, building all controls...")
    await buildAllControls() // Build all controls if no specific name is provided
  }
}

// Run the build process
main().catch(error => {
  console.error(error)
  process.exit(1)
})
