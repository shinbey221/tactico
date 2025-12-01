import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // ⬇️ この行は削除するかコメントアウトします
    // './components/**/*.{js,ts,jsx,tsx,mdx}', 
    // ⬇️ この行で src ディレクトリ内のすべてのコンポーネントがカバーされます
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1200px',
      }
    }
  },
  plugins: [],
};
export default config;
