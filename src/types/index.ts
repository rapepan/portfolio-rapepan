export type Language = 'en' | 'th'

export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  tech: string[]
  github: string
  demo: string
  color: string
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export interface ExperienceItem {
  titleKey: string
  descriptionKey: string
  period: string
  icon: string
}

export interface NavLink {
  labelKey: string
  href: string
}
