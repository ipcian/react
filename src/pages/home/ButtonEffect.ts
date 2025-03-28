// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {VFX} from "https://esm.sh/@vfx-js/core"

export class ButtonEffect {
    private vfx: any;
    constructor(button:HTMLButtonElement) {
        this.vfx = new VFX();
        button.addEventListener("mouseover", () => {
            this.vfx.add(button, {shader:"glitch", overflow:1000});
        });
        button.addEventListener("mouseleave", () => {
            this.vfx.remove(button);
        });
    }
}
