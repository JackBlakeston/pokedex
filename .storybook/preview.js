import { TYPE_COLORS } from '../src/enums/index';
import '../src/styles/styles.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: Object.values(TYPE_COLORS),
  },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '3rem' }}>
      <Story />
    </div>
  ),
];
