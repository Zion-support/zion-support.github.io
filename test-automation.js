<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
const testAutomation = new TestAutomation();
const arg = process.argv[2];
if (arg === "coverage") {
  testAutomation.runCoverage()} else {
  testAutomation.runTests()}
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
=======
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
const { execSync } = require("child_process"); class TestAutomation { runTests() { try { console.log("Running test suite..."); execSync("npm test -- --passWithNoTests",{ stdio: "inherit" }); console.log("Tests completed successfully")} catch (error) { console.error("Tests failed:",error.message)} } runCoverage() { try { console.log("Running test coverage..."); execSync("npm test -- --coverage --passWithNoTests",{ stdio: "inherit" }); console.log("Coverage analysis completed")} catch (error) { console.error("Coverage analysis failed:",error.message)} } } const testAutomation = new TestAutomation(); const arg = process.argv[2]; if (arg === "coverage") { testAutomation.runCoverage()} else { testAutomation.runTests()}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
