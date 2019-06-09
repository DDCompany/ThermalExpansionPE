const ThermalConfig = {
    //GENERATION
    gen: {
        copper: {
            enabled: __config__.getBool("gen.copper.enabled"),
            size: __config__.getNumber("gen.copper.size"),
            inChunk: __config__.getNumber("gen.copper.inChunk"),
            minY: __config__.getNumber("gen.copper.minY"),
            maxY: __config__.getNumber("gen.copper.maxY")
        },

        tin: {
            enabled: __config__.getBool("gen.tin.enabled"),
            size: __config__.getNumber("gen.tin.size"),
            inChunk: __config__.getNumber("gen.tin.inChunk"),
            minY: __config__.getNumber("gen.tin.minY"),
            maxY: __config__.getNumber("gen.tin.maxY")
        },

        silver: {
            enabled: __config__.getBool("gen.silver.enabled"),
            size: __config__.getNumber("gen.silver.size"),
            inChunk: __config__.getNumber("gen.silver.inChunk"),
            minY: __config__.getNumber("gen.silver.minY"),
            maxY: __config__.getNumber("gen.silver.maxY")
        },

        lead: {
            enabled: __config__.getBool("gen.lead.enabled"),
            size: __config__.getNumber("gen.lead.size"),
            inChunk: __config__.getNumber("gen.lead.inChunk"),
            minY: __config__.getNumber("gen.lead.minY"),
            maxY: __config__.getNumber("gen.lead.maxY")
        },

        aluminum: {
            enabled: __config__.getBool("gen.aluminum.enabled"),
            size: __config__.getNumber("gen.aluminum.size"),
            inChunk: __config__.getNumber("gen.aluminum.inChunk"),
            minY: __config__.getNumber("gen.aluminum.minY"),
            maxY: __config__.getNumber("gen.aluminum.maxY")
        },

        nickel: {
            enabled: __config__.getBool("gen.nickel.enabled"),
            size: __config__.getNumber("gen.nickel.size"),
            inChunk: __config__.getNumber("gen.nickel.inChunk"),
            minY: __config__.getNumber("gen.nickel.minY"),
            maxY: __config__.getNumber("gen.nickel.maxY")
        },

        platinum: {
            enabled: __config__.getBool("gen.platinum.enabled"),
            size: __config__.getNumber("gen.platinum.size"),
            inChunk: __config__.getNumber("gen.platinum.inChunk"),
            minY: __config__.getNumber("gen.platinum.minY"),
            maxY: __config__.getNumber("gen.platinum.maxY")
        },

        oilSand: {
            enabled: __config__.getBool("gen.oilSand.enabled"),
            chance: __config__.getNumber("gen.oilSand.chance"),
            size: __config__.getNumber("gen.oilSand.size")
        },

        resonantEnd: {
            enabled: __config__.getBool("gen.resonantEnd.enabled"),
            chance: __config__.getNumber("gen.resonantEnd.chance"),
            size: __config__.getNumber("gen.resonantEnd.size"),
            inChunk: __config__.getNumber("gen.resonantEnd.inChunk"),
            minY: __config__.getNumber("gen.resonantEnd.minY"),
            maxY: __config__.getNumber("gen.resonantEnd.maxY")
        },

        destabilizedRedstone: {
            enabled: __config__.getBool("gen.destabilizedRedstone.enabled"),
            chance: __config__.getNumber("gen.destabilizedRedstone.chance"),
            size: __config__.getNumber("gen.destabilizedRedstone.size"),
            inChunk: __config__.getNumber("gen.destabilizedRedstone.inChunk"),
            minY: __config__.getNumber("gen.destabilizedRedstone.minY"),
            maxY: __config__.getNumber("gen.destabilizedRedstone.maxY")
        }
    },
};