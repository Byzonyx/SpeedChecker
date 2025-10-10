import { PolyMod } from "https://cdn.polymodloader.com/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class SpeedChecker extends PolyMod {
    constructor() {
        super();
        this.name = "Speed Checker";
        this.display = null;
    }

    onLoad() {
        // Create a floating div in the middle of the screen
        this.display = document.createElement("div");
        this.display.style.position = "fixed";
        this.display.style.top = "10px";
        this.display.style.left = "50%";
        this.display.style.transform = "translateX(-50%)";
        this.display.style.padding = "10px 20px";
        this.display.style.backgroundColor = "rgba(0,0,0,0.6)";
        this.display.style.color = "white";
        this.display.style.fontFamily = "Arial, sans-serif";
        this.display.style.fontSize = "16px";
        this.display.style.zIndex = 9999;
        this.display.innerText = "Scanning for variables...";
        document.body.appendChild(this.display);

        // Start checking for potential speed variables
        this.startScanning();
    }

    startScanning() {
        this.interval = setInterval(() => {
            let speedValue = null;

            // Check window for anything with "speed" or "kmh" in the name
            for (let key in window) {
                try {
                    let val = window[key];
                    if ((key.toLowerCase().includes("speed") || key.toLowerCase().includes("kmh")) 
                        && typeof val === "number") {
                        speedValue = val;
                        break;
                    }
                } catch(e){}
            }

            if (speedValue !== null) {
                this.display.innerText = `Detected Speed: ${speedValue}`;
            } else {
                this.display.innerText = "Scanning for variables...";
            }
        }, 100); // every 100ms
    }

    onUnload() {
        // Clean up
        clearInterval(this.interval);
        if (this.display) document.body.removeChild(this.display);
    }
}


export let polyMod = new SpeedChecker();