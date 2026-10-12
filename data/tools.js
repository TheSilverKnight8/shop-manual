const tools = [
{
  id: "drill-press",            // string: lowercase, no spaces; used in the URL
  name: "Drill Press",          // string: shown to students

  // matching (what the picker reads)
  materials: ["wood", "acrylic", "polycarbonate"],       // list of strings
  objectives: ["straight bore"], // list of strings
  precision: 3,               // number: 1 = rough, 2 = medium, 3 = fine
  maxThickness: 5,            // number
  maxSize: 2,                // number

  // entry content (what the tool page shows)
  summary: "...",             // string: one or two sentences on what it is
  operation: ["...", "..."],  // list of strings: the steps, in order
  safety: ["...", "..."],     // list of strings
  designedFor: ["..."],       // list of strings
  notDesignedFor: ["..."],    // list of strings
  video: ""                   // string: link, or empty if none yet
}
]