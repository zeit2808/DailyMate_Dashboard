import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#D4622A',
    colorBgLayout: '#F7F2EA',
    colorBgContainer: '#FFFCF5',
    colorText: '#2C1A0E',
    colorTextSecondary: '#8B6E52',
    colorBorder: 'rgba(139, 94, 60, 0.14)',
    borderRadius: 14,
    fontFamily: "'Nunito', system-ui, sans-serif",
  },
  components: {
    Layout: {
      siderBg: '#FFFCF5',
      headerBg: '#F7F2EA',
      bodyBg: '#F7F2EA',
    },
    Menu: {
      itemBg: '#FFFCF5',
      itemSelectedBg: 'rgba(212, 98, 42, 0.1)',
      itemSelectedColor: '#D4622A',
      itemColor: '#8B6E52',
      itemHoverColor: '#D4622A',
    },
    Card: {
      colorBgContainer: '#FFFCF5',
      borderRadiusLG: 20,
    },
  },
};
