import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <footer className={`w-full py-12 px-4 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold">ShadcnKit</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5" />
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-sm max-w-md">
              ShadcnKit SaaS template is a powerful and versatile software application that provides a comprehensive framework for building and delivering cloud-based solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {['Project Management', 'Multi-tenancy', 'Scalability', 'Customization', 'Integration', 'Mobile accessibility', 'Analytics and reporting'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              {['User management', 'Workflow automation', 'API access', 'Data visualization', 'Version control', 'Upgrades', 'Billing and invoicing'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              {['Docs', 'Pricing', 'Integrations', 'Blog', 'About'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 UI Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}