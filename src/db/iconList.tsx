interface IIconList {
  [key: string]: TIcon
};

type TIcon = {
  [key: string]: string,
};

export const iconList: IIconList = {
  'instagram': { 
    'name': 'Instagram',
    'url': '',
    'src': 'assets/icons/instagram.png'
  },
  'github': { 
    'name': 'GitHub',
    'url': 'https://github.com/franciscoclavero',
    'src': 'assets/icons/github.png'
  },
  'linkedin': { 
    'name': 'Linkedin',
    'url': 'https://www.linkedin.com/in/francisco-clavero',
    'src': 'assets/icons/linkedin.png'
  }
};