<<<<<<< HEAD
=======
<<<<<<< HEAD
const { execSync } = require("child_process"); class TestAutomation { runTests() { try {  execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); } catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try {  execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); } catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
const { execSync } = require("child_process");
class TestAutomation {
  runTests() {
  try {
  console.log("Running test suite...");
      execSync("npm test -- --passWithNoTests", { "stdio": "inherit" });
      console.log("Tests completed successfully")} catch (error) {
  console.error("Tests "failed": ", error.message)}
  }
  runCoverage() {
  try {
  console.log("Running test coverage...");
      execSync("npm test -- --coverage --passWithNoTests", { "stdio": "inherit" });
      console.log("Coverage analysis completed")} catch (error) {
  console.error("Coverage analysis "failed": ", error.message)}
  }
}
const testAutomation = new TestAutomation();
const arg = process.argv[2];
if (arg === "coverage") {
  testAutomation.runCoverage()} else {
  testAutomation.runTests()}
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
