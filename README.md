# Archith Venkatesh - Personal Portfolio Website

A modern, interactive personal portfolio website built with Next.js, showcasing my experience as a Computer Science and Mathematics student at Georgia Tech.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Particle Effects**: Dynamic background particles for visual appeal
- **Responsive Layout**: Fully responsive design that works on all devices
- **Typing Animation**: Dynamic text animation in the hero section
- **Scroll Effects**: Smooth scrolling with progress indicator
- **Contact Form**: Interactive contact form with validation
- **Dark Theme**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Particles**: TSParticles
- **Typing Effect**: React Typed
- **Scroll Effects**: React Scroll & Intersection Observer
- **TypeScript**: Full TypeScript support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/archithvenkatesh/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to your Vercel account:
```bash
vercel login
```

3. Deploy your project:
```bash
vercel
```

4. Follow the prompts to configure your deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure your project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (or leave default)
6. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/archithvenkatesh/personal-website)

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `app/components/Hero.tsx` - Hero section content
- `app/components/About.tsx` - About section content
- `app/components/Experience.tsx` - Work experience
- `app/components/Projects.tsx` - Project showcase
- `app/components/Skills.tsx` - Technical skills
- `app/components/Contact.tsx` - Contact information

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `app/globals.css` for global styles
- Customize component styles in individual component files

### Content
- Replace placeholder content with your actual information
- Update resume link in multiple components
- Modify social media links
- Customize project descriptions and technologies

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌟 Key Features Explained

### Particle System
Interactive particle background using TSParticles for visual appeal.

### Smooth Animations
Framer Motion provides smooth, performant animations throughout the site.

### Typing Animation
Dynamic typing effect in the hero section showcasing different roles.

### Scroll Progress
Visual progress indicator showing scroll position.

### Glassmorphism Design
Modern glass-like effects with backdrop blur and transparency.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/archithvenkatesh/personal-website/issues).

## 📞 Contact

- **Email**: avenkatesh68@gatech.edu
- **LinkedIn**: [archithvenkatesh](https://linkedin.com/in/archithvenkatesh)
- **GitHub**: [archithvenkatesh](https://github.com/archithvenkatesh)

---

Made with ❤️ by Archith Venkatesh
