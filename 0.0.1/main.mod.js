import { PolyMod } from "https://cdn.polymodloader.com/PolyTrackMods/0.5.1/PolyModLoader.js";

class SpeedChecker extends PolyMod {
    onLoad() {
        console.log("Speed Checker mod loaded!");
    }
}

export let polyMod = new SpeedChecker();
