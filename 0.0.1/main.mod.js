import { PolyMod } from "https://cdn.polymodloader.com/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class SpeedChecker extends PolyMod {
    constructor() {
        super();
        this.name = "Speed Checker";
    }

    onLoad() {
        console.log("Speed Checker loaded! Scanning for variables...");

        // Scan window object for anything interesting
        let candidates = [];
        for (let key in window) {
            try {
                let value = window[key];
                if (typeof value === "number" || typeof value === "function" || typeof value === "object") {
                    candidates.push(key);
                }
            } catch (e) {
                // Some properties throw when accessed, ignore them
            }
        }

        console.log("Potential game variables/functions:", candidates);

        // Optional: Check for common speed-like variable names
        let speedHints = candidates.filter(k => k.toLowerCase().includes("speed") || k.toLowerCase().includes("kmh"));
        console.log("Likely speed variables:", speedHints);

        // If we find a number variable with "speed" in its name, log it every second
        if (speedHints.length > 0) {
            setInterval(() => {
                speedHints.forEach(name => {
                    try {
                        console.log(`${name} =`, window[name]);
                    } catch (e) {}
                });
            }, 1000);
        } else {
            console.log("No obvious speed variables found yet.");
        }
    }
}

export let polyMod = new SpeedChecker();