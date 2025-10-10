import { PolyMod } from "https://cdn.polymodloader.com/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class SpeedChecker extends PolyMod {
    constructor() {
        super();
        this.name = "Speed Checker";
    }

    onLoad() {
        // Minimal code to ensure the mod loads
    }

    onUnload() {
        // Clean up if needed
    }
}

export let polyMod = new SpeedChecker();