module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    
    {
      source: '/blogs/an-insight-into-recruitment-agencies',
      destination: 'https://blog.yomabusinesssolutions.com/an-insight-into-recruitment-agencies',
      permanent: true,
    },

    {
      source: '/blogs/employment-services-in-bangalore',
      destination: 'https://blog.yomabusinesssolutions.com/employment-services-in-bangalore',
      permanent: true,
    },
    {
      source: '/blogs/staffing-solution-in-india',
      destination: 'https://blog.yomabusinesssolutions.com/staffing-solution-in-india',
      permanent: true,
    },
    {
      source: '/blogs/reengineering-the-recruitment-process',
      destination: 'https://blog.yomabusinesssolutions.com/re-engineering-the-recruitment-process/',
      permanent: true,
    },
    {
      source: '/blogs/staffing-solutions-play-a-vital-role-in-corporate-india',
      destination: 'https://blog.yomabusinesssolutions.com/staffing-solutions-play-a-vital-role-in-corporate-india',
      permanent: true,
    },
    {
      source: '/blogs/benefits-of-temporary-staffing-agency',
      destination: 'https://blog.yomabusinesssolutions.com/benefits-of-temporary-staffing-agency',
      permanent: true,
    },
    {
      source: '/blogs/5-common-myths-debunked-about-staffing-agencies',
      destination: 'https://blog.yomabusinesssolutions.com/5-common-myths-debunked-about-staffing-agencies',
      permanent: true,
    },
    {
      source: '/blogs/a-quick-insight-into-differences-between-managed-services-and-outsourcing',
      destination: 'https://blog.yomabusinesssolutions.com/a-quick-insight-into-differences-between-managed-services-and-outsourcing',
      permanent: true,
    },
    {
      source: '/blogs/all-about-recruitment-process-outsourcing-and-how-it-can-save-your-time-and-money',
      destination: 'https://blog.yomabusinesssolutions.com/all-about-recruitment-process-outsourcing-and-how-it-can-save-your-time-and-money',
      permanent: true,
    },
    {
      source: '/blogs/what-is-employee-retention',
      destination: 'https://blog.yomabusinesssolutions.com/what-is-employee-retention',
      permanent: true,
    },
    {
      source: '/blogs/why-is-employee-motivation-important',
      destination: 'https://blog.yomabusinesssolutions.com/why-is-employee-motivation-important',
      permanent: true,
    },
    {
      source: '/blogs/quick-guide-to-an-effective-recruitment-process',
      destination: 'https://blog.yomabusinesssolutions.com/quick-guide-to-an-effective-recruitment-process',
      permanent: true,
    },
    

    {
      source: '/blogs/:path*',
      destination: 'https://blog.yomabusinesssolutions.com/',
      permanent: false
    },

  ]
}
