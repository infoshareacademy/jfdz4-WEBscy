var map_size = 15;
var map_field_width_px = 50;
var eventMarkerColors = ["blue", "orange", "yellow", "red"];
var activeLevelEventFieldsArray = [];
var levelScore = 0;
var gameScore = 0;
var gameTime = 0;
var gameCurrLevel = 0;
var carLevelControl = 1;
var levelTime = 0;
var $game_table = $('<table>');
var $container = $('#game');

var map_level_1_config = {
  trapFiledsArray: ["x8_y2", "x9_y6", "x5_y5", "x7_y8"],
  eventFieldsArrays: [
    ["x5_y0", "x12_y1", "x2_y12", "x10_y13"],
    ["x3_y2", "x9_y13", "x11_y2", "x5_y12"],
    ["x3_y2", "x12_y2", "x11_y13", "x1_y14"],
    ["x4_y2", "x13_y2", "x10_y13", "x2_y12"]
  ],
  x1_y0: "map-td map-field-0 active",
  x5_y0: "map-td map-field-0 active",
  x12_y0: "map-td map-field-0 active",
  x1_y1: "map-td map-field-0 active",
  x5_y1: "map-td map-field-0 active",
  x12_y1: "map-td map-field-0 active",
  x1_y2: "map-td map-field-1 active",
  x2_y2: "map-td map-field-0 rotate-90 active",
  x3_y2: "map-td map-field-0 rotate-90 active",
  x4_y2: "map-td map-field-0 rotate-90 active",
  x5_y2: "map-td map-field-2 active",
  x6_y2: "map-td map-field-0 rotate-90 active",
  x7_y2: "map-td map-field-0 rotate-90 active",
  x8_y2: "map-td map-field-0 rotate-90 active",
  x9_y2: "map-td map-field-0 rotate-90 active",
  x10_y2: "map-td map-field-0 rotate-90 active",
  x11_y2: "map-td map-field-0 rotate-90 active",
  x12_y2: "map-td map-field-2 active",
  x13_y2: "map-td map-field-0 rotate-90 active",
  x14_y2: "map-td map-field-0 rotate-90 active",
  x5_y3: "map-td map-field-0 active",
  x12_y3: "map-td map-field-0 active",
  x5_y4: "map-td map-field-0 active",
  x12_y4: "map-td map-field-0 active",
  x5_y5: "map-td map-field-0 active",
  x9_y5: "map-td map-field-1 rotate-90 active",
  x10_y5: "map-td map-field-0 rotate-90 active",
  x11_y5: "map-td map-field-0 rotate-90 active",
  x12_y5: "map-td map-field-1 rotate-270 active",
  x5_y6: "map-td map-field-0 active",
  x9_y6: "map-td map-field-0 active",
  x5_y7: "map-td map-field-0 active",
  x9_y7: "map-td map-field-0 active",
  x0_y8: "map-td map-field-0 rotate-90 active",
  x1_y8: "map-td map-field-0 rotate-90 active",
  x2_y8: "map-td map-field-0 rotate-90 active",
  x3_y8: "map-td map-field-0 rotate-90 active",
  x4_y8: "map-td map-field-0 rotate-90 active",
  x5_y8: "map-td map-field-2 active",
  x6_y8: "map-td map-field-0 rotate-90 active",
  x7_y8: "map-td map-field-0 rotate-90 active",
  x8_y8: "map-td map-field-0 rotate-90 active",
  x9_y8: "map-td map-field-2 active",
  x10_y8: "map-td map-field-0 rotate-90 active",
  x11_y8: "map-td map-field-0 rotate-90 active",
  x12_y8: "map-td map-field-0 rotate-90 active",
  x13_y8: "map-td map-field-0 rotate-90 active",
  x14_y8: "map-td map-field-0 rotate-90 active",
  x5_y9: "map-td map-field-0 active",
  x9_y9: "map-td map-field-0 active",
  x5_y10: "map-td map-field-0 active",
  x9_y10: "map-td map-field-0 active",
  x5_y11: "map-td map-field-0 active",
  x9_y11: "map-td map-field-1 active",
  x10_y11: "map-td map-field-0 rotate-90 active",
  x11_y11: "map-td map-field-0 rotate-90 active",
  x12_y11: "map-td map-field-1 rotate-180 active",
  x1_y12: "map-td map-field-1 rotate-90 active",
  x2_y12: "map-td map-field-0 rotate-90 active",
  x3_y12: "map-td map-field-0 rotate-90 active",
  x4_y12: "map-td map-field-0 rotate-90 active",
  x5_y12: "map-td map-field-1 rotate-270 active",
  x12_y12: "map-td map-field-0 active",
  x1_y13: "map-td map-field-0 active",
  x9_y13: "map-td map-field-1 rotate-90 active",
  x10_y13: "map-td map-field-0 rotate-90 active",
  x11_y13: "map-td map-field-0 rotate-90 active",
  x12_y13: "map-td map-field-1 rotate-270 active",
  x1_y14: "map-td map-field-0 active",
  x9_y14: "map-td map-field-0 active"
};

