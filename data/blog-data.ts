import { BlogPost, Author, Category } from '@/types/blog';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    bio: 'Full-stack developer and tech enthusiast with 8+ years of experience in web development. Passionate about React, Node.js, and modern web technologies.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    social: {
      twitter: 'https://twitter.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    bio: 'Frontend architect and UI/UX enthusiast. Specializes in creating beautiful, accessible user interfaces and design systems.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    social: {
      twitter: 'https://twitter.com/michaelchen',
      linkedin: 'https://linkedin.com/in/michaelchen'
    }
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    bio: 'DevOps engineer and cloud architecture specialist. Loves automating processes and building scalable infrastructure.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    social: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      github: 'https://github.com/emilyrodriguez'
    }
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Everything about modern web development, frameworks, and best practices.',
    postCount: 15
  },
  {
    id: '2',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'JavaScript tutorials, tips, and advanced concepts.',
    postCount: 12
  },
  {
    id: '3',
    name: 'React',
    slug: 'react',
    description: 'React.js tutorials, hooks, patterns, and ecosystem.',
    postCount: 10
  },
  {
    id: '4',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Design principles, user experience, and interface design.',
    postCount: 8
  },
  {
    id: '5',
    name: 'DevOps',
    slug: 'devops',
    description: 'Deployment, CI/CD, containerization, and infrastructure.',
    postCount: 6
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern React Applications with Next.js 14',
    excerpt: 'Explore the latest features in Next.js 14 and learn how to build fast, scalable React applications with the new App Router, Server Components, and improved performance optimizations.',
    content: `
# Building Modern React Applications with Next.js 14

Next.js 14 introduces groundbreaking features that revolutionize how we build React applications. In this comprehensive guide, we'll explore the new App Router, Server Components, and performance improvements.

## The New App Router

The App Router is a paradigm shift in how we structure Next.js applications. Unlike the traditional Pages Router, it leverages React's Server Components to deliver better performance and developer experience.

### Key Benefits:
- **Improved Performance**: Server Components reduce bundle size
- **Better SEO**: Enhanced server-side rendering capabilities  
- **Simplified Data Fetching**: Co-located data fetching with components
- **Nested Layouts**: More flexible layout composition

## Server Components Deep Dive

Server Components run on the server and send HTML to the client, reducing JavaScript bundle size and improving initial page load times.

\`\`\`jsx
// Server Component - runs on server
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

## Best Practices

1. **Use Server Components by default** - Only use Client Components when you need interactivity
2. **Co-locate data fetching** - Fetch data close to where it's used
3. **Leverage caching** - Use Next.js built-in caching mechanisms
4. **Optimize images** - Use the Next.js Image component for automatic optimization

Next.js 14 represents a significant leap forward in React development, offering better performance, improved developer experience, and more powerful features for building modern web applications.
    `,
    author: authors[0],
    publishDate: '2024-01-15',
    readTime: 8,
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Server Components', 'Performance'],
    featured: true,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'building-modern-react-applications-nextjs-14'
  },
  {
    id: '2',
    title: 'Mastering CSS Grid and Flexbox for Modern Layouts',
    excerpt: 'Learn how to create responsive, flexible layouts using CSS Grid and Flexbox. This guide covers practical examples and common patterns for modern web design.',
    content: `
# Mastering CSS Grid and Flexbox for Modern Layouts

CSS Grid and Flexbox are powerful layout tools that have revolutionized how we approach web design. Understanding when and how to use each one is crucial for modern web development.

## When to Use Flexbox vs Grid

### Flexbox is ideal for:
- One-dimensional layouts (row or column)
- Component-level layout
- Centering content
- Distributing space between items

### CSS Grid is perfect for:
- Two-dimensional layouts (rows and columns)
- Page-level layout
- Complex grid systems
- Overlapping content

## Practical Examples

### Creating a Responsive Card Layout with Grid

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

### Centering Content with Flexbox

\`\`\`css
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

## Advanced Techniques

Learn about subgrid, container queries, and combining Grid with Flexbox for maximum flexibility in your layouts.
    `,
    author: authors[1],
    publishDate: '2024-01-12',
    readTime: 6,
    category: 'UI/UX Design',
    tags: ['CSS', 'Layout', 'Responsive Design', 'Grid', 'Flexbox'],
    featured: true,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'mastering-css-grid-flexbox-modern-layouts'
  },
  {
    id: '3',
    title: 'JavaScript ES2024: New Features and What They Mean for Developers',
    excerpt: 'Discover the latest JavaScript features in ES2024, including new array methods, improved async/await patterns, and enhanced type checking capabilities.',
    content: `
# JavaScript ES2024: New Features and What They Mean for Developers

JavaScript continues to evolve with ES2024 bringing exciting new features that enhance developer productivity and code quality.

## Array Grouping Methods

The new \`Array.prototype.group()\` and \`Array.prototype.groupToMap()\` methods make data manipulation easier:

\`\`\`javascript
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' }
];

const grouped = products.group(item => item.category);
// { Electronics: [...], Clothing: [...] }
\`\`\`

## Temporal API

The new Temporal API provides better date and time handling:

\`\`\`javascript
const now = Temporal.Now.plainDateTimeISO();
const birthday = Temporal.PlainDate.from('1990-05-15');
const age = now.since(birthday).years;
\`\`\`

## Record and Tuple

Immutable data structures are coming to JavaScript:

\`\`\`javascript
const record = #{ name: 'John', age: 30 };
const tuple = #['apple', 'banana', 'orange'];
\`\`\`

These features represent significant improvements to JavaScript's capabilities and will shape how we write code in the future.
    `,
    author: authors[2],
    publishDate: '2024-01-10',
    readTime: 7,
    category: 'JavaScript',
    tags: ['JavaScript', 'ES2024', 'Web Development', 'Programming'],
    featured: false,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'javascript-es2024-new-features-developers'
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js and TypeScript',
    excerpt: 'Learn how to create robust, type-safe APIs using Node.js and TypeScript. We\'ll cover project structure, error handling, validation, and testing strategies.',
    content: `
# Building Scalable APIs with Node.js and TypeScript

Creating maintainable and scalable APIs requires careful planning and the right tools. TypeScript brings type safety to Node.js development, making our APIs more robust and easier to maintain.

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── utils/
└── types/
\`\`\`

## Type-Safe Route Handlers

TypeScript helps catch errors at compile time:

\`\`\`typescript
interface CreateUserRequest {
  name: string;
  email: string;
  age: number;
}

app.post('/users', async (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
  const { name, email, age } = req.body;
  // TypeScript ensures these properties exist and have correct types
});
\`\`\`

## Error Handling

Implement consistent error handling across your API:

\`\`\`typescript
class ApiError extends Error {
  statusCode: number;
  
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
\`\`\`

## Testing Strategy

Use Jest and Supertest for comprehensive API testing:

\`\`\`typescript
describe('POST /users', () => {
  it('should create a new user', async () => {
    const userData = { name: 'John', email: 'john@example.com', age: 25 };
    
    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201);
      
    expect(response.body.name).toBe(userData.name);
  });
});
\`\`\`

Building scalable APIs requires attention to structure, types, error handling, and testing. TypeScript makes this process much more manageable and reliable.
    `,
    author: authors[0],
    publishDate: '2024-01-08',
    readTime: 10,
    category: 'Web Development',
    tags: ['Node.js', 'TypeScript', 'API', 'Backend', 'Testing'],
    featured: false,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'building-scalable-apis-nodejs-typescript'
  },
  {
    id: '5',
    title: 'The Complete Guide to React Hooks',
    excerpt: 'Master React Hooks with this comprehensive guide covering useState, useEffect, custom hooks, and advanced patterns for building modern React applications.',
    content: `
# The Complete Guide to React Hooks

React Hooks revolutionized how we write React components, enabling us to use state and other React features in functional components. This guide covers everything from basics to advanced patterns.

## Essential Hooks

### useState: Managing Component State

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);

// Functional updates
setCount(prevCount => prevCount + 1);
\`\`\`

### useEffect: Side Effects and Lifecycle

\`\`\`jsx
useEffect(() => {
  // Effect runs after render
  document.title = \`Count: \${count}\`;
  
  // Cleanup function
  return () => {
    document.title = 'React App';
  };
}, [count]); // Dependency array
\`\`\`

## Advanced Hooks

### useReducer: Complex State Logic

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
\`\`\`

### Custom Hooks: Reusable Logic

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Best Practices

- Always include dependencies in useEffect
- Use multiple useEffect hooks for different concerns
- Create custom hooks for reusable logic
- Use useCallback and useMemo for performance optimization

React Hooks provide a powerful and flexible way to manage state and side effects in functional components, leading to cleaner and more maintainable code.
    `,
    author: authors[1],
    publishDate: '2024-01-05',
    readTime: 12,
    category: 'React',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
    featured: false,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'complete-guide-react-hooks'
  },
  {
    id: '6',
    title: 'Docker and Kubernetes for Web Developers',
    excerpt: 'Learn how to containerize your web applications with Docker and orchestrate them with Kubernetes. Perfect for developers looking to improve their DevOps skills.',
    content: `
# Docker and Kubernetes for Web Developers

Containerization has become essential for modern web development. This guide will help you understand Docker and Kubernetes from a web developer's perspective.

## Getting Started with Docker

### Creating a Dockerfile

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

### Docker Compose for Development

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
\`\`\`

## Introduction to Kubernetes

### Basic Deployment

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: my-web-app:latest
        ports:
        - containerPort: 3000
\`\`\`

### Service Configuration

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: web-app-service
spec:
  selector:
    app: web-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
\`\`\`

## Best Practices

- Use multi-stage builds to reduce image size
- Never run containers as root
- Use health checks for better reliability
- Implement proper logging and monitoring
- Use secrets for sensitive data

Docker and Kubernetes provide powerful tools for deploying and scaling web applications, making your development workflow more efficient and your applications more reliable.
    `,
    author: authors[2],
    publishDate: '2024-01-03',
    readTime: 15,
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'DevOps', 'Containerization'],
    featured: false,
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'docker-kubernetes-web-developers'
  }
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getRecentPosts = (limit = 5) => blogPosts.slice(0, limit);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getPostsByTag = (tag: string) => blogPosts.filter(post => post.tags.includes(tag));
export const searchPosts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};