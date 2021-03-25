module.exports = function(RED) {

    function gpio_mappingNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.slot = config.slot;
        
        this.labelPort1 = config.labelPort1;
        this.valuePort1 = config.valuePort1;
        this.labelPort2 = config.labelPort2;
        this.valuePort2 = config.valuePort2;
        this.labelPort3 = config.labelPort3;
        this.valuePort3 = config.valuePort3;
        this.labelPort4 = config.labelPort4;
        this.valuePort4 = config.valuePort4;
        this.labelPort5 = config.labelPort5;
        this.valuePort5 = config.valuePort5;
        this.labelPort6 = config.labelPort6;
        this.valuePort6 = config.valuePort6;
        this.labelPort7 = config.labelPort7;
        this.valuePort7 = config.valuePort7;
        this.labelPort8 = config.labelPort8;
        this.valuePort8 = config.valuePort8;
        this.labelPort9 = config.labelPort9;
        this.valuePort9 = config.valuePort9;
        this.labelPort10 = config.labelPort10;
        this.valuePort10 = config.valuePort10;
        this.labelPort11 = config.labelPort11;
        this.valuePort11 = config.valuePort11;
        this.labelPort12 = config.labelPort12;
        this.valuePort12 = config.valuePort12;
        this.labelPort13 = config.labelPort13;
        this.valuePort13 = config.valuePort13;
        this.labelPort14 = config.labelPort14;
        this.valuePort14 = config.valuePort14;
        this.labelPort15 = config.labelPort15;
        this.valuePort15 = config.valuePort15;
        this.labelPort16 = config.labelPort16;
        this.valuePort16 = config.valuePort16;
        this.labelPort17 = config.labelPort17;
        this.valuePort17 = config.valuePort17;
        this.labelPort18 = config.labelPort18;
        this.valuePort18 = config.valuePort18;
        this.labelPort19 = config.labelPort19;
        this.valuePort19 = config.valuePort19;
        this.labelPort20 = config.labelPort20;
        this.valuePort20 = config.valuePort20;
        this.labelPort21 = config.labelPort21;
        this.valuePort21 = config.valuePort21;
        this.labelPort22 = config.labelPort22;
        this.valuePort22 = config.valuePort22;
        this.labelPort23 = config.labelPort23;
        this.valuePort23 = config.valuePort23;
        this.labelPort24 = config.labelPort24;
        this.valuePort24 = config.valuePort24;

        this.labelAGNDA = config.labelPortAGNDA;
        this.labelAGNDB = config.labelPortAGNDB;
    
        var globalContext = this.context().global;
        var map = globalContext.get("map");

        var map_gpio = [

            { feat: `GPIO INSTANCE ${config.slot}`, pin: "", board: "" },
            { feat:"GPA0", pin: "PIN 2", board: `TP ${config.labelPort1}` },
            { feat:"GPA1", pin: "PIN 4", board: `TP ${config.labelPort2}` },
            { feat:"GPA2", pin: "PIN 6", board: `TP ${config.labelPort3}` },
            { feat:"GPA3", pin: "PIN 8", board: `TP ${config.labelPort4}` },
            { feat:"GPA4", pin: "PIN 10", board: `TP ${config.labelPort5}` },
            { feat:"GPA5", pin: "PIN 12", board: `TP ${config.labelPort6}` },
            { feat:"GPA6", pin: "PIN 14", board: `TP ${config.labelPort7}` },
            { feat:"GPA7", pin: "PIN 16", board: `TP ${config.labelPort8}` },
            { feat:"GPA8", pin: "PIN 18", board: `TP ${config.labelPort9}` },
            { feat:"GPA9", pin: "PIN 20", board: `TP ${config.labelPort10}` },
            { feat:"GPA10", pin: "PIN 22", board: `TP ${config.labelPort11}` },
            { feat:"GPA11", pin: "PIN 24", board: `TP ${config.labelPort12}` },
            { feat:"AGND", pin: "PIN 26", board: `TP ${config.labelPortAGNDA}` },

            { feat:"GPB0", pin: "PIN 1", board: `TP ${config.labelPort13}` },
            { feat:"GPB1", pin: "PIN 3", board: `TP ${config.labelPort14}` },
            { feat:"GPB2", pin: "PIN 5", board: `TP ${config.labelPort15}` },
            { feat:"GPB3", pin: "PIN 7", board: `TP ${config.labelPort16}` },
            { feat:"GPB4", pin: "PIN 9", board: `TP ${config.labelPort17}` },
            { feat:"GPB5", pin: "PIN 11", board: `TP ${config.labelPort18}` },
            { feat:"GPB6", pin: "PIN 13", board: `TP ${config.labelPort19}` },
            { feat:"GPB7", pin: "PIN 15", board: `TP ${config.labelPort20}` },
            { feat:"GPB8", pin: "PIN 17", board: `TP ${config.labelPort21}` },
            { feat:"GPB9", pin: "PIN1 19", board: `TP ${config.labelPort22}` },
            { feat:"GPB10", pin: "PIN 21", board: `TP ${config.labelPort23}` },
            { feat:"GPB11", pin: "PIN 23", board: `TP ${config.labelPort24}` },
            { feat:"AGND", pin: "PIN 25", board: `TP ${config.labelPortAGNDB}` },

        ];
    
        if (map){
            map.gpio[config.slot] = [];
            for (var row of map_gpio){
                map.gpio[config.slot].push(row);
            }
        }
        globalContext.set("map", map);
    }
    RED.nodes.registerType("gpio-mapping", gpio_mappingNode);
}