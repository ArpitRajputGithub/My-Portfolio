# Modern Portfolio Website

A responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🌓 Dark/Light mode
- 🎭 Animated UI with Framer Motion
- 📊 Dynamic project showcase
- 📝 Contact form with EmailJS
- 🔍 SEO-friendly with react-helmet-async
- 🚀 Optimized for performance

## Tech Stack

- React (with TypeScript)
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- EmailJS
- React Helmet Async

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy example environment file and update with your values
cp .env.example .env

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview the built project
npm run preview
```

## GitHub Setup

To push this project to GitHub:

1. Create a new repository on GitHub
2. Initialize your local repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

Make sure not to push sensitive data:
- The `.gitignore` file is already set up to exclude sensitive files
- Use `.env.example` for documentation instead of your actual `.env` file
- Never commit API keys, tokens, or credentials

## Deployment

This project is configured for deployment to AWS S3 and CloudFront.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
S3_BUCKET_NAME=your-s3-bucket-name
CLOUDFRONT_DISTRIBUTION_ID=your-cloudfront-distribution-id
```

### Deploy Command

```bash
# Deploy to AWS
npm run deploy
```

### GitHub Actions

This project uses GitHub Actions for CI/CD. Set up the following secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

The workflow will automatically build and deploy your site when you push to the main branch.

## Project Structure

```
/public             # Static files
/src
  /assets           # Images, fonts, etc.
  /components       # React components
    /layout         # Layout components
    /projects       # Project-related components
    /ui             # Reusable UI components
  /context          # React contexts
  /data             # Data files
  /hooks            # Custom React hooks
  /pages            # Page components
  /types            # TypeScript type definitions
  /utils            # Utility functions
```

## EmailJS Configuration

To enable the contact form to send emails, you need to configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service by connecting your email account (Gmail, Outlook, etc.)
3. Create a new email template:
   - Go to "Email Templates" and click "Create New Template"
   - Design your template using the visual editor
   - Use the variables: `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}` in your template
   - Save the template
4. Update your `.env` file with your actual credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id  # example: service_bw90ztd
   VITE_EMAILJS_TEMPLATE_ID=your_template_id  # This should NOT be template_1234567890
   VITE_EMAILJS_USER_ID=your_user_id  # example: YRNwdkhFIuiMXuGjd
   ```
5. Find these values in your EmailJS dashboard:
   - Service ID: In the "Email Services" section, click on your service and copy the ID
   - Template ID: In the "Email Templates" section, click on your template and copy the ID
   - User ID: In your Account settings under "API Keys"

Test your configuration by submitting the contact form. If you see "Message Sent!" confirmation, the setup is working correctly.

## License

MIT
