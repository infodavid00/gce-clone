import { platform } from "node:os";
import { join } from "node:path";
import { osConfigDir, osDataDir, osHomeDir, osTempDir } from "./osPaths.js";

export const GSYSTEM = {
   name: "gce",
   version: "1.0.0",
   releaseDate: "2024-05-05"
}

export const GOUTFORMAT = {
   tabA: "\t",
   encoding: "ascii"
}

const configDir = join(osHomeDir, ...osConfigDir[platform()], GSYSTEM.name)
const tempDir = join(osHomeDir, ...osTempDir[platform()], GSYSTEM.name)
const dataDir = join(osHomeDir, ...osDataDir[platform()], GSYSTEM.name)
export const GPATHS = {
   configDir,
   tempDir,
   dataDir,
   gcceConfig: join(configDir, "gcce.json"),
   globalConfig: join(configDir, "gce.g.config.json"),
   tServices: join(tempDir, "TSERVCIES"),
   serviceLog: join(tempDir, "SERVICELOG")
}
