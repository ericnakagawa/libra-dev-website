const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['label'],
      icon: 'img/core-contributors.svg',
      noLink: true,
    },
    id: 'core/overview', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['category-index'],
    },
    href: '/docs/core/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {
      icon: 'img/concepts.svg',
      theme: 'secondary',
    },
    items: ['doc1', 'doc2', 'doc3'],
    label: 'Concepts',
    type: 'category',
  },
  {
    extra: {
      icon: 'img/tutorials.svg',
      theme: 'secondary',
    },
    items: ['doc1', 'doc2', 'doc3'],
    label: 'Tutorials',
    type: 'category',
  },
  {
    extra: {
      classNames: [],
      icon: 'img/develop.svg',
      theme: 'secondary',
    },
    items: ['doc1', 'doc2', 'doc3'],
    label: 'Develop',
    type: 'category',
  },
  getReference('secondary'),
];

module.exports = Sidebar;
