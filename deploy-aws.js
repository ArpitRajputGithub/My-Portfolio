#!/usr/bin/env node

/**
 * Portfolio AWS Deployment Script
 * 
 * This script automates the deployment of the portfolio website to AWS S3 and CloudFront.
 * It requires proper AWS credentials set up in your environment or via AWS CLI.
 * 
 * Requirements:
 * - AWS CLI installed and configured
 * - Required environment variables:
 *   - S3_BUCKET_NAME: Name of the S3 bucket for hosting
 *   - CLOUDFRONT_DISTRIBUTION_ID: ID of the CloudFront distribution
 * 
 * Usage:
 * - npm run deploy
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const DIST_FOLDER = path.join(__dirname, 'dist');
const S3_BUCKET = process.env.S3_BUCKET_NAME;
const CLOUDFRONT_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID;

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Helper function to execute shell commands
function runCommand(command, silent = false) {
  try {
    return execSync(command, { stdio: silent ? 'pipe' : 'inherit' });
  } catch (error) {
    console.error(`${colors.red}Command failed: ${command}${colors.reset}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Main deployment function
async function deploy() {
  console.log(`\n${colors.blue}=== Starting Portfolio Deployment ===${colors.reset}\n`);

  // Check if dist folder exists
  if (!fs.existsSync(DIST_FOLDER)) {
    console.error(`${colors.red}Error: 'dist' folder not found. Run 'npm run build' first.${colors.reset}`);
    process.exit(1);
  }

  // Check for required environment variables
  if (!S3_BUCKET || !CLOUDFRONT_ID) {
    console.error(`${colors.red}Error: Required environment variables not set.${colors.reset}`);
    console.error('Please set S3_BUCKET_NAME and CLOUDFRONT_DISTRIBUTION_ID environment variables.');
    process.exit(1);
  }

  try {
    // Step 1: Build the project (in case it wasn't already built)
    console.log(`${colors.cyan}Step 1: Building project...${colors.reset}`);
    runCommand('npm run build');

    // Step 2: Sync with S3
    console.log(`\n${colors.cyan}Step 2: Deploying to S3 bucket: ${S3_BUCKET}...${colors.reset}`);
    runCommand(`aws s3 sync dist/ s3://${S3_BUCKET} --delete`);

    // Step 3: Invalidate CloudFront cache
    console.log(`\n${colors.cyan}Step 3: Invalidating CloudFront cache...${colors.reset}`);
    runCommand(`aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"`);

    console.log(`\n${colors.green}✅ Deployment completed successfully!${colors.reset}`);
    console.log(`${colors.yellow}Website should be live shortly at: https://${S3_BUCKET}.s3.amazonaws.com/${colors.reset}`);
    console.log(`${colors.yellow}If you've set up a custom domain via CloudFront, use that URL instead.${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.red}Deployment failed:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the deployment
deploy(); 