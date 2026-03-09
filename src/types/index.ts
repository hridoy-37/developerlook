export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Project {
  id: string
  title: string
  category: string
  image: string
  blurDataURL?: string
  href: string
  tags: string[]
}

export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  href: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}
