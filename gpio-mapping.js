module.exports = function(RED) {

    function mappingGetValueNode(config) {
        RED.nodes.createNode(this,config);
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

        this.labelPort20= config.labelPort20;
        this.valuePort20= config.valuePort20;

        this.labelPort21 = config.labelPort21;
        this.valuePort21 = config.valuePort21;

        this.labelPort22 = config.labelPort22;
        this.valuePort22 = config.valuePort22;

        this.labelPort23 = config.labelPort23;
        this.valuePort23 = config.valuePort23;

        this.labelPort24 = config.labelPort24;
        this.valuePort24 = config.valuePort24;

        
        var globalContext = this.context().global;
        var map = globalContext.get("map");

        map.gpio[this.slot - 1][0].pinA =  "GPIO SLOT " + String(this.slot);
        map.gpio[this.slot - 1][0].boardA =  "";
        map.gpio[this.slot - 1][0].pinB = "";
        map.gpio[this.slot - 1][0].boardB =  "";

        map.gpio[this.slot - 1][1].pinA =  "GPA0 - PIN1";
        map.gpio[this.slot - 1][1].boardA =  "TP" + String(this.labelPort1);
        map.gpio[this.slot - 1][1].pinB = "GPB0 - PIN1";
        map.gpio[this.slot - 1][1].boardB =  "TP" + String(this.labelPort13);

        map.gpio[this.slot - 1][2].pinA =  "GPA1 - PIN2";
        map.gpio[this.slot - 1][2].boardA =  "TP" + String(this.labelPort2);
        map.gpio[this.slot - 1][2].pinB = "GPB1 - PIN2";
        map.gpio[this.slot - 1][2].boardB =  "TP" + String(this.labelPort14);

        map.gpio[this.slot - 1][3].pinA =  "GPA2 - PIN3";
        map.gpio[this.slot - 1][3].boardA =  "TP" + String(this.labelPort3);
        map.gpio[this.slot - 1][3].pinB = "GPB2 - PIN3";
        map.gpio[this.slot - 1][3].boardB =  "TP" + String(this.labelPort15);

        map.gpio[this.slot - 1][4].pinA =  "GPA3 - PIN4";
        map.gpio[this.slot - 1][4].boardA =  "TP" + String(this.labelPort4);
        map.gpio[this.slot - 1][4].pinB = "GPB3 - PIN4";
        map.gpio[this.slot - 1][4].boardB =  "TP" + String(this.labelPort16);
        map.gpio[this.slot - 1][5].pinA =  "GPA4 - PIN5";
        map.gpio[this.slot - 1][5].boardA =  "TP" + String(this.labelPort5);
        map.gpio[this.slot - 1][5].pinB = "GPB4 - PIN5";
        map.gpio[this.slot - 1][5].boardB =  "TP" + String(this.labelPort17);

        map.gpio[this.slot - 1][6].pinA =  "GPA5 - PIN6";
        map.gpio[this.slot - 1][6].boardA =  "TP" + String(this.labelPort6);
        map.gpio[this.slot - 1][6].pinB = "GPB5 - PIN6";
        map.gpio[this.slot - 1][6].boardB =  "TP" + String(this.labelPort18);

        map.gpio[this.slot - 1][7].pinA =  "GPA6 - PIN7";
        map.gpio[this.slot - 1][7].boardA =  "TP" + String(this.labelPort7);
        map.gpio[this.slot - 1][7].pinB = "GPB6 - PIN7";
        map.gpio[this.slot - 1][7].boardB =  "TP" + String(this.labelPort19);

        map.gpio[this.slot - 1][8].pinA =  "GPA7 - PIN8";
        map.gpio[this.slot - 1][8].boardA =  "TP" + String(this.labelPort8);
        map.gpio[this.slot - 1][8].pinB = "GPB7 - PIN8";
        map.gpio[this.slot - 1][8].boardB =  "TP" + String(this.labelPort20);

        map.gpio[this.slot - 1][9].pinA =  "GPA8 - PIN9";
        map.gpio[this.slot - 1][9].boardA =  "TP" + String(this.labelPort9);
        map.gpio[this.slot - 1][8].pinB = "GPB8 - PIN9";
        map.gpio[this.slot - 1][8].boardB =  "TP" + String(this.labelPort21);

        map.gpio[this.slot - 1][10].pinA =  "GPA9 - PIN10";
        map.gpio[this.slot - 1][10].boardA =  "TP" + String(this.labelPort10);
        map.gpio[this.slot - 1][10].pinB = "GPB9 - PIN10";
        map.gpio[this.slot - 1][10].boardB =  "TP" + String(this.labelPort22);

        map.gpio[this.slot - 1][11].pinA =  "GPA10 - PIN11";
        map.gpio[this.slot - 1][11].boardA =  "TP" + String(this.labelPort11);
        map.gpio[this.slot - 1][11].pinB = "GPB10 - PIN11";
        map.gpio[this.slot - 1][11].boardB =  "TP" + String(this.labelPort23);

        map.gpio[this.slot - 1][12].pinA =  "GPA11 - PIN12";
        map.gpio[this.slot - 1][12].boardA =  "TP" + String(this.labelPort12);
        map.gpio[this.slot - 1][12].pinB = "GPB11 - PIN12";
        map.gpio[this.slot - 1][12].boardB =  "TP" + String(this.labelPort24);
        globalContext.set("map", map);
    }
    RED.nodes.registerType("gpio-mapping", mappingGetValueNode);
}