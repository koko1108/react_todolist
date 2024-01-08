/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 适用于所有 JS、JSX、TS、TSX 文件
    "./public/index.html",        // 如果你在 HTML 文件中也使用了 Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

