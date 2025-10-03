export const projectData: Record<string, {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  challenges: string;
  solution: string;
}> = {
  ecommerce: {
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern web technologies.',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order management system',
      'Real-time inventory tracking',
      'Admin dashboard for store management',
      'Customer reviews and ratings',
      'Email notifications and order updates',
      'Mobile-responsive design',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'Redis'],
    challenges: 'Implementing secure payment processing and real-time inventory management while maintaining high performance.',
    solution: 'Used microservices architecture with Redis for caching and WebSockets for real-time updates.',
  },
  social: {
    title: 'Social Analytics Dashboard',
    description: 'Real-time analytics platform for social media performance tracking.',
    features: [
      'Multi-platform social media integration',
      'Real-time data visualization',
      'Custom dashboard creation',
      'Automated reporting system',
      'Performance metrics tracking',
      'Audience analysis tools',
      'Content scheduling and publishing',
      'Competitor analysis',
      'Hashtag performance tracking',
      'Export capabilities for reports',
    ],
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'D3.js', 'Celery', 'Redis'],
    challenges: 'Handling large volumes of real-time data and providing meaningful insights quickly.',
    solution: 'Implemented efficient data processing pipelines and caching strategies for optimal performance.',
  },
  task: {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time collaboration features.',
    features: [
      'Real-time task updates',
      'Team collaboration spaces',
      'Project timeline visualization',
      'File sharing and attachments',
      'Comment and discussion threads',
      'Task assignment and notifications',
      'Progress tracking and reporting',
      'Calendar integration',
      'Mobile app for iOS and Android',
      'Offline synchronization',
    ],
    techStack: ['React Native', 'Firebase', 'Redux', 'Socket.io', 'Express', 'MongoDB'],
    challenges: 'Ensuring real-time synchronization across multiple platforms and offline functionality.',
    solution: 'Used Firebase for real-time data sync and implemented robust offline caching mechanisms.',
  },
};