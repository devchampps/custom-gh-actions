const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
  try {
    const version = core.getInput('version') || 'latest';
    
    console.log(`Installing MyCLI version: ${version}...`);

    //execSync(`curl -fsSL https://cli.example.com/install.sh | sh`, { stdio: 'inherit' });

    //aws-cli/2.8.9
    execSync(`curl "https://s3.amazonaws.com/aws-cli/awscli-bundle-2.8.9.zip" -o "awscli-bundle.zip" | sh`, { stdio: 'inherit' });
    execSync(`unzip "awscli-bundle.zip" . | sh`, { stdio: 'inherit' });
    execSync(`sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws | sh`, { stdio: 'inherit' });

    console.log("MyCLI installed successfully.");
  } catch (error) {
    core.setFailed(`Installation failed: ${error.message}`);
  }
}

run();