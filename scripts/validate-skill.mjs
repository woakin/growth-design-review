import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🔍 Validating Growth Design Review Skill...\n');

let errors = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`  ✅ ${desc}`);
  } else {
    console.error(`  ❌ ${desc}`);
    errors++;
  }
}

// 1. Verify SKILL.md exists and has valid frontmatter
const skillPath = path.join(rootDir, 'SKILL.md');
check('SKILL.md exists', fs.existsSync(skillPath));

if (fs.existsSync(skillPath)) {
  const skillContent = fs.readFileSync(skillPath, 'utf8');
  check('SKILL.md has YAML frontmatter with name', /name:\s*growth-design-review/.test(skillContent));
  check('SKILL.md has description', /description:\s*.+/.test(skillContent));
  check('SKILL.md contains Causal Diagnostic Pipeline', skillContent.includes('Causal Diagnostic Pipeline'));
  check('SKILL.md contains Context Calibration', skillContent.includes('Context Calibration'));
}

// 2. Verify all referenced files exist
const requiredReferences = [
  'psych.md',
  'bias.md',
  'clear.md',
  'rules-of-thumb.md',
  'psychological-triggers.md'
];

for (const ref of requiredReferences) {
  const refPath = path.join(rootDir, 'reference', ref);
  check(`Reference file exists: reference/${ref}`, fs.existsSync(refPath));
  if (fs.existsSync(refPath)) {
    const size = fs.statSync(refPath).size;
    check(`Reference file reference/${ref} is not empty (> 100 bytes)`, size > 100);
  }
}

// 3. Verify README.md
const readmePath = path.join(rootDir, 'README.md');
check('README.md exists', fs.existsSync(readmePath));
if (fs.existsSync(readmePath)) {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  check('README.md includes Quick Install command at top', readmeContent.includes('npx skills add woakin/growth-design-review'));
  check('README.md includes 30-Second Quick Start', readmeContent.includes('30-Second Quick Start'));
  check('README.md includes Comparison Matrix', readmeContent.includes('Why Growth Design Review?'));
  check('README.md includes FAQ section', readmeContent.includes('Frequently Asked Questions'));
}

console.log('\n----------------------------------------');
if (errors === 0) {
  console.log('✨ All validation checks passed successfully!\n');
  process.exit(0);
} else {
  console.error(`💥 Failed with ${errors} error(s).\n`);
  process.exit(1);
}
