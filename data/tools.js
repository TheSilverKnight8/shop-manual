const tools = [
{
  id: "drill-press",            // string: lowercase, no spaces; used in the URL
  name: "Drill Press",          // string: shown to students

  // matching (what the picker reads)
  materials: ["wood", "acrylic", "polycarbonate"],       // list of strings
  objectives: ["straight bore"], // list of strings
  precision: 3,               // number: 1 = rough, 2 = medium, 3 = fine
  maxThickness: 5,            // number (inches)
  maxLong: 9999,                // number (inches)
  maxWide: 9999,                 // number (inches)

  // entry content (what the tool page shows)
  summary: "...",             // string: one or two sentences on what it is
  operation: ["...", "..."],  // list of strings: the steps, in order
  safety: ["...", "..."],     // list of strings
  designedFor: ["..."],       // list of strings
  notDesignedFor: ["..."],    // list of strings
  video: ""                   // string: link, or empty if none yet
},

{
  id: "bandsaw",
  name: "Bandsaw",

  
  materials: ["wood", "acrylic", "polycarbonate"],
  objectives: ["curved cuts"],
  precision: 3,
  maxThickness: 3,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "drill",
  name: "Drill",

  
  materials: ["wood", "acrylic", "polycarbonate"],
  objectives: ["straight bore"],
  precision: 2,
  maxThickness: 3,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "impact-driver",
  name: "Impact Driver",

  
  materials: ["wood",],
  objectives: ["driving screws"],
  precision: 2,
  maxThickness: 5,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "jigsaw",
  name: "Jigsaw",

  
  materials: ["wood", "acrylic", "polycarbonate"],
  objectives: ["curved cuts"],
  precision: 1,
  maxThickness: 2,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "miter-saw",
  name: "Miter Saw",

  
  materials: ["wood",],
  objectives: ["straight cuts"],
  precision: 3,
  maxThickness: 6,
  maxLong: 9999,
  maxWide: 6,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "belt-sander",
  name: "Belt Sander",

  
  materials: ["wood"],
  objectives: ["surface finishing"],
  precision: 1,
  maxThickness: 9999,
  maxLong: 10,
  maxWide: 10,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "palm-sander",
  name: "Palm Sander",

  
  materials: ["wood",],
  objectives: ["surface finishing"],
  precision: 2,
  maxThickness: 9999,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "reciprocating-saw",
  name: "Reciprocating Saw",

  
  materials: ["wood", "metal", "acrylic", "polycarbonate"],
  objectives: ["cutouts", "demolition"],
  precision: 1,
  maxThickness: 8,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "mill",
  name: "Mill",

  
  materials: ["wood", "metal"],
  objectives: ["straight bore", "detailed bore"],
  precision: 3,
  maxThickness: 5,
  maxLong: 10,
  maxWide: 5,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "table-saw",
  name: "Table Saw",

  
  materials: ["wood", "acrylic", "polycarbonate"],
  objectives: ["straight cuts", "long cuts"],
  precision: 2,
  maxThickness: 3,
  maxLong: 9999,
  maxWide: 36,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "track-saw",
  name: "Track Saw",

  
  materials: ["wood", "acrylic", "polycarbonate"],
  objectives: ["straight cuts", "long cuts"],
  precision: 3,
  maxThickness: 2,
  maxLong: 48,
  maxWide: 36,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "grinder",
  name: "Grinder",

  
  materials: ["metal",],
  objectives: ["surface finishing"],
  precision: 1,
  maxThickness: 9999,
  maxLong: 10,
  maxWide: 10,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "angle-grinder",
  name: "Angle Grinder",

  
  materials: ["metal",],
  objectives: ["curved cuts", "surface finishing"],
  precision: 2,
  maxThickness: 3,
  maxLong: 9999,
  maxWide: 9999,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},

{
  id: "laser-cutter",
  name: "Laser Cutter",

  
  materials: ["metal",],
  objectives: ["precise cuts"],
  precision: 3,
  maxThickness: 0.5,
  maxLong: 36,
  maxWide: 24,

  summary: "...",
  operation: ["...", "..."],
  safety: ["...", "..."],
  designedFor: ["..."],
  notDesignedFor: ["..."],
  video: ""
},
]