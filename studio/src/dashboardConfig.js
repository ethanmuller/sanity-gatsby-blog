export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea7a7b8a438a7459927ad13',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ct4a6aqa',
                  apiId: 'a5049457-4e90-4322-a499-55da34e66c0c'
                },
                {
                  buildHookId: '5ea7a7b8190367926a216806',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-i41qkqha',
                  apiId: '814e4e67-1e3a-48b7-9744-b310eda15f64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ethanmuller/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-i41qkqha.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
