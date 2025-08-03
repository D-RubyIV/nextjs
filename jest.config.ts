/**
 * Cấu hình Jest cho dự án Next.js
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  // Tự động mock tất cả các module được import trong tests
  // automock: false,

  // Dừng chạy tests sau khi có n lần fail
  // bail: 0,

  // Thư mục Jest lưu cache thông tin dependencies
  // cacheDirectory: "C:\\Users\\pha4h\\AppData\\Local\\Temp\\jest",

  // Tự động xóa mock calls, instances, contexts và results trước mỗi test
  clearMocks: true,

  // Thu thập thông tin coverage khi chạy test
  collectCoverage: true,

  // Mảng các pattern để chỉ định files cần thu thập coverage
  // collectCoverageFrom: undefined,

  // Thư mục output coverage files
  coverageDirectory: "coverage",

  // Mảng regex patterns để bỏ qua khi thu thập coverage
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Provider để instrument code cho coverage
  coverageProvider: "v8",

  // Danh sách reporters Jest sử dụng khi viết coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // Cấu hình ngưỡng tối thiểu cho coverage results
  // coverageThreshold: undefined,

  // Path đến custom dependency extractor
  // dependencyExtractor: undefined,

  // Báo lỗi khi gọi deprecated APIs
  // errorOnDeprecated: false,

  // Cấu hình mặc định cho fake timers
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Bắt buộc thu thập coverage từ ignored files
  // forceCoverageMatch: [],

  // Path đến module export async function chạy trước tất cả test suites
  // globalSetup: undefined,

  // Path đến module export async function chạy sau tất cả test suites
  // globalTeardown: undefined,

  // Set global variables cần có trong tất cả test environments
  // globals: {},

  // Số lượng workers tối đa để chạy tests
  // maxWorkers: "50%",

  // Mảng tên thư mục được search recursively từ location của requiring module
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // Mảng file extensions mà modules sử dụng
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node"
  ],

  // Map từ regex patterns đến module names để stub out resources
  moduleNameMapper: {
    // Resolve alias @/ thành đường dẫn src/
    "^@/(.*)$": "<rootDir>/src/$1",
    // Mock CSS files để tránh lỗi khi import CSS
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  // Mảng regex patterns matched với module paths trước khi 'visible' với module loader
  // modulePathIgnorePatterns: [],

  // Kích hoạt notifications cho test results
  // notify: false,

  // Enum chỉ định notification mode. Yêu cầu { notify: true }
  // notifyMode: "failure-change",

  // Preset được sử dụng làm base cho Jest configuration
  preset: "ts-jest",

  // Chạy tests từ một hoặc nhiều projects
  // projects: undefined,

  // Sử dụng custom reporters cho Jest
  // reporters: undefined,

  // Tự động reset mock state trước mỗi test
  // resetMocks: false,

  // Reset module registry trước khi chạy từng test riêng lẻ
  // resetModules: false,

  // Path đến custom resolver
  // resolver: undefined,

  // Tự động restore mock state và implementation trước mỗi test
  // restoreMocks: false,

  // Root directory Jest scan cho tests và modules
  // rootDir: undefined,

  // Danh sách paths đến directories Jest sử dụng để search files
  // roots: [
  //   "<rootDir>"
  // ],

  // Cho phép sử dụng custom runner thay vì Jest default test runner
  // runner: "jest-runner",

  // Paths đến modules chạy code để configure hoặc setup testing environment trước mỗi test
  // setupFiles: [],

  // Danh sách paths đến modules chạy code để configure hoặc setup testing framework trước mỗi test
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],

  // Số giây sau đó test được coi là slow và báo cáo như vậy
  // slowTestThreshold: 5,

  // Danh sách paths đến snapshot serializer modules Jest sử dụng cho snapshot testing
  // snapshotSerializers: [],

  // Test environment sẽ được sử dụng cho testing
  testEnvironment: "jsdom",

  // Options sẽ được pass đến testEnvironment
  // testEnvironmentOptions: {},

  // Thêm location field vào test results
  // testLocationInResults: false,

  // Glob patterns Jest sử dụng để detect test files
  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)"
  ],

  // Mảng regex patterns matched với tất cả test paths, matched tests sẽ bị skip
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Regex pattern hoặc array patterns Jest sử dụng để detect test files
  // testRegex: [],

  // Option cho phép sử dụng custom results processor
  // testResultsProcessor: undefined,

  // Option cho phép sử dụng custom test runner
  // testRunner: "jest-circus/runner",

  // Map từ regex patterns đến paths transformers
  transform: {
    // Sử dụng ts-jest để transform TypeScript và JSX files
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      "tsconfig": {
        // Cấu hình JSX để sử dụng React 17+ JSX transform
        "jsx": "react-jsx"
      }
    }]
  },

  // Mảng regex patterns matched với tất cả source file paths, matched files sẽ skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // Mảng regex patterns matched với tất cả modules trước khi module loader tự động return mock
  // unmockedModulePathPatterns: undefined,

  // Chỉ định mỗi test riêng lẻ có được report trong quá trình chạy không
  // verbose: undefined,

  // Mảng regex patterns matched với tất cả source file paths trước khi re-run tests trong watch mode
  // watchPathIgnorePatterns: [],

  // Có sử dụng watchman cho file crawling không
  // watchman: true,
};

export default config;
