# TechDeals - Weekly Technology Deals Showcase

A modern React/Next.js application showcasing weekly technology deals with advanced filtering, lazy loading, and server-side rendering capabilities.

## 🚀 Features

### **Core Functionality**

- **Product Showcase**: Display technology products with images, prices, and categories
- **Advanced Filtering**: Filter by category and price range with real-time updates
- **Lazy Loading**: Infinite scroll with Intersection Observer for optimal performance
- **Server-Side Rendering**: Fast initial page loads with SEO optimization
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### **Technical Features**

- **Server Components**: Next.js 15 App Router with server-side data fetching
- **TypeScript**: Full type safety throughout the application
- **Modern Architecture**: Clean separation of concerns with organized component structure
- **Error Handling**: Comprehensive error boundaries and fallback mechanisms
- **Performance Optimized**: Memoization, caching, and efficient rendering

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with navigation
│   ├── page.tsx                      # Home page
│   ├── ofertas/
│   │   ├── page.tsx                  # Server Component - Offers page
│   │   ├── actions/
│   │   │   └── products.ts           # Server Actions for data fetching
│   │   ├── components/               # Client Components for interactivity
│   │   │   ├── ClientProductsManager.tsx
│   │   │   ├── ClientFilters.tsx
│   │   │   ├── ClientLazyLoad.tsx
│   │   │   ├── ProductsGrid.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── EmptyProducts.tsx
│   │   │   └── LazyLoadTrigger.tsx
│   │   ├── utils/
│   │   │   └── filters.ts            # Server-side filter utilities
│   │   └── types/
│   │       └── index.ts              # TypeScript interfaces
│   └── globals.css                   # Global styles
├── components/                       # Reusable UI components
│   ├── Banner/
│   ├── Navigation/
│   ├── ProductCard/
│   └── ProductFilters/
└── contexts/                         # React contexts (if needed)
```

## 🏗️ Architecture

### **Server Components (Server-Side Rendering)**

- **Data Fetching**: Server Actions with proper error handling and caching
- **Initial Render**: Complete HTML generated on the server for SEO
- **Performance**: Reduced client-side JavaScript bundle
- **SEO Optimized**: Search engine friendly with proper meta tags

### **Client Components (Interactivity)**

- **State Management**: Local state for filters and UI interactions
- **Lazy Loading**: Intersection Observer for smooth infinite scroll
- **Real-time Updates**: Immediate filter responses without server requests
- **User Experience**: Smooth animations and loading states

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Data Formatting**: React Number Format
- **Development**: ESLint, Prettier

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/ricard027/weekly-deals
   cd weekly-deals
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
```

## 📱 Usage

### **Home Page**

- Landing page with company information
- Call-to-action buttons to navigate to offers
- Feature highlights and benefits

### **Offers Page**

- **View Products**: Browse technology products in a responsive grid
- **Filter Products**: Use category buttons and price range inputs
- **Lazy Loading**: Scroll to load more products automatically
- **Clear Filters**: Reset all filters with one click

### **Product Cards**

- Product images with hover effects
- Category badges
- Formatted prices in Brazilian Real
- "Buy Now" buttons with click feedback

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file for custom configurations:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://fakestoreapi.com/products

# Cache Configuration
CACHE_DURATION=3600
```

### **Tailwind Configuration**

The project uses Tailwind CSS v4 with custom configurations in `tailwind.config.ts`.

### **TypeScript Configuration**

TypeScript is configured with strict mode and proper path aliases in `tsconfig.json`.

## 🎯 Performance Features

### **Server-Side Rendering**

- Initial HTML rendered on the server
- Reduced Time to First Contentful Paint (FCP)
- Better Core Web Vitals scores

### **Client-Side Optimizations**

- React.memo for component memoization
- useCallback for stable function references
- useMemo for expensive calculations
- Intersection Observer for efficient lazy loading

### **Caching Strategy**

- Server Actions with 1-hour cache duration
- Static asset optimization
- Efficient bundle splitting

## 🧪 Testing

The application is designed with testability in mind:

- **Component Isolation**: Each component is self-contained
- **Type Safety**: TypeScript prevents runtime errors
- **Error Boundaries**: Graceful error handling
- **Mock Data**: Fallback data when API fails

## 📈 SEO Optimization

- **Server-Side Rendering**: Content available for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Dynamic meta descriptions and titles
- **Performance**: Fast loading times for better rankings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Commit Convention**

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Code style changes
- `test`: Test additions or changes
- `chore`: Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **React Icons**: For the comprehensive icon library
- **FakeStore API**: For providing test data

## 📞 Support

For support, email support@techdeals.com or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
