# Architect Portfolio Website

A modern, responsive portfolio website built for architects to showcase their work and expertise. The site features a clean, minimalist design that emphasizes visual content while maintaining professional aesthetics.

## 🌟 Features

- **Modern UI/UX Design**
  - Responsive layout that works across all devices
  - Smooth animations and transitions
  - Clean typography using Montserrat and Playfair Display fonts
  - Dark/Light mode support

- **Interactive Project Gallery**
  - Grid-based project showcase
  - Modal-based project detail view
  - Image carousel with navigation
  - Lazy loading for optimal performance

- **Key Sections**
  - Hero section with main introduction
  - About section with key statistics
  - Projects portfolio with filtering
  - Contact form with email integration
  - Footer with social links

- **Contact Integration**
  - Functional contact form using EmailJS
  - Real-time form validation
  - Success/Error notifications using Toast
  - Social media links

## 🛠️ Technologies

- **Frontend Framework**
  - React 18
  - TypeScript
  - Vite

- **Styling**
  - Tailwind CSS
  - Shadcn/ui components
  - CSS animations
  - CSS custom properties for theming

- **Libraries**
  - React Router for navigation
  - EmailJS for contact form
  - Radix UI for accessible components
  - Lucide React for icons
  - React Query for data management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd architect-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── hooks/             # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
└── index.css         # Global styles
```

## 🎨 Color Scheme

The project uses a sophisticated color palette designed for architect portfolios:

- Primary: Rich blue (#2B4C7E)
- Accent: Gold (#FAA916)
- Background: Light blue-gray (#F8FAFC)
- Text: Dark blue-gray (#1F2937)

## 🔧 Configuration

- Tailwind configuration in `tailwind.config.ts`
- TypeScript configuration in `tsconfig.json`
- Vite configuration in `vite.config.ts`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Design inspiration from modern architecture websites
- Shadcn/ui for component library
- Tailwind CSS for utility-first styling
- Radix UI for accessible primitives