var map_level_2_config = {
  trapFiledsArray: ["x5_y5", "x10_y7", "x2_y8", "x7_y5"],
  eventFieldsArrays: [
    ["x1_y5", "x6_y1", "x12_y11", "x2_y13"],
    ["x3_y5", "x5_y2", "x12_y2", "x4_y12"],
    ["x0_y6", "x9_y1", "x9_y13", "x3_y12"],
    ["x3_y6", "x13_y1", "x8_y12", "x5_y12"]
  ],
  x1_y0: "map-td map-field-0 active",
  x12_y0: "map-td map-field-0 active",
  x1_y1: "map-td map-field-1 active",
  x2_y1: "map-td map-field-1 rotate-180 active",
  x5_y1: "map-td map-field-1 rotate-90 active",
  x6_y1: "map-td map-field-0 rotate-90 active",
  x7_y1: "map-td map-field-0 rotate-90 active",
  x8_y1: "map-td map-field-0 rotate-90 active",
  x9_y1: "map-td map-field-0 rotate-90 active",
  x10_y1: "map-td map-field-0 rotate-90 active",
  x11_y1: "map-td map-field-0 rotate-90 active",
  x12_y1: "map-td map-field-2 active",
  x13_y1: "map-td map-field-0 rotate-90 active",
  x14_y1: "map-td map-field-0 rotate-90 active",
  x2_y2: "map-td map-field-0 active",
  x5_y2: "map-td map-field-0 active",
  x12_y2: "map-td map-field-0 active",
  x2_y3: "map-td map-field-0 active",
  x10_y3: "map-td map-field-1 rotate-90 active",
  x11_y3: "map-td map-field-0 rotate-90 active",
  x12_y3: "map-td map-field-1 rotate-270 active",
  x2_y4: "map-td map-field-0 active",
  x10_y4: "map-td map-field-0 active",
  x0_y5: "map-td map-field-0 rotate-90 active",
  x1_y5: "map-td map-field-0 rotate-90 active",
  x2_y5: "map-td map-field-2 active",
  x3_y5: "map-td map-field-0 rotate-90 active",
  x4_y5: "map-td map-field-0 rotate-90 active",
  x5_y5: "map-td map-field-0 rotate-90 active",
  x6_y5: "map-td map-field-0 rotate-90 active",
  x6_y7: "map-td map-field-13 noactive noactive",
  x7_y5: "map-td map-field-0 rotate-90 active",
  x8_y5: "map-td map-field-0 rotate-90 active",
  x9_y5: "map-td map-field-0 rotate-90 active",
  x10_y5: "map-td map-field-2 active",
  x11_y5: "map-td map-field-0 rotate-90 active",
  x12_y5: "map-td map-field-0 rotate-90 active",
  x13_y5: "map-td map-field-0 rotate-90 active",
  x14_y5: "map-td map-field-0 rotate-90 active",
  x0_y6: "map-td map-field-0 rotate-90 active",
  x1_y6: "map-td map-field-0 rotate-90 active",
  x2_y6: "map-td map-field-2 active",
  x3_y6: "map-td map-field-0 rotate-90 active",
  x4_y6: "map-td map-field-0 rotate-90 active",
  x5_y6: "map-td map-field-0 rotate-90 active",
  x6_y6: "map-td map-field-0 rotate-90 active",
  x7_y6: "map-td map-field-0 rotate-90 active",
  x8_y6: "map-td map-field-0 rotate-90 active",
  x9_y6: "map-td map-field-0 rotate-90 active",
  x10_y6: "map-td map-field-2 active",
  x11_y6: "map-td map-field-0 rotate-90 active",
  x12_y6: "map-td map-field-0 rotate-90 active",
  x13_y6: "map-td map-field-0 rotate-90 active",
  x14_y6: "map-td map-field-0 rotate-90 active",
  x2_y7: "map-td map-field-0 active",
  x5_y7: "map-td map-field-0 active",
  x7_y7: "map-td map-field-0 active",
  x10_y7: "map-td map-field-0 active",
  x2_y8: "map-td map-field-0 active",
  x5_y8: "map-td map-field-1 active",
  x6_y8: "map-td map-field-0 rotate-90 active",
  x7_y8: "map-td map-field-1 rotate-270 active",
  x10_y8: "map-td map-field-0 active",
  x2_y9: "map-td map-field-0 active",
  x10_y9: "map-td map-field-0 active",
  x2_y10: "map-td map-field-1 active",
  x3_y10: "map-td map-field-0 rotate-90 active",
  x4_y10: "map-td map-field-0 rotate-90 active",
  x5_y10: "map-td map-field-0 rotate-90 active",
  x6_y10: "map-td map-field-0 rotate-90 active",
  x7_y10: "map-td map-field-1 rotate-180 active",
  x10_y10: "map-td map-field-1 active",
  x11_y10: "map-td map-field-0 rotate-90 active",
  x12_y10: "map-td map-field-1 rotate-180 active",
  x7_y11: "map-td map-field-0 active",
  x12_y11: "map-td map-field-0 active",
  x2_y12: "map-td map-field-1 rotate-90 active",
  x3_y12: "map-td map-field-0 rotate-90 active",
  x4_y12: "map-td map-field-0 rotate-90 active",
  x5_y12: "map-td map-field-0 rotate-90 active",
  x6_y12: "map-td map-field-0 rotate-90 active",
  x7_y12: "map-td map-field-2 active",
  x8_y12: "map-td map-field-0 rotate-90 active",
  x9_y12: "map-td map-field-1 rotate-180 active",
  x12_y12: "map-td map-field-0 active",
  x2_y13: "map-td map-field-0 active",
  x7_y13: "map-td map-field-0 active",
  x9_y13: "map-td map-field-1 active",
  x10_y13: "map-td map-field-0 rotate-90 active",
  x11_y13: "map-td map-field-0 rotate-90 active",
  x12_y13: "map-td map-field-1 rotate-270 active",
  x2_y14: "map-td map-field-0 active",
  x7_y14: "map-td map-field-0 active"
};