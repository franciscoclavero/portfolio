const route = 'assets/icons/skills/';

export const skillsList = {
  'hard': { 
    'title': 'Hard Skills',  
    'skills': [
      {'name': 'HTML',       'src': `${route}html.png`, 'props': [
        'HTML Semântico'
      ]},
      {'name': 'CSS',        'src': `${route}css.png`, 'props': []},
      {'name': 'Javascript', 'src': `${route}javascript.png`, 'props': [
        'Function', 'Class', 'Loops', 'Eventos de teclado', 'Manipulação de Elementos',
        'Variaveis', 'Math', 'Timer', 'Requisições'
      ]},
      {'name': 'Typescript', 'src': `${route}typescript.png`, 'props': [
        'Tipos', 'Tipos em funções', 'Interface', 'Type'
      ]},
      {'name': 'React',      'src': `${route}react.png`, 'props': [
        'Functional Component', 'Class Component', 'CSS InLine', 'CSS Module', 
        'Css in JS', 'Lifecycle', 'State', 'Hooks', 'useRef', 'useMemo', 'useCallback',
        'Context', 'Consumo de API'
      ]},
      {'name': 'Redux',      'src': `${route}redux.png`, 'props': []},
      {'name': 'RTL',        'src': `${route}rtl.png`, 'props': []},
      {'name': 'Jest',       'src': `${route}jest.png`, 'props': []},
      {'name': 'Storybook',  'src': `${route}storybook.png`, 'props': []},
      {'name': 'Git',        'src': `${route}git.png`, 'props': [
        'git init', 'git status', 'git add', 'git branch', 'git commit', 
        'git reset', 'git log', 'git branch', 'git diff', 'git fetch',
        'git push', 'git pull', 'GitFlow'
      ]},
      {'name': 'Figma',      'src': `${route}figma.png`, 'props': []},
      {'name': 'Laravel',    'src': `${route}laravel.png`, 'props': []},
      {'name': 'MySql',      'src': `${route}mysql.png`, 'props': []},
      {'name': 'Delphi',     'src': `${route}delphi.png`, 'props': []},
    ],
  },
  'soft': {
    'title': 'Soft Skills',  
    'skills': [
      {'name': 'Adaptação',       'src': `${route}adaptable.png`, 'props': []},
      {'name': 'Resolução de problemas',       'src': `${route}problem-solving.png`, 'props': []},
      {'name': 'Trabalho em equipe',       'src': `${route}team-work.png`, 'props': []},
      {'name': 'Trabalho Sob Pressão',       'src': `${route}work-pressure.png`, 'props': []},
      {'name': 'Princípios Éticos',       'src': `${route}ethic.png`, 'props': []},
      {'name': 'Auto-aprendizagem',       'src': `${route}self-learning.png`, 'props': []},
      {'name': 'Responsabilidade',       'src': `${route}accountability.png`, 'props': []},
    ],
  },
}