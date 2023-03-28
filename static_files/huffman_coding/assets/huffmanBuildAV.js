// This is largely redundant, having been replace in the book modules
// with static slideshows (since this is just a static example).
// But it does put everything into one place.
/*global alert: true, ODSA, HUFF, console */
$(document).ready(function() {
  "use strict";

  //////////////////////////////////////////////////////////////////
  // Start processing here
  //////////////////////////////////////////////////////////////////
  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig({json_path: "/AV/Binary/huffman.json"}),
      interpret = config.interpreter,       // get the interpreter
      settings = config.getSettings();      // Settings for the AV

  // Create a JSAV instance
  var av = new JSAV($(".avcontainer"), {settings: settings});
  var freqs = [ 3,   1,   4,   1,   1,   1,   2], // The frequency counts
      chars = ["h", "a", "p", "y", "i", "o", "_"],  // The characters
      trees = [];   // Pointers to all of the partial Huffman trees
  var codeArray = [];
  var value;
  var root;
  var i;

  // initialization for all the arrays
  for (i = 0; i < freqs.length; i++) {
    value = freqs[i] + "<br>" + chars[i];
    trees[i] = av.ds.binarytree({center: false});
    root = trees[i].root();
    root.value(value);
    root.freq = freqs[i];
  }

  // Initialize the display
  av.umsg(interpret("Huffman Coding"));
  HUFF.layAll(trees);
  av.displayInit();

  // Construct the huffman coding tree with animation.
  HUFF.huffBuild_animated(av, interpret, freqs, trees);

  av.umsg(interpret("Huffman Coding"));
  HUFF.layAll(trees);
  av.step();

  av.umsg(interpret("Huffman Coding"));
  av.step();

  // Animation for assigning the codes
  HUFF.setLabels_animated(av, interpret, trees[0], trees[0].root());

  av.umsg(interpret("Huffman Coding"));
  av.step();

  HUFF.showCodes_animated(av, interpret, freqs, chars, codeArray, trees[0]);

  trees[0].hide();
  av.umsg(interpret("Huffman Coding"));
  var matrixData = [["<b>Char</b>", "<b>Freq</b>", "<b>Code</b>", "<b>Bits</b>"]];
  for (i = 0; i < freqs.length; i++) {
    matrixData.push([chars[i], freqs[i], codeArray[i], codeArray[i].length]);
  }
  av.ds.matrix(matrixData, {style: "plain"});
  av.recorded(); // done recording changes, will rewind


  // Process About button: Pop up a message with an Alert
  function about() {
    alert(ODSA.AV.aboutstring(interpret(".avTitle"), interpret("av_Authors")));
  }

  // Connect action callbacks to the HTML entities
  $("#about").click(about);
});
