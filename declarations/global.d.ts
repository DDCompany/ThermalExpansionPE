/// <reference path="../../core-engine.d.ts" />

declare const ToolType: { [key: string]: any };

declare namespace ToolAPI {
    function breakCarriedTool(uses: number);

    function setTool(f: any, d: any, g: any);
}

declare namespace EnergyTileRegistry {
    function addEnergyTypeForId(g: any, f: any): void;
}