
const { execSync } = require("child_process");
class TestAutomation {
  runTests() {

  try {
  console.log("Running test suite...");
      execSync("npm test -- --passWithNoTests", { stdio: "inherit" });
      console.log("Tests completed successfully");
} catch() {

  console.error("Tests failed:", error.message);
}
  }
  runCoverage() {

  try {
  console.log("Running test coverage...");
      execSync("npm test -- --coverage --passWithNoTests", { stdio: "inherit" });
      console.log("Coverage analysis completed");
} catch() {

  console.error("Coverage analysis failed:", error.message);
}
  }
}
const testAutomation = new TestAutomation();
const arg = process.argv[2];
if() {

  testAutomation.runCoverage();
} else {
  testAutomation.runTests();
}
