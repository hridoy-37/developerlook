import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface BaseContent {
  slug: string
  title: string
  description: string
  date: string
  coverImage: string
  content: string
}

export interface BlogPost extends BaseContent {
  category: string
  readTime: string
}

export interface CaseStudy extends BaseContent {
  client: string
  service: string
  metric: string
}

export function getContentList<T extends BaseContent>(type: 'blogs' | 'case-studies'): T[] {
  const dirPath = path.join(contentDir, type)
  if (!fs.existsSync(dirPath)) {
    return []
  }
  
  const files = fs.readdirSync(dirPath)
  const contentList = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dirPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      
      return {
        ...data,
        slug: file.replace('.md', ''),
        content
      } as T
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
  return contentList
}

export function getContentBySlug<T extends BaseContent>(type: 'blogs' | 'case-studies', slug: string): T | null {
  const filePath = path.join(contentDir, type, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  
  return {
    ...data,
    slug,
    content
  } as T
}
